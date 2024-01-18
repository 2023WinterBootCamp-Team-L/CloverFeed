import "./App.css";
import { Route, Routes } from "react-router-dom";
import { QuestionProvider } from "./components/QuestionUpdate";
import LinkMain from "./pages/LinkMain";
import QueryMain from "./pages/QueryMain";
import QueryStart from "./pages/QueryStart";
import QueryList from "./pages/QueryList";
import QueryAdd from "./pages/QueryAdd";
import QueryShare from "./pages/QueryShare";
import LinkStart from "./pages/LinkStart";
import LinkPosition from "./pages/LinkPosition";
import LinkTag1 from "./pages/LinkTag1";
import Chart from "./pages/Chart";
import LinkTag2 from "./pages/LinkTag2";
import LinkAnswer1 from "./pages/LinkAnswer1";
import LinkAnswer2 from "./pages/LinkAnswer2";
import LinkOpti from "./pages/LinkOpti";
import LinkFinish from "./pages/LinkFinish";
import Gosignup from "./pages/Gosignup";
import Mainpage from "./pages/Mainpage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import WordCloud from "./components/wordcloud";
import FeedBackList from "./pages/FeedBackList";
import Search from "./pages/Search";
import FeedBackResult from "./pages/FeedBackResult";

function App() {
  // const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LinkMain />} />
        <Route path="/querymain" element={<QueryMain />} />
        <Route path="/querystart" element={<QueryStart />} />
        <Route path="/queryshare" element={<QueryShare />} />
        <Route path="/LinkMain" element={<LinkMain />} />
        <Route path="/LinkStart" element={<LinkStart />} />
        <Route path="/LinkPosition" element={<LinkPosition />} />
        <Route path="/LinkTag1" element={<LinkTag1 />} />
        <Route path="/Chart" element={<Chart />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/feedbackresult/2" element={<FeedBackResult />} />{" "}
        {/**추후 페이지 링크 수정*/}
        <Route path="/feedbacks/:category" element={<FeedBackList />} />
        <Route path="/LinkTag2" element={<LinkTag2 />} />
        <Route path="LinkAnswer1" element={<LinkAnswer1 />} />
        <Route path="LinkAnswer2" element={<LinkAnswer2 />} />
        <Route path="LinkOpti" element={<LinkOpti />} />
        <Route path="LinkFinish" element={<LinkFinish />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/gosignup" element={<Gosignup />} />
        <Route path="/wordcloud" element={<WordCloud />} />
      </Routes>

      <QuestionProvider>
        <Routes>
          <Route path="/queryadd" element={<QueryAdd />} />
          <Route path="/querylist" element={<QueryList />} />
        </Routes>
      </QuestionProvider>
    </div>
  );
}

export default App;
