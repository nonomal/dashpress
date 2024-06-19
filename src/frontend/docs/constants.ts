import { createStore } from "frontend/lib/store";
import { MessageDescriptor } from "@lingui/core";
import { useLingui } from "@lingui/react";
import { DOCUMENTATION_LABEL } from ".";
import { IGroupActionButton } from "@/components/app/button/types";

type IDocumentationCanvasStore = {
  title: string;
  setTitle: (title: string) => void;
};

export const useDocumentationCanvasStore =
  createStore<IDocumentationCanvasStore>((set) => ({
    title: "",
    setTitle: (title) =>
      set(() => ({
        title,
      })),
  }));

export const useDocumentationActionButton = (
  title: MessageDescriptor
): IGroupActionButton => {
  const canvasStore = useDocumentationCanvasStore();

  const { _ } = useLingui();

  return {
    id: "help",
    action: () => canvasStore.setTitle(_(title)),
    systemIcon: "Help",
    label: DOCUMENTATION_LABEL.CONCEPT(_(title)),
  };
};
