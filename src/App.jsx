import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div>
        <h1>NLinks</h1>
        <ModeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
