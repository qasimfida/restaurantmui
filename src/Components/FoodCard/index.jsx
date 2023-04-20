import React, { useState } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { TabList, TabPanel } from "@mui/lab";
import Dates from "../Dates";
import {
  PriceWrapper,
  StyledButton,
  StyledFormControl,
  StyledTab,
  StyledTabContext,
  TabListContainer,
  Wrapper,
} from "./styles";
import Tab from "../Tab";
import burger from "../../images/burger.jpg";
import dinner from "../../images/dinner.jpg";
import Card from "../Card";

const FoodCard = () => {
  const [value, setValue] = React.useState("1");
  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleDropDownChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <Wrapper>
      <Dates />
      <Box>
        <StyledTabContext value={value}>
          <TabListContainer>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <StyledTab label={<Tab title="Lunch" src={burger} />} value="1" />
              <StyledTab
                label={<Tab title="Dinner" src={dinner} />}
                value="2"
              />
              <StyledTab label={<Tab title="Snack" src={burger} />} value="3" />
            </TabList>
          </TabListContainer>
          <TabPanel value="1">
            <Card />
          </TabPanel>
          <TabPanel value="2">jehb</TabPanel>
          <TabPanel value="3">wed</TabPanel>
        </StyledTabContext>

        <PriceWrapper>
          <StyledFormControl>
            <InputLabel id="my-select-label">Package</InputLabel>
            <Select
              labelId="my-select-label"
              id="my-select"
              value={value}
              onChange={handleChange}
            >
              <MenuItem value={1}>Option 1</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <MenuItem value={3}>Option 3</MenuItem>
            </Select>
          </StyledFormControl>

          <StyledButton>Subscribe</StyledButton>
        </PriceWrapper>
      </Box>
    </Wrapper>
  );
};

export default FoodCard;
