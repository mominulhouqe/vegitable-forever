// import React, { useState, useEffect, useRef } from 'react';
// import { FaBars, FaTimes, FaAngleDown } from 'react-icons/fa';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(null); // Store the open dropdown state
//   const submenuRef = useRef(null);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeNavbar = () => {
//     setIsOpen(false);
//     setDropdownOpen(null);
//   };

//   const toggleDropdown = (index) => {
//     if (dropdownOpen === index) {
//       setDropdownOpen(null); // Close the currently open dropdown
//     } else {
//       setDropdownOpen(index); // Open the clicked dropdown
//     }
//   };

//   useEffect(() => {
//     function handleBodyClick(e) {
//       if (submenuRef.current && !submenuRef.current.contains(e.target)) {
//         setDropdownOpen(null); // Close the dropdown when clicking outside of it
//       }
//     }

//     document.addEventListener('click', handleBodyClick);

//     return () => {
//       document.removeEventListener('click', handleBodyClick);
//     };
//   }, []);

//   return (
//     <nav className="bg-gray-800">
//       <div className="container mx-auto py-4">
//         <div className="flex items-center justify-between">
//           <div className="text-white text-2xl font-semibold">Your E-commerce</div>
//           <div className="hidden md:flex space-x-4">
//             {/* Add your navigation items here */}
//             {['Item 1', 'Item 2', 'Item 3'].map((item, index) => (
//               <div className="relative group" key={index} onMouseEnter={() => toggleDropdown(index)}>
//                 <a
//                   href="#"
//                   className="text-white hover:text-gray-300"
//                 >
//                   {item}{' '}
//                   <FaAngleDown
//                     className={`absolute -mr-3 right-0 top-1/2 transform -translate-y-1/2 transition duration-300 ${
//                       dropdownOpen === index ? 'opacity-100' : 'opacity-0'
//                     }`}
//                   />
//                 </a>
//                 {/* Dropdown menu for Item */}
//                 {dropdownOpen === index && (
//                   <div
//                     className="absolute left-0 mt-2 w-36 bg-white border border-gray-300 shadow-lg rounded-lg"
//                     ref={submenuRef}
//                   >
//                     <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={closeNavbar}>
//                       Subitem 1
//                     </a>
//                     <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={closeNavbar}>
//                       Subitem 2
//                     </a>
//                   </div>
//                 )}
//               </div>
//             ))}
//             {/* Add more items as needed */}
//           </div>
//           <div className="md:hidden mx-2">
//             <button onClick={toggleNavbar} className="text-white">
//               {isOpen ? <FaTimes /> : <FaBars />}
//             </button>
//           </div>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out translate-x-0 bg-gray-900 text-white w-64 z-10">
//           <div className="flex justify-between p-4">
//             <span className="text-2xl">Menu</span>
//             <button onClick={closeNavbar} className="text-white">
//               <FaTimes />
//             </button>
//           </div>
//           {/* Render the mobile menu items here */}
//           <a href="#" className="block py-2 px-4 hover:bg-gray-700 transition duration-300" onClick={closeNavbar}>
//             Item 1
//           </a>
//           <a href="#" className="block py-2 px-4 hover:bg-gray-700 transition duration-300" onClick={closeNavbar}>
//             Item 2
//           </a>
//           <a href="#" className="block py-2 px-4 hover:bg-gray-700 transition duration-300" onClick={closeNavbar}>
//             Item 3
//           </a>
//           {/* Add more mobile menu items as needed */}
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;
