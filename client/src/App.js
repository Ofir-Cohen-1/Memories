// import logo from "./logo.svg";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
// import makeStyles from "@mui/styles/makeStyles";
// import StylesProvider from "@mui/styles/StylesProvider";
// import createStyles from "@mui/styles/createStyles";

import Form from "./components/Form/Form";
// import useStyles from "./Styles";
// import { useMemo } from "react";
// import { createTheme, StyledEngineProvider } from "@mui/material/styles";
// import StylesProvider from "@mui/styles/StylesProvider";

import "./App.css";

const App = () => {
  // const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Memories
        </Typography>
        <img src={memories} alt="memories" height="200" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            aligmItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
// export function Demo() {
//   const theme = useMemo(() => createTheme({}), []);
//   return (
//     <StyledEngineProvider injectFirst>
//       <StylesProvider>
//         <Inner />
//       </StylesProvider>
//     </StyledEngineProvider>
//   );
// }
