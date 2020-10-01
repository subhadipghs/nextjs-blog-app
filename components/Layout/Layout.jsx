import Navigation from "../UI/Navigation/Navigation";

const Layout = ({ children }) => {
	return (
		<>
			<Navigation title="NextG App"/>
			{children}
		</>
	);
};
export default Layout;
