import { Layout } from "antd";
import Logo from "../Logo/Logo";
import NavBarMenu from "../NavBarMenu/NavBarMenu";

const { Header } = Layout;

const NavBar = () => {
	return (
		<Header style={{ display: "flex", alignItems: "center" }}>
			<Logo />
			<NavBarMenu />
		</Header>
	);
};

export default NavBar;
