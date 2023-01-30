import { Outlet } from "react-router-dom";
import { Layout, theme } from "antd";

import NavBar from "../NavBar/NavBar";

const PageLayout = () => {
	const { Content, Footer } = Layout;
	const {
		token: { colorBgContainer },
	} = theme.useToken();

	return (
		<Layout style={{ minHeight: "100vh" }}>
			<NavBar />
			<Content
				style={{
					padding: "0 50px",
					margin: "16px 0",
				}}
			>
				<main
					style={{
						background: colorBgContainer,
						minHeight: "280px",
						padding: "24px",
					}}
				>
					<Outlet />
				</main>
			</Content>
			<Footer
				style={{
					textAlign: "center",
				}}
			>
				&copy; MovieBook
			</Footer>
		</Layout>
	);
};

export default PageLayout;
