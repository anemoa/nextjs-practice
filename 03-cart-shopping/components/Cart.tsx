import { CartItem } from '@/types/product';

interface Props {
  cart: CartItem[];
}

export default function Cart({ cart }: Props) {
  // 총 가격 계산
  const totalPrice = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div style={{ border: '2px solid #333', padding: '20px', marginTop: '30px' }}>
      <h2>장바구니 🛒</h2>
      
      {cart.length === 0 ? (
        <p>장바구니가 비어있습니다.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                border: '1px solid #ddd',
                padding: '10px',
                marginBottom: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <h4>{item.name}</h4>
                <p>
                  {item.price.toLocaleString()}원 x {item.quantity}개
                </p>
              </div>
              <p style={{ fontWeight: 'bold' }}>
                {(item.price * item.quantity).toLocaleString()}원
              </p>
            </div>
          ))}
          
          <div style={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold' }}>
            총 가격: {totalPrice.toLocaleString()}원(₩)
          </div>
        </>
      )}
    </div>
  );
}