import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/Transactions";
import { TransacoesProvider } from "./contexts/TransacoesContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransacoesProvider>
        <Transactions />
      </TransacoesProvider>

    </ThemeProvider>

  )
}

