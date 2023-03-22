import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../theme/GlobalStyle";
import { theme } from "../theme/theme";
import Header from "../components/Header";
import News from "../features/News";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    <News />
  </ThemeProvider>
);

export default App;
