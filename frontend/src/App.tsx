import "./App.css";
import { Route, Routes } from "react-router-dom";
import LinkMain from "./pages/LinkMain";
import QueryMain from "./pages/QueryMain";
import QueryStart from "./pages/QueryStart";
import QueryList from "./pages/QueryList";
import LinkStart from "./pages/LinkStart";
import LinkPosition from "./pages/LinkPosition";
import LinkTag1 from "./pages/LinkTag1";
import LinkTag2 from "./pages/LinkTag2";
import LinkAnswer1 from "./pages/LinkAnswer1";
import LinkAnswer2 from "./pages/LinkAnswer2";
import LinkOpti from "./pages/LinkOpti";
import LinkFinish from "./pages/LinkFinish";

function App() {
  // const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<LinkMain />} />
        <Route path="/querymain" element={<QueryMain />} />
        <Route path="/querystart" element={<QueryStart />} />
        <Route path="/querylist" element={<QueryList />} />
        <Route path="/LinkMain" element={<LinkMain />} />
        <Route path="/LinkStart" element={<LinkStart />} />
        <Route path="/LinkPosition" element={<LinkPosition />} />
        <Route path="/LinkTag1" element={<LinkTag1 />} />
        <Route path="/LinkTag2" element={<LinkTag2 />} />
        <Route path="LinkAnswer1" element={<LinkAnswer1 />} />
        <Route path="LinkAnswer2" element={<LinkAnswer2 />} />
        <Route path="LinkOpti" element={<LinkOpti />} />
        <Route path="LinkFinish" element={<LinkFinish />} />
      </Routes>
    </div>
  );
}

export default App;
