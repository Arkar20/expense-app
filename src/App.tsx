import { ThemeProvider } from "@/theme/theme-provider";
import Index from "./pages";

const App = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="p-4  min-h-screen text-white max-w-screen-xl mx-auto">
                <Index />
            </div>
        </ThemeProvider>
    );
};

export default App;
