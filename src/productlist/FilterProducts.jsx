import { useDispatch } from "react-redux";
import { filterBy, sortBy } from "../redux/action/action";

export default function FilterProducts() {
  const dispatch = useDispatch();
  return (
    <div className="filter_Products">
      <select
        onChange={(e) => {
          dispatch(sortBy(e.target.value));
        }}
      >
        <option>Sort By</option>
        <option value="rating">Sort By Rating</option>
        <option value="price">Sort By Price</option>
        <option value="discountPercentage">Sort By Discount</option>
      </select>
      <select
        onChange={(e) => {
          dispatch(filterBy(e.target.value));
        }}
      >
        <option>Filter By Brand</option>
        <option value="Samsung">Samsung</option>
        <option value="Apple">Apple</option>
        <option value="OPPO">OPPO</option>
      </select>
      <select
        onChange={(e) => {
          dispatch(filterBy(e.target.value));
        }}
      >
        <option>Filter By Category</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        <option value="fragrances">Fragnance</option>
        <option value="skincare">Skincare</option>
      </select>
    </div>
  );
}
