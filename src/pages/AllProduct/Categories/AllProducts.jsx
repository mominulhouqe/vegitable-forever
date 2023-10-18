import React, { useState } from 'react';
import img1 from '../../../assets/vagitable09.png';
import {
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
} from '@mui/material';
import { ShoppingCart, Menu, Filter3 } from '@mui/icons-material';
import TuneIcon from '@mui/icons-material/Tune';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaFileSignature, FaFilter, FaSatelliteDish } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllProducts = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    const items = [
        {
            id: 1,
            label: 'ON SALE',
            price: 54,
            originalPrice: 4,
            name: 'Fresh Green Leaf Lettuce',
            quantity: '1 each',
        },
        {
            id: 2,
            label: 'ON SALE',
            price: 54,
            originalPrice: 4,
            name: 'Fresh Green Leaf Lettuce',
            quantity: '1 each',
        },
        {
            id: 3,
            label: 'REGULAR',
            price: 54,
            originalPrice: 4,
            name: 'Fresh Green Leaf Lettuce',
            quantity: '1 each',
        },
        {
            id: 3,
            label: 'REGULAR',
            price: 54,
            originalPrice: 4,
            name: 'Fresh Green Leaf Lettuce',
            quantity: '1 each',
        },
        {
            id: 3,
            label: 'ON SALE',
            price: 54,
            originalPrice: 4,
            name: 'Fresh Green Leaf Lettuce',
            quantity: '1 each',
        },
        // Add more items here
    ];

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="w-full flex justify-center">
            <div className="lg:hidden"> {/* Show on small devices */}
                <Button onClick={toggleDrawer}>
                    <TuneIcon />
                </Button>
            </div>
            <div className="p-4 hidden lg:block"> {/* Hide on small devices */}
        <h3 className='text-xl font-bold'>Categories</h3>
                <div className="">
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '100%', flexShrink: 0 }}>General settings</Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <Link to="/">
                                <Typography className='text-gray-500'>
                                    Nulla facilisi. Phasellus .
                                </Typography>
                            </Link>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '100%', flexShrink: 0 }}>General settings</Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <Link to="/">
                                <Typography className='text-gray-500'>
                                    Nulla facilisi. Phasellus .
                                </Typography>
                            </Link>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '100%', flexShrink: 0 }}>General settings</Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <Link to="/">
                                <Typography className='text-gray-500'>
                                    Nulla facilisi. Phasellus .
                                </Typography>
                            </Link>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>

                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '100%', flexShrink: 0 }}>General settings</Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <Link to="/">
                                <Typography className='text-gray-500'>
                                    Nulla facilisi. Phasellus .
                                </Typography>
                            </Link>
                        </AccordionDetails>

                    </Accordion>

                    {/* Add more accordions as needed */}
                </div>
            </div>

            <div className="w-3/4">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((item, index) => (
                        <div key={index}>
                            <div className="rounded-md shadow-md p-1 card flex justify-center items-center">
                                {item.label === 'ON SALE' && (
                                    <button className="bg-[#02B290] text-xs text-white border rounded-full px-2 py-1 absolute top-2 right-2">
                                        {item.label}
                                    </button>
                                )}
                                <div className="image-container">
                                    <img src={img1} alt="" className="imags" />
                                    {item.label === 'REGULAR' && (
                                        <div>
                                            <button className="btn border-none btn-sm absolute rounded-full right-4 mb-1 bg-[#02B290] hover:bg-lime-600">
                                                +
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <div className="flex gap-1 my-1">
                                        <h6 className="font-semibold text-sm">$ {item.price}</h6>
                                        <h6 className="line-through text-slate-400 text-xs">
                                            $ {item.originalPrice}
                                        </h6>
                                    </div>
                                    <p className="text-xs text-left">{item.name}</p>
                                    <p className="text-xs text-left text-slate-600 my-1">
                                        {item.quantity}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
                <List>
                    <ListItem button>
                        <div className="bg-white">
                        <h3 className='text-xl font-bold'>Categories</h3>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography sx={{ width: '100%', flexShrink: 0 }}>General settings</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Link to="/">
                                        <Typography className='text-gray-500'>
                                            Nulla facilisi. Phasellus .
                                        </Typography>
                                    </Link>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography sx={{ width: '100%', flexShrink: 0 }}>General settings</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Link to="/">
                                        <Typography className='text-gray-500'>
                                            Nulla facilisi. Phasellus .
                                        </Typography>
                                    </Link>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography sx={{ width: '100%', flexShrink: 0 }}>General settings</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Link to="/">
                                        <Typography className='text-gray-500'>
                                            Nulla facilisi. Phasellus .
                                        </Typography>
                                    </Link>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>

                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography sx={{ width: '100%', flexShrink: 0 }}>General settings</Typography>

                                </AccordionSummary>
                                <AccordionDetails>
                                    <Link to="/">
                                        <Typography className='text-gray-500'>
                                            Nulla facilisi. Phasellus .
                                        </Typography>
                                    </Link>
                                </AccordionDetails>

                            </Accordion>


                        </div>
                    </ListItem>
                    {/* Add more menu items as needed */}
                </List>
            </Drawer>

        </div>
    );
};

export default AllProducts;
