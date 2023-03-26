import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../theme/GlobalStyle";
import { theme } from "../theme/theme";
import Header from "../components/Header";
import News from "../features/News";
import SideMenu from "../components/SideMenu";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <SideMenu />
    <News />
  </ThemeProvider>
);

export default App;
