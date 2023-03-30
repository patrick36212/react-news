import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../theme/GlobalStyle";
import { theme } from "../theme/theme";
import { RouterProvider } from "react-router";
import { routes } from "./routes";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <RouterProvider router={routes} />
  </ThemeProvider>
);

export default App;
