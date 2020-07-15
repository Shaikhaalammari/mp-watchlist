import React from "react";
import { Title, GlobalStyle, ThemeProvider } from "./styles";
import WatchList from "./components/WatchList";

function App() {
  const theme = {
    mainColor: "#3f4441",
    backgroundColor: "#fefafb", // main background color
    red: "#fa1616",
    blue: "#474f85",
    add: "#2bb2bb",
  };
  return (
    <div>
      <center>
        <Title> Its movie Time!!</Title>
        <img
          src="https://images.assetsdelivery.com/compings_v2/sabelskaya/sabelskaya1702/sabelskaya170200383.jpg"
          alt="logo"
        />
        <h3>What to watch Next ?</h3>
      </center>
      <br></br>
      <br></br>
      <ThemeProvider theme={theme}>
        <WatchList />
      </ThemeProvider>
    </div>
  );
}

export default App;
