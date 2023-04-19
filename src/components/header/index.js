import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="px-2 h-10 border-b flex items-center justify-between mb-5">
      <Link to={'/'} className="uppercase font-bold text-purple-800">Interfacs</Link>
    </header>
  );
}

export default Header;