import React, { useState } from "react";
import { Date, DatesWrapper, Day, Wrapper } from "./styles";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
const Dates = () => {
  const dates = [
    { day: "TUE", date: "02" },
    { day: "WED", date: "03" },
    { day: "SUN", date: "04" },
    { day: "MON", date: "05" },
    { day: "SAT", date: "06" },
  ];
  const [active, setActive] = useState("03");
  const handleClick = (event) => {
    setActive(event);
  };
  return (
    <DatesWrapper>
      {dates.map((item) => {
        return (
          <Wrapper
            className={`${active === item.date ? "active" : "disabled"}`}
            onClick={() => handleClick(item.date)}
          >
            <Day variant="h6">
              {item.date} <Date>{item.day}</Date>
            </Day>
            {/* <ArrowDropUpIcon fill="primary" className="active-icon" /> */}
          </Wrapper>
        );
      })}
    </DatesWrapper>
  );
};

export default Dates;
