import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import RatesProvider from "./context";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RatesProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
      </RatesProvider>
    </QueryClientProvider>
  );
}

export default App;
