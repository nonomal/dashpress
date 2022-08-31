import { queryObjectToQueryString } from "./queryObjectToQueryString";

export const NAVIGATION_LINKS = {
  DASHBOARD: "/admin",
  AUTH_SIGNIN: "/auth",
  ACCOUNT: {
    PROFILE: "/account/profile",
    PASSWORD: "/account/password",
  },
  USERS: {
    LIST: "/users",
    CREATE: "/users/create",
    DETAILS: (username: string) => `/users/${username}`,
  },
  ROLES: {
    LIST: "/roles",
    CREATE: "/roles/create",
    DETAILS: (role: string) => `/roles/${role}`,
  },
  SETUP: {
    USER: "/setup/user",
    CREDENTIALS: "/setup/credentials",
  },
  SETTINGS: {
    DEFAULT: "/admin/settings/entities",
    ENTITIES: "/admin/settings/entities",
    DATE: "/admin/settings/date",
  },
  ENTITY: {
    CREATE: (entity: string) => `/admin/${entity}/create`,
    TABLE: (entity: string) => `/admin/${entity}`,
    DETAILS: (entity: string, id: string) => `/admin/${entity}/${id}`,
    RELATION_DETAILS: (
      entity: string,
      id: string,
      childEntity: string,
      childId: string
    ) => `/admin/${entity}/${id}/relation/${childEntity}/${childId}`,
    RELATION_TABLE: (entity: string, id: string, childEntity: string) =>
      `/admin/${entity}/${id}/relation/${childEntity}`,
    UPDATE: (entity: string, id: string) => `/admin/${entity}/${id}/update`,
    CONFIG: {
      CRUD: (entity: string, query?: Record<string, string>) =>
        `/admin/${entity}/config/crud${queryObjectToQueryString(query)}`,
      FIELDS: (entity: string, query?: Record<string, string>) =>
        `/admin/${entity}/config/fields${queryObjectToQueryString(query)}`,
      ACTIONS: (entity: string) => `/admin/${entity}/config/actions`,
      DICTION: (entity: string) => `/admin/${entity}/config/diction`,
      FORM: (entity: string) => `/admin/${entity}/config/form`,
      RELATIONS: (entity: string) => `/admin/${entity}/config/relations`,
    },
  },
};