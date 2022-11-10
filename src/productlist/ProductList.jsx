import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemCart, getAllProducts } from "../redux/action/action";

export default function ProductList() {
  const dispatch = useDispatch();
  const { product, isLoading, cart } = useSelector((state) => state.products);

  useEffect(() => {
    if (product?.length === 0) {
      dispatch(getAllProducts());
    }
  }, [dispatch, product.length]);

  const addToCart = (item) => {
    if (item.stock <= 50) {
      alert("hurry! only a few items left");
      dispatch(addItemCart(item));
    }
    dispatch(addItemCart(item));
  };
  return (
    <div className="products_app">
      {isLoading ? (
        <h2>loading...</h2>
      ) : (
        product.length > 0 &&
        product.map((name) => {
          return (
            <div key={name.id} className="product-list">
              <img src={name.thumbnail} alt="nothing" />
              <h4>{name.title}</h4>
              <p>Rs-{name.price}</p>
              <button onClick={() => addToCart(name)}>Add to Cart</button>
            </div>
          );
        })
      )}
    </div>
  );
}
