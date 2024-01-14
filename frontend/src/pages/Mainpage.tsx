import logouticon from '../assets/logouticon.svg';
import researchicon from '../assets/researchicon.svg';
import charticon from '../assets/charticon.svg';
import shareicon from '../assets/shareicon.svg';
import GreenButton from '../components/GreenButton';
import LogoutButton from '../components/LogoutButton.tsx';
import ResearchButton from '../components/ResearchButton.tsx';
import ChartButton from '../components/ChartButton.tsx';
import ShareButton from '../components/ShareButton.tsx';
import PurplefeedButton from '../components/PurplefeedButton.tsx';
import BluefeedButton from '../components/BluefeedButton.tsx';

function Mainpage() {
  const nextpage = '/QueryMain';
  const logoutpage = '/Signup';
  const researchpage = '/';
  const chartpage = '/';
  const sharepage = '/';
  const developerfeedpage = '/';
  const designerfeedpage = '/';
  const plannerfeedpage = '/';
  const pmpofeedpage = '/';
  const othersfeedpage = '/';

  return (
    <div
      className="bg-white flex flex-col 
    overflow-y-scroll max-w-[24.56rem] mx-auto h-screen gap-[42px] px-22px py-36px"
    >
      <div>
        <p className="text-4xl mt-4">
          Home
          <span className="float-right">
            <LogoutButton iconSrc={logouticon} logoutpage={logoutpage} />
          </span>
        </p>
        <p className="text-xl">keyword cloud</p>
      </div>
      <div className="mt-4">
        <center>
          <h1>WORDCLOUD</h1>
          <p className="text-xs">
            사용자 관점을 잘 배려하는 프론트엔드 <br />
            엔지니어로 평가받고 있습니다.
          </p>
        </center>
      </div>
      <div className="flex justify-center mt-2">
        <GreenButton text="질문 새로 생성하기" nextpage={nextpage} />
      </div>
      <div className="flex justify-center space-x-8xl mt-4">
        <p>
          <span className="mr-12">
            <ResearchButton
              iconSrc={researchicon}
              researchpage={researchpage}
            />
          </span>
          <span className="mr-12">
            <ChartButton iconSrc={charticon} chartpage={chartpage} />
          </span>
          <span>
            <ShareButton iconSrc={shareicon} sharepage={sharepage} />
          </span>
        </p>
      </div>
      <div>
        <p className="text-xl mt-0">feedback</p>
        <PurplefeedButton
          text="개발자의 피드백"
          purplefeedpage={developerfeedpage}
        />
        <BluefeedButton
          text="디자이너의 피드백"
          bluefeedpage={designerfeedpage}
        />
        <PurplefeedButton
          text="기획자의 피드백"
          purplefeedpage={plannerfeedpage}
        />
        <BluefeedButton text="PM/PO의 피드백" bluefeedpage={pmpofeedpage} />
        <PurplefeedButton
          text="기타 직무의 피드백"
          purplefeedpage={othersfeedpage}
        />
      </div>
    </div>
  );
}
export default Mainpage;
