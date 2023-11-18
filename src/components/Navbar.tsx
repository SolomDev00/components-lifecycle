const NavBar = ({
  setPage,
}: {
  setPage: (page: "home" | "about" | "products" | "hooks") => void;
}) => {
  return (
    <nav>
      <ul className="flex items-center justify-center space-x-3">
        <li
          className="underline cursor-pointer hover:text-indigo-600 duration-500"
          onClick={() => setPage("home")}
        >
          Home
        </li>
        <li
          className="underline cursor-pointer hover:text-indigo-600 duration-500"
          onClick={() => setPage("about")}
        >
          About
        </li>
        <li
          className="underline cursor-pointer hover:text-indigo-600 duration-500"
          onClick={() => setPage("products")}
        >
          Products
        </li>
        <li
          className="underline cursor-pointer hover:text-indigo-600 duration-500"
          onClick={() => setPage("hooks")}
        >
          Hooks
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
