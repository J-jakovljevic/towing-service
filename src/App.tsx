import "./styles/index.css";
import ErrorBoundary from "@/components/errorBoundary/ErrorBoundary";
import HomePage from "@/pages/HomePage";

const App = () => {
  return (
    <ErrorBoundary>
      <HomePage />
    </ErrorBoundary>
  );
};

export default App;
