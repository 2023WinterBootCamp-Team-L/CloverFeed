import "./App.css";
import { Route, Routes } from "react-router-dom";
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
import LinkFinish from "./pages/LinkFinish";
import Gosignup from "./pages/Gosignup";
import Mainpage from "./pages/Mainpage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import WordCloud from "./components/wordcloud";
import Search from "./pages/Search";
import FeedBackResult from "./pages/FeedBackResult";
import LinkAnswer from "./pages/LinkAnswer";
import AnswerCheck from "./pages/LinkPage/AnswerCheck";
import FeedbackList from "./pages/FeedBackList";

function App() {
  // const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Gosignup" element={<Gosignup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/MainPage" element={<Mainpage />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Feedbacks/:category" element={<FeedbackList />} />
        <Route path="/FeedbackResult" element={<FeedBackResult />} />
        <Route path="/QueryMain" element={<QueryMain />} />
        <Route path="/QueryStart" element={<QueryStart />} />
        <Route path="/QueryAdd" element={<QueryAdd />} />
        <Route path="/QueryList" element={<QueryList />} />
        <Route path="/QueryShare" element={<QueryShare />} />
        <Route path="/LinkMain" element={<LinkMain />} />
        <Route path="/LinkStart" element={<LinkStart />} />
        <Route path="/LinkPosition" element={<LinkPosition />} />
        <Route path="/LinkTag1" element={<LinkTag1 />} />
        <Route path="/LinkTag2" element={<LinkTag2 />} />
        <Route path="/LinkAnswer" element={<LinkAnswer />} />
        <Route path="LinkFinish" element={<LinkFinish />} />
        <Route path="/Chart" element={<Chart />} />
        <Route path="/WordCloud" element={<WordCloud />} />
        <Route path="/Check" element={<AnswerCheck />} />
      </Routes>
    </div>
  );
}

export default App;
