import * as React from "react";
import { render, screen } from "@testing-library/react";
import { AppWrapper } from "@gothicgeeks/design-system";
// import { rest, server } from "__tests__/server";
// import singletonRouter from "next/router";
import mockRouter from "next-router-mock";
import DBCrendentials from "../../pages/setup/credentials";

jest.mock("next/router", () => require("next-router-mock"));

describe("<DBCrendentials />", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/initial");
  });

  it("should render form", async () => {
    render(
      <AppWrapper>
        <DBCrendentials />
      </AppWrapper>
    );

    // expect(singletonRouter.pathname).toBe("/initial");

    expect(
      await screen.findByText("Setup DB crendentials")
    ).toBeInTheDocument();

    // expect(singletonRouter.pathname).toBe("/initial");

    // expect(await screen.findByText("Admin Account Setup")).toBeInTheDocument();
  });
});

// describe("<DBCrendentials /> 2", () => {
//   //   beforeEach(() => {
//   //     server.use(
//   //       rest.get(
//   //         "http://localhost:3000/api/setup/check",
//   //         async (req, res, ctx) => {
//   //           console.log("Using Me");
//   //           return res(
//   //             ctx.json({
//   //               hasUsers: false,
//   //               hasDbCredentials: false,
//   //             })
//   //           );
//   //         }
//   //       )
//   //     );
//   //   });
//   it("should redirect to users page when DB credentials is set", async () => {
//     render(
//       <AppWrapper>
//         <DBCrendentials />
//       </AppWrapper>
//     );

//     expect(await screen.findByText("Admin Account Setup")).toBeInTheDocument();
//   });