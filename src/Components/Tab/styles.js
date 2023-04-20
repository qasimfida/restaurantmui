import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 80px;
  width: 60px;
  color: #4d4d4d;

  & img {
    height: 80px;
  }
  &:hover {
    color: #579b3f;
  }
`;

export const TabsText = styled(Typography)`
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
`;
