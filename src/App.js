import React from "react";
import Routes from "./routes";
import { Box } from "@material-ui/system";
import { Container } from "./styles";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

function App() {
  return (
    <Container>
      <Box sx={style}>
        <Routes />
      </Box>
    </Container>
  );
}

export default App;
