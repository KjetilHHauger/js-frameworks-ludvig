import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex items-center h-14 bg-amber-700 text-amber-50">
      <Link to={"/"} className="mx-4">
        Home
      </Link>
      <Link to={"/edit"} className="mx-4">
        Edit
      </Link>
    </header>
  );
}
