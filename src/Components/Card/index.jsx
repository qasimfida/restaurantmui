import React from "react";
import { CardContent, CardActionArea } from "@mui/material";
import salad from ".././../images/salad.jpg";
import {
  CardTitle,
  FoodMacros,
  FoodMacrosWrapper,
  StyledCard,
  StyledMedia,
  TotalMacros,
} from "./styles";
const MenuCard = () => {
  return (
    <StyledCard>
      <CardActionArea>
        <StyledMedia image={salad} title="Food" />
        <CardContent>
          <CardTitle gutterBottom variant="h5" component="h2">
            Chicken Pasta
          </CardTitle>
          <FoodMacrosWrapper>
            <FoodMacros>
              Protein <br />
              <TotalMacros>531</TotalMacros>
            </FoodMacros>
            <FoodMacros>
              Carb <br />
              <TotalMacros>32</TotalMacros>
            </FoodMacros>
            <FoodMacros>
              Calories <br />
              <TotalMacros>43</TotalMacros>
            </FoodMacros>
            <FoodMacros>
              Fat <br />
              <TotalMacros>54</TotalMacros>
            </FoodMacros>
          </FoodMacrosWrapper>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default MenuCard;
