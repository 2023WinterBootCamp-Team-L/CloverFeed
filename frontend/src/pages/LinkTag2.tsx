import { useState } from 'react';
import BackButton from '../components/BackButton';
import Tag from '../components/Tag';
import ExceedPopup from '../components/ExceedPopup';

interface TagProps {
  text: string;
  image: string;
  tagnumber: number;
}

const LinkTag2: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [showExceedPopup, setShowExceedPopup] = useState(false);

  const handleTagClick = (tagnumber: number) => {
    setSelectedTags((prevSelectedTags) => {
      const isSelected = prevSelectedTags.includes(tagnumber);

      // 선택을 토글
      let updatedSelectedTags = isSelected
        ? prevSelectedTags.filter((selectedTag) => selectedTag !== tagnumber)
        : [...prevSelectedTags, tagnumber];

      // 선택된 태그 수가 제한을 초과하는지 확인
      if (updatedSelectedTags.length > 5) {
        setShowExceedPopup(true);
        // selectedTags가 5개를 초과하면 마지막으로 추가된 태그를 제거
        updatedSelectedTags = updatedSelectedTags.slice(0, -1);
      } else {
        setShowExceedPopup(false);
      }

      return updatedSelectedTags;
    });
  };

  const closeExceedPopup = () => {
    setShowExceedPopup(false);
  };

  // 태그에 사용될 데이터 배열
  const tagsData: TagProps[] = [
    {
      text: '책임감',
      image: '../src/assets/책임감.png',
      tagnumber: 1,
    },
    {
      text: '공감능력',
      image: '../src/assets/공감능력.png',
      tagnumber: 2,
    },
    {
      text: '배려심',
      image: '../src/assets/배려심.png',
      tagnumber: 3,
    },
    {
      text: '성실함',
      image: '../src/assets/성실함.png',
      tagnumber: 4,
    },
    {
      text: '적극적인',
      image: '../src/assets/적극적인.png',
      tagnumber: 5,
    },
    {
      text: '꼼꼼함',
      image: '../src/assets/꼼꼼함.png',
      tagnumber: 6,
    },
    {
      text: '분위기 메이커',
      image: '../src/assets/분위기메이커.png',
      tagnumber: 7,
    },
    {
      text: '주도적인',
      image: '../src/assets/주도적인.png',
      tagnumber: 8,
    },
    {
      text: '센스있는',
      image: '../src/assets/센스있는.png',
      tagnumber: 9,
    },
    {
      text: '긍정적인',
      image: '../src/assets/긍정적인.png',
      tagnumber: 10,
    },
    {
      text: '사교성이 좋은',
      image: '../src/assets/사교성이좋은.png',
      tagnumber: 11,
    },
    {
      text: '관대한',
      image: '../src/assets/관대한.png',
      tagnumber: 12,
    },
    {
      text: '경청하는',
      image: '../src/assets/경청하는.png',
      tagnumber: 13,
    },
    {
      text: '도전적인',
      image: '../src/assets/도전적인.png',
      tagnumber: 14,
    },
    {
      text: '끈기',
      image: '../src/assets/끈기.png',
      tagnumber: 15,
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="flex flex-col justify-center overflow-hidden relative bg-c-emerald bg-opacity-35 px-5 py-8 gap-10 min-h-screen w-full sm:w-[393px] lg:w-[393px]"
        // style={{ width: '393px', height: '852px' }}
      >
        <div className="flex justify-between w-full">
          <BackButton back page="/LinkTag1" />
          <BackButton back={false} page="/LinkAnswer" />
        </div>
        <div className="flex-full">
          <p className="font-pre text-[22px] font-bold text-center">
            당신이 생각하는 XXX 님의
          </p>
          <p className="font-pre text-[22px] font-bold text-center">
            성격 및 태도는 어떤가요?
          </p>
          <p className="font-pre text-[14px] text-gray-400 text-center">
            키워드를 최대 5개까지 선택해주세요.
          </p>
        </div>
        <div className="flex-1 text-center">
          {/* 15개의 태그 렌더링 */}
          {tagsData.map((tag, index) => (
            <Tag
              key={index}
              text={tag.text}
              tagnumber={tag.tagnumber}
              color={
                selectedTags.length < 5 ||
                (selectedTags.length === 5 &&
                  selectedTags.includes(tag.tagnumber))
                  ? selectedTags.includes(tag.tagnumber)
                    ? 'bg-white'
                    : tag.tagnumber
                  : null
              }
              image={tag.image}
              onClick={() => handleTagClick(tag.tagnumber)}
            />
          ))}
        </div>
        {/* 초과 팝업 렌더링 */}
        {showExceedPopup && <ExceedPopup onClose={closeExceedPopup} />}
      </div>
    </div>
  );
};

export default LinkTag2;
