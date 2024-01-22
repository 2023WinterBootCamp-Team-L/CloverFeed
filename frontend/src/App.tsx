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
import LinkAnswer1 from "./pages/LinkAnswer1";
import LinkAnswer2 from "./pages/LinkAnswer2";
import LinkOpti from "./pages/LinkOpti";
import LinkFinish from "./pages/LinkFinish";
import Gosignup from "./pages/Gosignup";
import Mainpage from "./pages/Mainpage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import WordCloud from "./components/wordcloud";
import Search from "./pages/Search";
import FeedBackResult from "./pages/FeedBackResult";
import LinkAnswer from "./pages/LinkPage/LinkAnswer";
import AnswerCheck from "./pages/LinkPage/AnswerCheck";
import FeedbackList from "./pages/FeedBackList";
import { QuestionProvider } from "./components/QuestionUpdate";

function App() {
  // const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/querymain" element={<QueryMain />} />
        <Route path="/querystart" element={<QueryStart />} />
        <Route path="/queryshare" element={<QueryShare />} />
        <Route path="/LinkMain" element={<LinkMain />} />
        <Route path="/LinkStart" element={<LinkStart />} />
        <Route path="/LinkPosition" element={<LinkPosition />} />
        <Route path="/LinkTag1" element={<LinkTag1 />} />
        <Route path="/Chart" element={<Chart />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/feedbacks/:category" element={<FeedbackList />} />
        <Route path="/feedbackresult" element={<FeedBackResult />} />
        <Route path="/LinkTag2" element={<LinkTag2 />} />
        <Route path="LinkAnswer1" element={<LinkAnswer1 />} />
        <Route path="LinkAnswer2" element={<LinkAnswer2 />} />
        <Route path="LinkOpti" element={<LinkOpti />} />
        <Route path="LinkFinish" element={<LinkFinish />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/gosignup" element={<Gosignup />} />
        <Route path="/wordcloud" element={<WordCloud />} />
        <Route path="/test" element={<LinkAnswer />} />
        <Route path="/check" element={<AnswerCheck />} />
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
