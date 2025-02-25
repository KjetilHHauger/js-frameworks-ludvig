import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex justify-evenly text-lg cursor-pointer font-bold ">
      <Link to={"/"}>Rainy days</Link>
      <nav className="flex gap-2">
        <Link to={"/products"} className="text-blue-500">
          Products
        </Link>
      </nav>
    </header>
  );
}
