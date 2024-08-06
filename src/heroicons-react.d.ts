declare module "@heroicons/react" {
  import * as React from "react";

  export type IconProps = React.SVGProps<SVGSVGElement>;

  export const HomeIcon: React.FunctionComponent<IconProps>;
  export const UserIcon: React.FunctionComponent<IconProps>;
  export const MenuIcon: React.FunctionComponent<IconProps>;
  // Add other icons as needed
}
