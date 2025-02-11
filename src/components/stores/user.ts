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
  REGIONALADMIN = "regionaladmin",
  SCHOOLADMIN = "schooladmin",
}

const $user = deepMap<User>({
  role: Roles.ANON,
  availableRoles: Object.values(Roles),
});

export default $user;
