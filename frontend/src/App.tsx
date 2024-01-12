import "./App.css";
import { Route, Routes } from "react-router-dom";
import LinkMain from "./pages/LinkMain";
import QueryMain from "./pages/QueryMain";
import Search from "./pages/Search";

function App() {
  // const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<LinkMain />} />
        <Route path="/query" element={<QueryMain />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
