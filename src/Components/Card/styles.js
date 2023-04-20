import styled from "@emotion/styled";
import { Box, CardMedia, Typography } from "@mui/material";

export const StyledMedia = styled(CardMedia)`
  height: 150px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`;

export const CardTitle = styled(Typography)`
  &:hover {
    color: #579b3f;
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
