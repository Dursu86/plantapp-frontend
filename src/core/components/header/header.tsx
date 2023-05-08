import { NavMenu } from "../nav.menu/nav.menu";

export type MenuOption = {
  img: string;
  path: string;
};

export const headerOptions: MenuOption[] = [
  { img: "../../../assets/plant-header.png", path: "/plants" },
  { img: "../../../assets/plus.png", path: "/add" },
  { img: "../../../assets/exit.png", path: "/" },
];

export function Header() {
  return (
    <header data-testid="header">
      <NavMenu options={headerOptions} />
    </header>
  );
}
