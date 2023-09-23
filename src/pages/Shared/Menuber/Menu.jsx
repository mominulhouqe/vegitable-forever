import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon, Collapse } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, Search, ShoppingCart, Person, ExpandMore, ExpandLess } from '@mui/icons-material';

const Menu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!isServicesOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMenu}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <div className="text-white flex items-center gap-5">
            <IconButton color="inherit">
              <Search />
            </IconButton>
            <IconButton color="inherit">
              <ShoppingCart />
            </IconButton>
            <IconButton color="inherit">
              <Person />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu} style={{ width: '600px' }}>
        <List>
          <ListItem button onClick={closeMenu}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={toggleServices}>
            <ListItemText primary="Services" />
            {isServicesOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isServicesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button onClick={closeMenu}>
                <ListItemText primary="Service 1" />
              </ListItem>
              <ListItem button onClick={closeMenu}>
                <ListItemText primary="Service 2" />
              </ListItem>
              {/* Add more services as needed */}
            </List>
          </Collapse>
          <ListItem button onClick={closeMenu}>
            <ListItemText primary="Menu" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Menu;


// import React, { useState } from 'react';
// import { MdMenu } from 'react-icons/md';

// const Menu = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-gray-900 text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="logo text-2xl font-bold">Your Logo</div>
//         <div className="hidden sm:flex space-x-4">
//           <a href="#" className="hover:text-gray-400">Home</a>
//           <a href="#" className="hover:text-gray-400">About</a>
//           <a href="#" className="hover:text-gray-400">Services</a>
//           <a href="#" className="hover:text-gray-400">Contact</a>
//         </div>
//         <div className="sm:hidden">
//           <button onClick={toggleMenu}>
//             {isMenuOpen ? (
//               <MdMenu size={24} />
//             ) : (
//               <MdMenu size={24} />
//             )}
//           </button>
//         </div>
//       </div>
//       {isMenuOpen && (
//         <div className="container mx-auto sm:hidden mt-4">
//           <ul className="flex flex-col space-y-2">
//             <li><a href="#" className="hover:text-gray-400">Home</a></li>
//             <li><a href="#" className="hover:text-gray-400">About</a></li>
//             <li><a href="#" className="hover:text-gray-400">Services</a></li>
//             <li><a href="#" className="hover:text-gray-400">Contact</a></li>
//           </ul>
//         </div>
//       )}
      
//     </nav>
//   );
// };

// export default Menu;



// import React, { useState } from 'react';
// import { MdMenu } from 'react-icons/md';

// const Menu = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-gray-900 text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="logo text-2xl font-bold text-yellow-500">Your Logo</div>
//         <div className="hidden sm:flex space-x-4">
//           <a href="#" className="hover:text-yellow-500">Home</a>
//           <a href="#" className="hover:text-yellow-500">About</a>
//           <a href="#" className="hover:text-yellow-500">Services</a>
//           <a href="#" className="hover:text-yellow-500">Contact</a>
//         </div>
//         <div className="relative sm:hidden">
//           <button
//             className="menu-button"
//             onClick={toggleMenu}
//           >
//             <MdMenu size={24} className="text-yellow-500" />
//           </button>

//           {isMenuOpen && (
//             <div className="menu w-56 bg-gray-900 h-screen absolute top-10 right-0 transition-transform transform duration-300 ease-in-out">
//               <nav className="menu-nav p-4">
//                 <ul className="menu-list">
//                   <li><a href="#" className="text-white hover:text-yellow-500">Home</a></li>
//                   <li><a href="#" className="text-white hover:text-yellow-500">About</a></li>
//                   <li><a href="#" className="text-white hover:text-yellow-500">Services</a></li>
//                   <li><a href="#" className="text-white hover:text-yellow-500">Contact</a></li>
//                 </ul>
//               </nav>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Menu;

