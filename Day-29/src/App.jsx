import Mainroutes from "./Routes/Mainroutes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme/theme.js";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Mainroutes />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
