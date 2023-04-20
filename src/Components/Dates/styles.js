import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

export const Wrapper = styled(Box)`
  display: flex;
  justify-content: center;
  height: 60px;
  width: 50px;
  background: #579b3f;
  border: 2px solid #579b3f;
  border-radius: 10px;
  margin: 3px;
  cursor: pointer;
  color: #4d4d4d;
  margin-bottom: 20px;
  &.active {
    background: #ffffff;
    color: #579b3f;
  }

  &:hover {
    background: #ffffff;
    color: #579b3f;
    border: 2px solid #579b3f;
  }
`;

export const Day = styled(Typography)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
`;
export const Date = styled.span`
  font-weight: normal;
  font-size: 14px;
`;
export const DatesWrapper = styled(Box)`
  display: flex;
  position: relative;
  & .active-icon {
    display: none;
  }

  & .active {
    & .active-icon {
      display: block;
      position: absolute;
      bottom: 0;
      top: 74px;
    }
  }
`;
