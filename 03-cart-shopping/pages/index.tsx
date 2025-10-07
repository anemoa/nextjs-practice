import ProductList from "@/components/ProductList";
import { CartItem } from "@/types/product";
import { useState } from "react";

const Home = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // 장바구니에 추가하는 함수
  const addToCart = (productId: number) => {
    console.log("상품 추가:", productId);
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1>쇼핑 카트 🛒</h1>
      <p>장바구니: {cart.length}개</p>
      <ProductList onAddToCart={addToCart} />
    </div>
  );
};

export default Home;
