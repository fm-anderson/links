import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div>
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
