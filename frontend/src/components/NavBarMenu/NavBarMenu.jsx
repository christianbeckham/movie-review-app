import { Menu } from "antd";

import { items } from "./MenuItems";

const NavBarMenu = () => {
	return (
		<Menu
			mode="horizontal"
			items={items}
			style={{ minWidth: 0, flex: "auto", backgroundColor: "transparent", color: "#fff" }}
		/>
	);
};

export default NavBarMenu;
