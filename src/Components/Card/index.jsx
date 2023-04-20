import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import salad from ".././../images/salad.jpg";
import {
  CardTitle,
  FoodMacros,
  FoodMacrosWrapper,
  StyledMedia,
  TotalMacros,
} from "./styles";
const MenuCard = () => {
  return (
    <Card>
      <CardActionArea>
        <StyledMedia image={salad} title="Food" />
        <CardContent>
          <CardTitle gutterBottom variant="h5" component="h2">
            Chicken Pasta
          </CardTitle>

          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles,
          </Typography>
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
    </Card>
  );
};

export default MenuCard;
