import { useState, useEffect } from 'react';
import { ShoppingCart, Trash2, Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';
import './App.css';

const products = [
  { id: 1, name: "Tube Dress cute", price: 200, image: "https://i.pinimg.com/564x/38/23/0a/38230a57bb64c594c1623940d3fb25cd.jpg" },
  { id: 2, name: "Mini Dress", price: 190, image: "https://i.pinimg.com/564x/58/2a/da/582ada6d2e05ba4161b62f30ea8b070f.jpg" },
  { id: 3, name: "Slip Dress", price: 150, image: "https://i.pinimg.com/736x/04/68/7a/04687a09dfeb0ae1415aec087308cf0f.jpg" },
  { id: 4, name: "Tube Dress Bow", price: 250, image: "https://i.pinimg.com/564x/13/7d/70/137d705f6124c6a75d0643b7026015f9.jpg" },
  { id: 5, name: "Empire waist Dress", price: 190, image: "https://i.pinimg.com/564x/53/68/3e/53683e0d6a721b00016898947f20ce84.jpg" },
  { id: 6, name: "Baby Dall Dress", price: 300, image: "https://i.pinimg.com/736x/6d/94/4e/6d944e2368e8a53abc09894d8fe29c70.jpg" },
  { id: 7, name: "Mini Dress", price: 180, image: "https://i.pinimg.com/736x/c4/d5/f0/c4d5f04234252992162d8a4f3800210a.jpg" },
  { id: 8, name: "Empire waist Dress", price: 350, image: "https://i.pinimg.com/564x/af/22/e5/af22e544651372125efaf5c05a735c26.jpg" },
  { id: 9, name: "Bell-Sleeve Dress", price: 120, image: "https://i.pinimg.com/736x/46/cc/10/46cc10bd164c3845e898c9996be05af9.jpg" },
  { id: 10, name: "Little Black Dress", price: 190, image: "https://i.pinimg.com/564x/b9/af/ca/b9afcac0783be080d227944451b4409b.jpg" },
  { id: 11, name: "Asymmetrical Dress", price: 180, image: "https://i.pinimg.com/564x/54/69/29/5469293855455da07592f7e6ed85a199.jpg" },
  { id: 12, name: "Bardot Dress", price: 200, image: "https://i.pinimg.com/564x/9d/93/cd/9d93cd03c2c9840e6c7e4250aa0f6a4f.jpg" },
];

// Navbar Component
const Navbar = () => (
  <nav className="bg-pink-200 p-4 shadow-lg mb-8">
    <div className="container mx-auto flex justify-center items-center">
      <h1 className="text-xl font-bold text-black">On On Dress Shop</h1>
      <ul className="absolute right-4 flex space-x-4">
      </ul>
    </div>
  </nav>
);



// Slideshow Component
const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://mixmatchboy.com/wp-content/uploads/2023/01/6-5.jpg",
    "https://img.wongnai.com/p/1920x0/2022/06/17/7808be65f85e46e2826665848074a0c1.jpg",
    "https://images.shopspotter.in.th/wp-content/uploads/2018/04/03122328/c05.jpg"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-96 mb-8">
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

// PromoBanner Component
const PromoBanner = () => (
  <div className="bg-yellow-300 text-black text-center py-2 mb-4">
    โปรโมชั่นพิเศษ! ส่วนลด 10% เมื่อซื้อสินค้าเกิน 300 บาท
  </div>
);

// ProductCard Component
const ProductCard = ({ product, addToCart }) => (
  <div className="border rounded-lg overflow-hidden shadow-lg">
    <img src={product.image} alt={product.name} className="w-full h-[500px] object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2">{product.name}</h3>
      <p className="text-gray-700 mb-2">ราคา: {product.price} บาท</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        เพิ่มลงตะกร้า
      </button>
    </div>
  </div>
);

// ProductList Component
const ProductList = ({ addToCart }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} addToCart={addToCart} />
    ))}
  </div>
);

// CartItem Component
const CartItem = ({ item, updateQuantity, removeFromCart }) => (
  <div className="flex justify-between items-center border-b py-2">
    <div className="flex items-center">
      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
      <div>
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-gray-600">ราคา: {item.price} บาท</p>
      </div>
    </div>
    <div className="flex items-center">
      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1">
        <Minus size={16} />
      </button>
      <span className="mx-2">{item.quantity}</span>
      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1">
        <Plus size={16} />
      </button>
      <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500 p-1">
        <Trash2 size={16} />
      </button>
    </div>
  </div>
);

// Cart Component
const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal >= 300 ? subtotal * 0.1 : 0;
  const shippingCost = 100;
  const total = subtotal - discount + shippingCost;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">ตะกร้าสินค้า</h2>
      {cart.length === 0 ? (
        <p>ยังไม่มีสินค้าในตะกร้า</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
          <div className="mt-4">
          <p className="text-gray-800">ยอดรวมสินค้า: <span className="font-semibold">{subtotal} บาท</span></p>
          {discount > 0 && (
            <p className="text-red-500">ส่วนลด 10% เมื่อซื้อเกิน 300 บาท: <span className="font-semibold">-{discount.toFixed(2)} บาท</span></p>
          )}
          <p className="text-gray-800">ค่าจัดส่ง: <span className="font-semibold">{shippingCost} บาท</span></p>
          <p className="font-bold text-lg text-black">ยอดรวมทั้งหมด: <span className="text-blue-600">{total.toFixed(2)} บาท</span></p>
          </div>
        </>
      )}
    </div>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-gray-800 text-white py-4 mt-8">
    <div className="container mx-auto text-center">
      <p>© 2024 On On Dress Shop. All rights reserved.</p>
      <p>ติดต่อเรา: 099-999-9999 | onondress@example.com</p>
    </div>
  </footer>
);

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <PromoBanner />
      <Slideshow />
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
      <Footer />
    </div>
  );
};

export default App;
