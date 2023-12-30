import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    Drawer,
    List,
    ListItem,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import { Link } from "react-router-dom";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  import TuneIcon from "@mui/icons-material/Tune";
  
  const Drawers = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);
  
    const toggleDrawer = () => {
      setDrawerOpen(!isDrawerOpen);
    };
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
      <div>
        {/* Show on small devices */}
        <div className="lg:hidden">
          <Button onClick={toggleDrawer}>
            <TuneIcon />
          </Button>
        </div>
  
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
          <List className="bg-gray-100 p-4">
            <ListItem>
              <div>
                <h3 className="text-2xl font-bold mb-4">Categories</h3>
  
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className="bg-white"
                  >
                    <Typography className="text-gray-800">
                      General Settings
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Link to="/" className="text-blue-500">
                      Nulla facilisi. Phasellus.
                    </Link>
                  </AccordionDetails>
                </Accordion>
  
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    className="bg-white"
                  >
                    <Typography className="text-gray-800">
                      General Settings
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Link to="/" className="text-blue-500">
                      Nulla facilisi. Phasellus.
                    </Link>
                  </AccordionDetails>
                </Accordion>
  
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    className="bg-white"
                  >
                    <Typography className="text-gray-800">
                      General Settings
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Link to="/" className="text-blue-500">
                      Nulla facilisi. Phasellus.
                    </Link>
                  </AccordionDetails>
                </Accordion>
  
                {/* Repeat the above structure for additional accordions */}
  
              </div>
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  };
  
  export default Drawers;
  