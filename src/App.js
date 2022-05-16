import { QueryClient, QueryClientProvider } from "react-query";
import Content from "./components/Content";
import Header from "./components/Header";
import RatesProvider from "./context";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RatesProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </RatesProvider>
  </QueryClientProvider>
);

export default App;
