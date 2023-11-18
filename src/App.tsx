import { useState } from "react";
import HomePage from "./pages/HomePage";
import NavBar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import HooksPage from "./pages/HooksPage";

const App = () => {
  const [page, setPage] = useState<"home" | "about" | "products" | "hooks">(
    "home"
  );
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl text-center my-10 bg-white text-black font-bold w-fit mx-auto p-2 rounded-md">
        Component LifeCycle (Class Component)
      </h1>
      <NavBar setPage={setPage} />

      {page === "home" && <HomePage />}
      {page === "about" && <AboutPage />}
      {page === "hooks" && <HooksPage />}
      {page === "products" && <ProductsPage />}
    </div>
  );
};

export default App;
