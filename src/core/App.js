import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../theme/GlobalStyle";
import { theme } from "../theme/theme";
import Header from "../components/Header";
import News from "../features/News";
import SideMenu from "../components/SideMenu";
import Footer from "../components/Footer";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <SideMenu />
    <News />
    <Footer />
  </ThemeProvider>
);

export default App;
