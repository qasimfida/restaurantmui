import styled from "@emotion/styled";
import { TabContext } from "@mui/lab";
import { Box, Button, FormControl, Tab } from "@mui/material";

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid black;
  width: 30%;
  margin: 0 auto;
`;
export const StyledTabContext = styled(TabContext)`
  border: none;
`;

export const TabListContainer = styled(Box)`
  display: flex;
  justify-content: center;
`;
export const PriceWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;

  & label {
    background: #ffffff;
    color: #579b3f;

    &.Mui-focused {
      color: #579b3f;
    }
  }
`;
export const StyledTab = styled(Tab)`
  color: #333333;

  &.Mui-selected {
    border-radius: 5px;
    font-weight: bold;
    color: #579b3f;
  }
`;
export const StyledFormControl = styled(FormControl)`
  width: 150px;
  min-width: 120;
  height: 100px;
`;

export const StyledButton = styled(Button)`
  background: #ffffff;
  color: #579b3f;
  padding: 0px 20px;
  border: 2px solid #579b3f;
  height: 40px;
  &:hover {
    background: #579b3f;
    color: #ffffff;
  }
`;
