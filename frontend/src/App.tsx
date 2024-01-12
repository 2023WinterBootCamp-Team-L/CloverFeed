import "./App.css";
import { Route, Routes } from "react-router-dom";
import LinkMain from "./pages/LinkMain";
import QueryMain from "./pages/QueryMain";
import QueryStart from "./pages/QueryStart";
import QueryList from "./pages/QueryList";
import QueryAdd from "./pages/QueryAdd";
import QueryShare from "./pages/QueryShare";

function App() {
  // const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<LinkMain />} />
        <Route path="/querymain" element={<QueryMain />} />
        <Route path="/querystart" element={<QueryStart />} />
        <Route path="/querylist" element={<QueryList />} />
        <Route path="/queryadd" element={<QueryAdd />} />
        <Route path="/queryshare" element={<QueryShare />} />
      </Routes>
    </div>
  );
}

export default App;
