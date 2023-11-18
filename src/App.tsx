import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

const App = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl text-center my-10 bg-white text-black font-bold w-fit mx-auto p-2 rounded-md">
        Component LifeCycle (Class Component)
      </h1>
      {/* <NavBar /> */}

      <HomePage />
      <AboutPage />
      <ProductsPage />
    </div>
  );
};

export default App;
