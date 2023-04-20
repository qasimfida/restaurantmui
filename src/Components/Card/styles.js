import styled from "@emotion/styled";
import { Box, CardMedia, Typography } from "@mui/material";

export const StyledMedia = styled(CardMedia)`
  height: 150px;
  border-radius: 5px;
`;

export const CardTitle = styled(Typography)`
  text-align: center;
  &:hover {
    color: #579b3f;
  }
`;
export const StyledCard = styled(Box)`
  margin-top: 20px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  &:hover {
    transition: 1px 0.2s ease-in-out;
    border: 1px solid #579b3f;
  }
`;
export const FoodMacrosWrapper = styled(Box)`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;
export const FoodMacros = styled(Typography)`
  &:hover {
    color: #579b3f;
  }
`;
export const TotalMacros = styled.span`
  color: #579b3f;
  font-weight: 600;
`;
