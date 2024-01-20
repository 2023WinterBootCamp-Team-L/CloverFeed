// 카테고리에 따른 텍스트 반환 함수
const getCategoryText = (category: string): string => {
  switch (category) {
    case "developer":
      return "개발자";
    case "designer":
      return "디자이너";
    case "planner":
      return "기획자";
    case "pmpo":
      return "PM/PO";
    case "others":
      return "기타직무";
    default:
      return "";
  }
};

export default getCategoryText;
