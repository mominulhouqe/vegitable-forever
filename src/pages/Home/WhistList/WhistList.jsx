import React, { useState } from 'react';

const WhisList = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  // Function to add an item to the wishlist
  const addItemToWishlist = () => {
    if (newItem.trim() !== '') {
      setWishlistItems([...wishlistItems, newItem]);
      setNewItem('');
    }
  };

  // Function to remove an item from the wishlist
  const removeItemFromWishlist = (index) => {
    const updatedWishlist = wishlistItems.filter((item, i) => i !== index);
    setWishlistItems(updatedWishlist);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Wishlist</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Add an item to your wishlist"
          className="border rounded py-2 px-3"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white py-2 px-4 ml-2 rounded"
          onClick={addItemToWishlist}
        >
          Add
        </button>
      </div>
      <ul>
        {wishlistItems.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
            <button
              className="bg-red-500 text-white py-1 px-2 ml-2 rounded"
              onClick={() => removeItemFromWishlist(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhisList;
