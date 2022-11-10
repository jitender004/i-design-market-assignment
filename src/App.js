import "./styles.css";
import ProductList from "./productlist/ProductList";
import FilterProducts from "./productlist/FilterProducts";
export default function App() {
  return (
    <div className="App">
      <FilterProducts />
      <ProductList />
    </div>
  );
}
