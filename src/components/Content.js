import {
  Box,
  Divider,
  Grid,
  MenuItem,
  Select,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { RatesContext } from "../context";
import ChangeDefaultCurrency from "./ChangeDefaultCurrency";
import ConvertInputs from "./ConvertInputs";
import CurrencyRatesContainer from "./CurrencyRatesContainer";

const Content = () => {
  const [value, setValue] = useState(0);
  const { ratesData, getRatesData } = useContext(RatesContext);

  useEffect(() => {
    getRatesData();
  }, []);

  const handleTabsChange = (event, tab) => {
    setValue(tab);
  };

  const getContent = () => {
    if (value === 1) {
      return <CurrencyRatesContainer data={ratesData} />;
    }
    return <ConvertInputs data={ratesData} />;
  };

  return (
    <Box>
      <Grid container justifyContent="space-between">
        <Tabs value={value} onChange={handleTabsChange}>
          <Tab label="Converter" value={0} />
          <Tab label="Currency rates" value={1} />
        </Tabs>
        <ChangeDefaultCurrency />
      </Grid>
      <Divider className="divider" />
      <Grid>{getContent()}</Grid>
    </Box>
  );
};

export default Content;
