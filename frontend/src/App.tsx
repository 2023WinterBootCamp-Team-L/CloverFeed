import "./App.css";
import { Route, Routes } from "react-router-dom";
import LinkMain from "./pages/LinkMain";
import QueryMain from "./pages/QueryMain";

function App() {
  // const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<LinkMain />} />
        <Route path="/query" element={<QueryMain />} />
      </Routes>
    </div>
  );
}

export default App;
