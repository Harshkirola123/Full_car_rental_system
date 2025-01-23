declare module "*.svg" {
  import React from "react";
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

export interface IUser {
  _id?: string;
  name?: string;
  email?: string;
  password?: string;
  token?: string;
  role?: string;
}
