import ProductList from "@/components/ProductList";
import { products } from "@/data/products";
import { CartItem } from "@/types/product";
import { useState } from "react";

const Home = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // 장바구니에 추가하는 함수
  const addToCart = (productId: number) => {
    // 1. 상품 찾기
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    // 2. 이미 장바구니에 있는지 확인
    const existingItem = cart.find((item) => item.id === productId);

    if (existingItem) {
      // 이미 있으면 수량만 증가
      setCart(
        cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // 없으면 새로 추가
      setCart([...cart, { ...product, quantity: 1 }]);
    }
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
