import "./App.css";
import { Route, Routes } from "react-router-dom";
import LinkMain from "./pages/LinkMain";

function App() {
  // const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<LinkMain />} />
      </Routes>
    </div>
  );
}

export default App;
