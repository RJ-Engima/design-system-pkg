import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./tab.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 1, pb: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
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

function BasicTabs(props) {
  const { TabsContent,className,orientation,tabpanel,mainClass,iconChildren,iconPosition, defaultValue } = props;
  const [value, setValue] = React.useState(defaultValue ? defaultValue : 0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "#EDEFF0" }}>
        <Tabs
          className={mainClass ? mainClass : 'ds-tabs'}
          // className={tabs}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          orientation={orientation}>
          {TabsContent.map((arg) => {
            return (
              <Tab
                sx={{ borderBottom: 1, borderColor: "#EDEFF0" }}
                className={className ? className : 'ds-tab-btn'}
                label={arg.label}
                {...a11yProps(arg.labelkey)}
                icon={iconChildren}
                iconPosition={iconPosition}
              />
            );
          })}
        </Tabs>
      </Box>

      {TabsContent.map((arg2) => {
        return (
          <TabPanel value={value} index={arg2.labelkey}  className={tabpanel}>
            {arg2.Content}
          </TabPanel>
        );
      })}
    </Box>
  );
}

export default BasicTabs;

// className="ds-tab-btn"
// className="ds_tb_tabpanel"