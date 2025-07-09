// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Wireless Bluetooth Headphones Pro',
      price: 32000,
      quantity: 1,
      image: 'https://readdy.ai/api/search-image?query=Professional%20product%20photography%20premium%20wireless%20bluetooth%20headphones%20black%20and%20silver%20design%20noise%20cancelling%20over%20ear%20style%20isolated%20on%20clean%20white%20background%20studio%20lighting%20soft%20shadows%20high%20resolution%20commercial%20photography%20style%20centered%20composition%20product%20fills%2080%20percent%20of%20frame&width=120&height=120&seq=cart1&orientation=squarish'
    },
    {
      id: 2,
      name: 'Smart Fitness Tracker Watch',
      price: 41500,
      quantity: 1,
      image: 'https://readdy.ai/api/search-image?query=Professional%20product%20photography%20smart%20fitness%20tracker%20watch%20black%20sport%20band%20OLED%20display%20health%20monitoring%20device%20isolated%20on%20clean%20white%20background%20studio%20lighting%20soft%20shadows%20high%20resolution%20commercial%20photography%20style%20centered%20composition%20product%20fills%2080%20percent%20of%20frame&width=120&height=120&seq=cart2&orientation=squarish'
    },
    {
      id: 3,
      name: 'Premium Coffee Machine Deluxe',
      price: 57800,
      quantity: 1,
      image: 'https://readdy.ai/api/search-image?query=Professional%20product%20photography%20premium%20espresso%20coffee%20machine%20stainless%20steel%20design%20modern%20kitchen%20appliance%20with%20steam%20wand%20isolated%20on%20clean%20white%20background%20studio%20lighting%20soft%20shadows%20high%20resolution%20commercial%20photography%20style%20centered%20composition%20product%20fills%2080%20percent%20of%20frame&width=120&height=120&seq=cart3&orientation=squarish'
    }
  ]);

  const [userCurrency, setUserCurrency] = useState('₦');
  const [exchangeRate, setExchangeRate] = useState(1);

  useEffect(() => {
    const detectUserRegion = () => {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (timezone.includes('Lagos') || timezone.includes('Africa')) {
        setUserCurrency('₦');
        setExchangeRate(1);
      } else {
        setUserCurrency('$');
        setExchangeRate(0.0013);
      }
    };
    detectUserRegion();
  }, []);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const formatPrice = (price: number) => {
    const convertedPrice = userCurrency === '₦' ? price : price * exchangeRate;
    return `${userCurrency}${convertedPrice.toLocaleString('en-NG', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 2500;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50">
      <style>{`
        .!rounded-button {
          border-radius: 12px;
        }
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          -moz-appearance: textfield;
        }
        @media (min-width: 768px) {
          .desktop-layout {
            display: grid;
            grid-template-columns: 1fr 400px;
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
          }
        }
      `}</style>

      {/* Header */}
      <div className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
          <a href="https://readdy.ai/home/d2aa1979-4815-4f9f-9575-77b7d060b898/9022d248-8641-4fd2-b679-f8d7c8e44b04" data-readdy="true">
            <button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors">
              <i className="fas fa-arrow-left text-gray-700 text-lg"></i>
            </button>
          </a>
          <h1 className="text-lg font-semibold text-gray-800">Shopping Cart ({cartItems.length})</h1>
          <div className="w-10"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 pb-32 md:pb-8">
        <div className="desktop-layout px-4 md:px-6">
          {/* Cart Items Section */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 md:w-28 md:h-28 object-cover object-top rounded-lg"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm md:text-base font-medium text-gray-800 mb-2 line-clamp-2">
                      {item.name}
                    </h3>
                    <div className="text-lg font-bold text-gray-900 mb-3">
                      {formatPrice(item.price)}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 bg-gray-100 rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white transition-colors cursor-pointer"
                          disabled={item.quantity <= 1}
                        >
                          <i className="fas fa-minus text-gray-600 text-sm"></i>
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                          className="w-12 text-center bg-transparent border-none text-sm font-medium text-gray-800 focus:outline-none"
                          min="1"
                        />
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white transition-colors cursor-pointer"
                        >
                          <i className="fas fa-plus text-gray-600 text-sm"></i>
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm font-medium cursor-pointer transition-colors"
                      >
                        <i className="fas fa-trash mr-1"></i>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {cartItems.length === 0 && (
              <div className="text-center py-12">
                <i className="fas fa-shopping-cart text-gray-300 text-6xl mb-4"></i>
                <h3 className="text-lg font-medium text-gray-500 mb-2">Your cart is empty</h3>
                <p className="text-gray-400 mb-6">Add some items to get started</p>
                <a href="https://readdy.ai/home/d2aa1979-4815-4f9f-9575-77b7d060b898/9022d248-8641-4fd2-b679-f8d7c8e44b04" data-readdy="true">
                  <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors !rounded-button cursor-pointer">
                    Continue Shopping
                  </button>
                </a>
              </div>
            )}
          </div>

          {/* Cart Summary Section */}
          {cartItems.length > 0 && (
            <div className="md:sticky md:top-24">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>{formatPrice(shipping)}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold text-gray-900">
                      <span>Total</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-orange-500 text-white py-4 rounded-lg text-base font-semibold hover:bg-orange-600 transition-colors !rounded-button cursor-pointer mb-4">
                  Proceed to Checkout
                </button>

                <div className="flex items-center justify-center space-x-4 text-gray-400 text-sm">
                  <i className="fas fa-lock"></i>
                  <span>Secure Payment</span>
                  <i className="fab fa-cc-visa text-lg"></i>
                  <i className="fab fa-cc-mastercard text-lg"></i>
                  <i className="fab fa-cc-paypal text-lg"></i>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Fixed Bottom Summary */}
      {cartItems.length > 0 && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <span className="text-lg font-bold text-gray-900">Total: {formatPrice(total)}</span>
            <span className="text-sm text-gray-600">{cartItems.reduce((sum, item) => sum + item.quantity, 0)} items</span>
          </div>
          <button className="w-full bg-orange-500 text-white py-3 rounded-lg text-base font-semibold hover:bg-orange-600 transition-colors !rounded-button cursor-pointer">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
