// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState } from 'react';
const App: React.FC = () => {
const [activeTab, setActiveTab] = useState('home');
const [searchActive, setSearchActive] = useState(false);
const [cartCount, setCartCount] = useState(3);
const categories = [
{ id: 1, name: 'Electronics', icon: 'https://readdy.ai/api/search-image?query=icon%203D%20cartoon%20smartphone%20and%20laptop%20electronics%20devices%20subject%20fills%2080%20percent%20of%20frame%20vibrant%20colors%20with%20soft%20gradients%20minimalist%20design%20smooth%20rounded%20shapes%20subtle%20shading%20no%20outlines%20centered%20composition%20isolated%20on%20white%20background%20playful%20and%20friendly%20aesthetic%20isometric%20perspective%20high%20detail%20quality%20clean%20and%20modern%20look%20single%20object%20focus&width=64&height=64&seq=cat1&orientation=squarish' },
{ id: 2, name: 'Fashion', icon: 'https://readdy.ai/api/search-image?query=icon%203D%20cartoon%20fashion%20clothing%20dress%20and%20shoes%20subject%20fills%2080%20percent%20of%20frame%20vibrant%20colors%20with%20soft%20gradients%20minimalist%20design%20smooth%20rounded%20shapes%20subtle%20shading%20no%20outlines%20centered%20composition%20isolated%20on%20white%20background%20playful%20and%20friendly%20aesthetic%20isometric%20perspective%20high%20detail%20quality%20clean%20and%20modern%20look%20single%20object%20focus&width=64&height=64&seq=cat2&orientation=squarish' },
{ id: 3, name: 'Home', icon: 'https://readdy.ai/api/search-image?query=icon%203D%20cartoon%20home%20furniture%20sofa%20and%20lamp%20subject%20fills%2080%20percent%20of%20frame%20vibrant%20colors%20with%20soft%20gradients%20minimalist%20design%20smooth%20rounded%20shapes%20subtle%20shading%20no%20outlines%20centered%20composition%20isolated%20on%20white%20background%20playful%20and%20friendly%20aesthetic%20isometric%20perspective%20high%20detail%20quality%20clean%20and%20modern%20look%20single%20object%20focus&width=64&height=64&seq=cat3&orientation=squarish' },
{ id: 4, name: 'Beauty', icon: 'https://readdy.ai/api/search-image?query=icon%203D%20cartoon%20beauty%20cosmetics%20lipstick%20and%20perfume%20subject%20fills%2080%20percent%20of%20frame%20vibrant%20colors%20with%20soft%20gradients%20minimalist%20design%20smooth%20rounded%20shapes%20subtle%20shading%20no%20outlines%20centered%20composition%20isolated%20on%20white%20background%20playful%20and%20friendly%20aesthetic%20isometric%20perspective%20high%20detail%20quality%20clean%20and%20modern%20look%20single%20object%20focus&width=64&height=64&seq=cat4&orientation=squarish' },
{ id: 5, name: 'Sports', icon: 'https://readdy.ai/api/search-image?query=icon%203D%20cartoon%20sports%20equipment%20basketball%20and%20sneakers%20subject%20fills%2080%20percent%20of%20frame%20vibrant%20colors%20with%20soft%20gradients%20minimalist%20design%20smooth%20rounded%20shapes%20subtle%20shading%20no%20outlines%20centered%20composition%20isolated%20on%20white%20background%20playful%20and%20friendly%20aesthetic%20isometric%20perspective%20high%20detail%20quality%20clean%20and%20modern%20look%20single%20object%20focus&width=64&height=64&seq=cat5&orientation=squarish' },
{ id: 6, name: 'Books', icon: 'https://readdy.ai/api/search-image?query=icon%203D%20cartoon%20books%20and%20education%20materials%20stack%20of%20books%20subject%20fills%2080%20percent%20of%20frame%20vibrant%20colors%20with%20soft%20gradients%20minimalist%20design%20smooth%20rounded%20shapes%20subtle%20shading%20no%20outlines%20centered%20composition%20isolated%20on%20white%20background%20playful%20and%20friendly%20aesthetic%20isometric%20perspective%20high%20detail%20quality%20clean%20and%20modern%20look%20single%20object%20focus&width=64&height=64&seq=cat6&orientation=squarish' }
];
const products = [
{
id: 1,
name: 'Wireless Bluetooth Headphones',
price: 89.99,
originalPrice: 129.99,
rating: 4.5,
reviews: 234,
image: 'https://readdy.ai/api/search-image?query=Professional%20product%20photography%20modern%20wireless%20bluetooth%20headphones%20sleek%20black%20design%20premium%20quality%20isolated%20on%20clean%20white%20background%20studio%20lighting%20soft%20shadows%20high%20resolution%20commercial%20photography%20style%20centered%20composition%20product%20fills%2080%20percent%20of%20frame&width=200&height=200&seq=prod1&orientation=squarish',
discount: 31
},
{
id: 2,
name: 'Smart Fitness Watch',
price: 199.99,
originalPrice: 299.99,
rating: 4.7,
reviews: 156,
image: 'https://readdy.ai/api/search-image?query=Professional%20product%20photography%20smart%20fitness%20watch%20with%20black%20sport%20band%20modern%20design%20isolated%20on%20clean%20white%20background%20studio%20lighting%20soft%20shadows%20high%20resolution%20commercial%20photography%20style%20centered%20composition%20product%20fills%2080%20percent%20of%20frame&width=200&height=200&seq=prod2&orientation=squarish',
discount: 33
},
{
id: 3,
name: 'Premium Coffee Maker',
price: 149.99,
originalPrice: 199.99,
rating: 4.3,
reviews: 89,
image: 'https://readdy.ai/api/search-image?query=Professional%20product%20photography%20premium%20coffee%20maker%20machine%20stainless%20steel%20design%20modern%20kitchen%20appliance%20isolated%20on%20clean%20white%20background%20studio%20lighting%20soft%20shadows%20high%20resolution%20commercial%20photography%20style%20centered%20composition%20product%20fills%2080%20percent%20of%20frame&width=200&height=200&seq=prod3&orientation=squarish',
discount: 25
},
{
id: 4,
name: 'Organic Skincare Set',
price: 79.99,
originalPrice: 119.99,
rating: 4.8,
reviews: 312,
image: 'https://readdy.ai/api/search-image?query=Professional%20product%20photography%20organic%20skincare%20set%20natural%20cosmetics%20bottles%20and%20jars%20elegant%20packaging%20isolated%20on%20clean%20white%20background%20studio%20lighting%20soft%20shadows%20high%20resolution%20commercial%20photography%20style%20centered%20composition%20product%20fills%2080%20percent%20of%20frame&width=200&height=200&seq=prod4&orientation=squarish',
discount: 33
},
{
id: 5,
name: 'Laptop Stand Adjustable',
price: 39.99,
originalPrice: 59.99,
rating: 4.4,
reviews: 178,
image: 'https://readdy.ai/api/search-image?query=Professional%20product%20photography%20adjustable%20laptop%20stand%20aluminum%20design%20modern%20office%20accessory%20isolated%20on%20clean%20white%20background%20studio%20lighting%20soft%20shadows%20high%20resolution%20commercial%20photography%20style%20centered%20composition%20product%20fills%2080%20percent%20of%20frame&width=200&height=200&seq=prod5&orientation=squarish',
discount: 33
},
{
id: 6,
name: 'Wireless Phone Charger',
price: 29.99,
originalPrice: 49.99,
rating: 4.2,
reviews: 267,
image: 'https://readdy.ai/api/search-image?query=Professional%20product%20photography%20wireless%20phone%20charger%20pad%20sleek%20black%20design%20modern%20technology%20isolated%20on%20clean%20white%20background%20studio%20lighting%20soft%20shadows%20high%20resolution%20commercial%20photography%20style%20centered%20composition%20product%20fills%2080%20percent%20of%20frame&width=200&height=200&seq=prod6&orientation=squarish',
discount: 40
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
<div className="grid grid-cols-4 gap-2 p-4 items-center">
<div className="col-span-2 flex items-center">
<img
src="https://readdy.ai/api/search-image?query=Modern%20ecommerce%20marketplace%20logo%20design%20Affinixia%20brand%20orange%20gradient%20circular%20logo%20with%20stylized%20shop%20storefront%20icon%20clean%20professional%20design%20isolated%20on%20white%20background%20high%20resolution%20vector%20style&width=120&height=40&seq=logo1&orientation=landscape"
alt="Affinixia"
className="h-8 w-auto object-contain"
/>
</div>
<div className="flex justify-center">
<button
className="p-2 hover:bg-gray-100 rounded-full cursor-pointer"
onClick={() => setSearchActive(!searchActive)}
>
<i className="fas fa-search text-gray-600 text-lg"></i>
</button>
</div>
<div className="flex justify-end items-center space-x-3">
<button className="relative p-2 hover:bg-gray-100 rounded-full cursor-pointer">
<i className="fas fa-shopping-cart text-gray-600 text-lg"></i>
{cartCount > 0 && (
<span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
{cartCount}
</span>
)}
</button>
</div>
</div>
{/* Search Bar */}
{searchActive && (
<div className="px-4 pb-4">
<div className="relative">
<input
type="text"
placeholder="Search products..."
className="w-full pl-4 pr-12 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
/>
<button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500 cursor-pointer">
<i className="fas fa-search text-sm"></i>
</button>
</div>
</div>
)}
{/* Category Tabs */}
<div className="overflow-x-auto px-4 pb-2">
<div className="flex space-x-4 min-w-max">
{['All', 'Electronics', 'Fashion', 'Home', 'Beauty', 'Sports'].map((category) => (
<button
key={category}
className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer ${
category === 'All'
? 'bg-orange-500 text-white'
: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
}`}
>
{category}
</button>
))}
</div>
</div>
</div>
{/* Main Content */}
<div className="pt-40 pb-20 px-4">
{/* Promotional Banner */}
<div className="mb-6">
<div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-6 text-white relative overflow-hidden">
<div className="relative z-10">
<h2 className="text-xl font-bold mb-2">Flash Sale Today!</h2>
<p className="text-sm opacity-90 mb-4">Up to 50% off on selected items</p>
<a href="https://readdy.ai/home/d2aa1979-4815-4f9f-9575-77b7d060b898/9022d248-8641-4fd2-b679-f8d7c8e44b04" data-readdy="true">
  <button className="bg-white text-orange-500 px-4 py-2 rounded-lg text-sm font-medium !rounded-button cursor-pointer">
    Shop Now
  </button>
</a>
</div>
</div>
</div>
{/* Categories Grid */}
<div className="mb-6">
<h3 className="text-lg font-semibold mb-4 text-gray-800">Shop by Category</h3>
<div className="grid grid-cols-4 gap-4">
{categories.map((category) => (
<div key={category.id} className="text-center cursor-pointer">
<div className="bg-gray-50 rounded-lg p-4 mb-2 hover:bg-gray-100 transition-colors overflow-hidden">
<img
src={category.icon}
alt={category.name}
className="w-full h-12 object-contain"
/>
</div>
<p className="text-xs text-gray-700 font-medium" style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
{category.name}
</p>
</div>
))}
</div>
</div>
{/* Filter and Sort */}
<div className="grid grid-cols-4 gap-2 mb-6">
<button className="col-span-2 bg-gray-100 text-gray-700 py-3 rounded-lg text-sm font-medium flex items-center justify-center space-x-2 hover:bg-gray-200 !rounded-button cursor-pointer">
<i className="fas fa-filter text-sm"></i>
<span>Filter</span>
</button>
<button className="col-span-2 bg-gray-100 text-gray-700 py-3 rounded-lg text-sm font-medium flex items-center justify-center space-x-2 hover:bg-gray-200 !rounded-button cursor-pointer">
<i className="fas fa-sort text-sm"></i>
<span>Sort</span>
</button>
</div>
{/* Products Grid */}
<div className="grid grid-cols-2 gap-4">
{products.map((product) => (
<div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
<div className="relative">
<img
src={product.image}
alt={product.name}
className="w-full h-40 object-cover object-top"
/>
{product.discount && (
<div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
-{product.discount}%
</div>
)}
</div>
<div className="p-3">
<h4 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2 leading-tight">
{product.name}
</h4>
<div className="flex items-center mb-2">
<div className="flex items-center">
{[...Array(5)].map((_, i) => (
<i
key={i}
className={`fas fa-star text-xs ${
i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
}`}
></i>
))}
</div>
<span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
</div>
<div className="grid grid-cols-2 gap-2 items-center mb-3">
<div>
<span className="text-sm font-bold text-gray-800">${product.price}</span>
{product.originalPrice && (
<span className="text-xs text-gray-500 line-through ml-1">
${product.originalPrice}
</span>
)}
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
{/* Bottom Navigation */}
<div className="fixed bottom-0 w-full bg-white border-t border-gray-200 grid grid-cols-5 py-2">
{[
{ id: 'home', icon: 'fas fa-home', label: 'Home', active: true },
{ id: 'categories', icon: 'fas fa-th-large', label: 'Categories', active: false },
{ id: 'search', icon: 'fas fa-search', label: 'Search', active: false },
{ id: 'orders', icon: 'fas fa-box', label: 'Orders', active: false },
{ id: 'account', icon: 'fas fa-user', label: 'Account', active: false }
].map((item) => (
<button
key={item.id}
onClick={() => setActiveTab(item.id)}
className={`flex flex-col items-center justify-center py-2 cursor-pointer ${
activeTab === item.id ? 'text-orange-500' : 'text-gray-500'
}`}
>
<i className={`${item.icon} text-lg mb-1`}></i>
<span className="text-xs font-medium">{item.label}</span>
</button>
))}
</div>
</div>
);
};
export default App