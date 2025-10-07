import { products } from '@/data/products';


interface Props {
  onAddToCart: (productId: number) => void;
}

const ProductList = ({ onAddToCart }: Props) => {
  return (
     <div>
      <h2>상품 목록</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
            <h3>{product.name}</h3>
            <p>{product.price.toLocaleString()}원</p>
            <button>장바구니 추가</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;