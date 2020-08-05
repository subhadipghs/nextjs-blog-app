import Navigation from "../UI/Navigation/Navigation";

const Layout = ({ children }) => {
	return (
		<>
			<Navigation title="NextG Blogs"/>
			{children}
		</>
	);
};
export default Layout;
