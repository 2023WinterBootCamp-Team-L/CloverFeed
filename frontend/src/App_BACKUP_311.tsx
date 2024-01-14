import "./App.css";
import { Route, Routes } from "react-router-dom";
import LinkMain from "./pages/LinkMain";
import QueryMain from "./pages/QueryMain";
<<<<<<< HEAD
import Search from "./pages/Search";
=======
import QueryStart from "./pages/QueryStart";
import QueryList from "./pages/QueryList";
import LinkStart from "./pages/LinkStart";
import LinkPosition from "./pages/LinkPosition";
import LinkTag1 from "./pages/LinkTag1";
>>>>>>> 70ce1ba162a318afada5aecb5cce595c6f3ccee8

function App() {
  // const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

  return (
    <div className="App">
      <Routes>
        <Route path="" element={<LinkMain />} />
<<<<<<< HEAD
        <Route path="/query" element={<QueryMain />} />
        <Route path="/Search" element={<Search />} />
=======
        <Route path="/querymain" element={<QueryMain />} />
        <Route path="/querystart" element={<QueryStart />} />
        <Route path="/querylist" element={<QueryList />} />
        <Route path="/LinkMain" element={<LinkMain />} />
        <Route path="/LinkStart" element={<LinkStart />} />
        <Route path="/LinkPosition" element={<LinkPosition />} />
        <Route path="/LinkTag1" element={<LinkTag1 />} />
>>>>>>> 70ce1ba162a318afada5aecb5cce595c6f3ccee8
      </Routes>
    </div>
  );
}

export default App;
