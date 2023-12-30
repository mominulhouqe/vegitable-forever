import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Link } from "react-router-dom";

const Accordian = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <div className="">
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
            <Typography className="text-gray-800">General Settings</Typography>
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
            <Typography className="text-gray-800">General Settings</Typography>
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
            <Typography className="text-gray-800">General Settings</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Link to="/" className="text-blue-500">
              Nulla facilisi. Phasellus.
            </Link>
          </AccordionDetails>
        </Accordion>

        {/* Add more accordions as needed */}
      </div>
    </div>
  );
};

export default Accordian;
