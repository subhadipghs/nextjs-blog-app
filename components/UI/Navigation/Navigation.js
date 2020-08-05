import Link from "next/link";
import NavLinks from './NavLinks/NavLinks';
const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];
function Navigation({ title }) {
  return (
    <nav className="border-blue-400">
      <ul className="flex justify-between items-center p-4 border-gray-200">
        <li>
          <Link href="/">
            <a className="text-black ml-5 text-xl no-underline">{title}</a>
          </Link>
        </li>
        <NavLinks links={links}/>
      </ul>
    </nav>
  );
}
Navigation.defaultProps = {
  title: "App"
}

export default Navigation;