"use client";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Cardenergy from "../components/cardenergy";
import Cardvalue from "../components/Cardvalue"
import Energygraph from "../components/energyGraph"
import CustomTabPanel from "./Custompanel"
import { useState } from "react";

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            ".MuiTab-root": {
              position: "relative",
              "&:not(:last-child)": {
                "&::after": {
                  content: '""',
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: "translateY(-50%)",
                  height: "60%",
                  width: "1px",
                  bgcolor: "divider",
                },
              },
            },
          }}
        >
          <Tab className="divide-x" label="Energy" {...a11yProps(0)} />
          <Tab label="..." {...a11yProps(1)} />
          {/* <Tab label="..." {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Cardvalue />
        <Cardenergy />
        <Energygraph />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        ...
      </CustomTabPanel>
      {/* <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel> */}
    </Box>
  );
}
