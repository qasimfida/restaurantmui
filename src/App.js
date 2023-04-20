import { ThemeProvider } from "@mui/material";
import "./App.css";
import FoodCard from "./Components/FoodCard";
import { theme } from "./theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <FoodCard />
      </ThemeProvider>
    </div>
  );
}

export default App;
