import { deepMap } from "nanostores";

export type User = {
  role: Roles;
  availableRoles: Roles[];
};

export enum Roles {
  ANON = "anon",
  ADMIN = "admin",
  PARTICIPANT = "participant",
  JURY = "jury",
  REGIONAL_ADMIN = "regionaladmin",
  SCHOOL_ADMIN = "schooladmin",
}

const $user = deepMap<User>({
  role: Roles.ANON,
  availableRoles: Object.values(Roles),
});

export default $user;
