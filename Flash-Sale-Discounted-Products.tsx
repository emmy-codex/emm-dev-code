// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
const [timeLeft, setTimeLeft] = useState({
hours: 23,
minutes: 45,
seconds: 30
});
const [cartCount, setCartCount] = useState(3);
useEffect(() => {
const timer = setInterval(() => {
setTimeLeft(prev => {
if (prev.seconds > 0) {
return { ...prev, seconds: prev.seconds - 1 };
} else if (prev.minutes > 0) {
return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
} else if (prev.hours > 0) {
return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
}
return prev;
});
}, 1000);
return () => clearInterval(timer);
}, []);
const flashSaleProducts = [
{
id: 1,
name: 'Wireless Bluetooth Headphones Pro',
price: 69.99,
originalPrice: 139.99,
discount: 50,
image: 'https://readdy.ai/api/search-image?query=Professional%20product%20photography%20premium%20wireless%20bluetooth%20headphones%20black%20and%20silver%20design%20noise%20cancelling%20over%20ear%20style%20isolated%20on%20clean%20white%20background%20studio%20lighting%20soft%20shadows%20high%20resolution%20commercial%20photography%20style%20centered%20composition%20product%20fills%2080%20percent%20of%20frame&width=200&height=200&seq=flash1&orientation=squarish'
},
{
id: 2,
name: 'Smart Fitness Tracker Watch',
price: 89.99,
originalPrice: 179.99,
discount: 50,
image: 'https://readdy.ai/api/search-image?query=Professional%20product%20photography%20smart%20fitness%20tracker%20watch%20black%20sport%20band%20OLED%20display%20health%20monitoring%20device%20isolated%20on%20clean%20white%20background%20studio%20lighting%20soft%20shadows%20high%20resolution%20commercial%20photography%20style%20centered%20composition%20product%20fills%2080%20percent%20of%20frame&width=200&height=200&seq=flash2&orientation=squarish'
},
{
id: 3,
name: 'Premium Coffee Machine Deluxe',
price: 124.99,
originalPrice: 249.99,
discount: 50,
image: 'https://readdy.ai/api/search-image?query=Professional%20product%20photography%20premium%20espresso%20coffee%20machine%20stainless%20steel%20design%20modern%20kitchen%20appliance%20with%20steam%20wand%20isolated%20on%20clean%20white%20background%20studio%20lighting%20soft%20shadows%20high%20resolution%20commercial%20photography%20style%20centered%20composition%20product%20fills%2080%20percent%20of%20frame&width=200&height=200&seq=flash3&orientation=squarish'
},
{
id: 4,
name: 'Luxury Skincare Gift Set',
price: 59.99,
originalPrice: 119.99,
discount: 50,
image: 'https://readdy.ai/api/search-image?query=Professional%20product%20photography%20luxury%20skincare%20gift%20set%20elegant%20gold%20packaging%20premium%20cosmetics%20bottles%20and%20jars%20beauty%20collection%20isolated%20on%20clean%20white%20background%20studio%20lighting%20soft%20shadows%20high%20resolution%20commercial%20photography%20style%20centered%20composition%20product%20fills%2080%20percent%20of%20frame&width=200&height=200&seq=flash4&orientation=squarish'
},
{
id: 5,
name: 'Ergonomic Laptop Stand Pro',
price: 34.99,
originalPrice: 69.99,
discount: 50,
image: 'https://readdy.ai/api/search-image?query=Professional%20product%20photography%20ergonomic%20laptop%20stand%20aluminum%20adjustable%20height%20modern%20office%20desk%20accessory%20portable%20design%20isolated%20on%20clean%20white%20background%20studio%20lighting%20soft%20shadows%20high%20resolution%20commercial%20photography%20style%20centered%20composition%20product%20fills%2080%20percent%20of%20frame&width=200&height=200&seq=flash5&orientation=squarish'
},
{
id: 6,
name: 'Fast Wireless Charging Pad',
price: 19.99,
originalPrice: 39.99,
discount: 50,
image: 'https://readdy.ai/api/search-image?query=Professional%20product%20photography%20fast%20wireless%20charging%20pad%20sleek%20black%20design%20LED%20indicator%20modern%20technology%20accessory%20isolated%20on%20clean%20white%20background%20studio%20lighting%20soft%20shadows%20high%20resolution%20commercial%20photography%20style%20centered%20composition%20product%20fills%2080%20percent%20of%20frame&width=200&height=200&seq=flash6&orientation=squarish'
},
{
id: 7,
name: 'Bluetooth Speaker Waterproof',
price: 44.99,
originalPrice: 89.99,
discount: 50,
image: 'https://readdy.ai/api/search-image?query=Professional%20product%20photography%20waterproof%20bluetooth%20speaker%20rugged%20design%20portable%20outdoor%20audio%20device%20black%20and%20orange%20colors%20isolated%20on%20clean%20white%20background%20studio%20lighting%20soft%20shadows%20high%20resolution%20commercial%20photography%20style%20centered%20composition%20product%20fills%2080%20percent%20of%20frame&width=200&height=200&seq=flash7&orientation=squarish'
},
{
id: 8,
name: 'Smart Home Security Camera',
price: 79.99,
originalPrice: 159.99,
discount: 50,
image: 'https://readdy.ai/api/search-image?query=Professional%20product%20photography%20smart%20home%20security%20camera%20white%20modern%20design%20WiFi%20surveillance%20device%20compact%20size%20isolated%20on%20clean%20white%20background%20studio%20lighting%20soft%20shadows%20high%20resolution%20commercial%20photography%20style%20centered%20composition%20product%20fills%2080%20percent%20of%20frame&width=200&height=200&seq=flash8&orientation=squarish'
},
{
id: 9,
name: 'Gaming Mechanical Keyboard',
price: 74.99,
originalPrice: 149.99,
discount: 50,
image: 'https://readdy.ai/api/search-image?query=Professional%20product%20photography%20gaming%20mechanical%20keyboard%20RGB%20backlit%20keys%20black%20aluminum%20frame%20professional%20esports%20equipment%20isolated%20on%20clean%20white%20background%20studio%20lighting%20soft%20shadows%20high%20resolution%20commercial%20photography%20style%20centered%20composition%20product%20fills%2080%20percent%20of%20frame&width=200&height=200&seq=flash9&orientation=squarish'
},
{
id: 10,
name: 'Portable Power Bank 20000mAh',
price: 29.99,
originalPrice: 59.99,
discount: 50,
image: 'https://readdy.ai/api/search-image?query=Professional%20product%20photography%20portable%20power%20bank%20sleek%20black%20design%20high%20capacity%20battery%20pack%20USB%20charging%20device%20isolated%20on%20clean%20white%20background%20studio%20lighting%20soft%20shadows%20high%20resolution%20commercial%20photography%20style%20centered%20composition%20product%20fills%2080%20percent%20of%20frame&width=200&height=200&seq=flash10&orientation=squarish'
},
{
id: 11,
name: 'Air Purifier with HEPA Filter',
price: 149.99,
originalPrice: 299.99,
discount: 50,
image: 'https://readdy.ai/api/search-image?query=Professional%20product%20photography%20air%20purifier%20white%20modern%20design%20HEPA%20filter%20home%20appliance%20clean%20air%20technology%20isolated%20on%20clean%20white%20background%20studio%20lighting%20soft%20shadows%20high%20resolution%20commercial%20photography%20style%20centered%20composition%20product%20fills%2080%20percent%20of%20frame&width=200&height=200&seq=flash11&orientation=squarish'
},
{
id: 12,
name: 'Wireless Gaming Mouse RGB',
price: 39.99,
originalPrice: 79.99,
discount: 50,
image: 'https://readdy.ai/api/search-image?query=Professional%20product%20photography%20wireless%20gaming%20mouse%20RGB%20lighting%20ergonomic%20design%20black%20professional%20gaming%20equipment%20isolated%20on%20clean%20white%20background%20studio%20lighting%20soft%20shadows%20high%20resolution%20commercial%20photography%20style%20centered%20composition%20product%20fills%2080%20percent%20of%20frame&width=200&height=200&seq=flash12&orientation=squarish'
}
];
const handleAddToCart = (productId: number) => {
setCartCount(cartCount + 1);
};
return (
<div className="min-h-screen bg-white">
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
`}</style>
{/* Header */}
<div className="fixed top-0 w-full bg-white shadow-sm z-50">
<div className="flex items-center justify-between p-4">
<a href="https://readdy.ai/home/d2aa1979-4815-4f9f-9575-77b7d060b898/bfed0f5f-da7d-4638-868b-76da3fba0dfc" data-readdy="true">
<button className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
<i className="fas fa-arrow-left text-gray-700 text-lg"></i>
</button>
</a>
<h1 className="text-lg font-semibold text-gray-800">Flash Sale</h1>
<a href="https://readdy.ai/home/d2aa1979-4815-4f9f-9575-77b7d060b898/ee527237-fa36-48c5-8678-383d2c409705" data-readdy="true">
<button className="relative p-2 hover:bg-gray-100 rounded-full cursor-pointer">
<i className="fas fa-shopping-cart text-gray-600 text-lg"></i>
{cartCount > 0 && (
<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
{cartCount}
</span>
)}
</button>
</a>
</div>
</div>
{/* Main Content */}
<div className="pt-20 pb-6">
{/* Countdown Timer Section */}
<div className="mx-4 mb-6">
<div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-6 text-white text-center">
<h2 className="text-lg font-semibold mb-2">Sale Ends In</h2>
<div className="flex justify-center items-center space-x-4">
<div className="bg-white bg-opacity-20 rounded-lg p-3 min-w-0">
<div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
<div className="text-xs opacity-90">Hours</div>
</div>
<div className="text-2xl font-bold">:</div>
<div className="bg-white bg-opacity-20 rounded-lg p-3 min-w-0">
<div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
<div className="text-xs opacity-90">Minutes</div>
</div>
<div className="text-2xl font-bold">:</div>
<div className="bg-white bg-opacity-20 rounded-lg p-3 min-w-0">
<div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
<div className="text-xs opacity-90">Seconds</div>
</div>
</div>
</div>
</div>
{/* Products Grid */}
<div className="px-4">
<div className="grid grid-cols-2 gap-4">
{flashSaleProducts.map((product) => (
<div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div className="relative">
<img
src={product.image}
alt={product.name}
className="w-full h-40 object-cover object-top"
/>
<div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
Limited Time
</div>
<div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
-{product.discount}%
</div>
</div>
<div className="p-3">
<h4 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 leading-tight">
{product.name}
</h4>
<div className="mb-3">
<div className="flex items-center space-x-2">
<span className="text-lg font-bold text-gray-800">${product.price}</span>
<span className="text-sm text-gray-500 line-through">
${product.originalPrice}
</span>
</div>
</div>
<button
onClick={() => handleAddToCart(product.id)}
className="w-full bg-orange-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors !rounded-button cursor-pointer"
>
Add to Cart
</button>
</div>
</div>
))}
</div>
</div>
</div>
</div>
);
};
export default App