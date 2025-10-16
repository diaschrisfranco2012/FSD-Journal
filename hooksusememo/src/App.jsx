import { useState, useMemo } from "react";

function ShoppingCart() {
  const [items, setItems] = useState([
    { name: "Laptop", price: 150800 },
    { name: "Phone", price: 125000 },
    { name: "Headphones", price: 12000 },
  ]);

  const [discount, setDiscount] = useState(0);
  const totalPrice = useMemo(() => {
    console.log("Calculating total...");
    return items.reduce((acc, item) => acc + item.price, 0) - discount;
  }, [items, discount]);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
      <p>Total: ₹{totalPrice}</p>
      <button onClick={() => setDiscount(discount + 2500)}>
        Apply ₹2500 Discount
      </button>
    </div>
  );
}
export default ShoppingCart;
