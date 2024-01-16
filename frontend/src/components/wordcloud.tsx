import ReactWordcloud from 'react-wordcloud';

const words = [
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 11,
  },
  {
    text: 'thought',
    value: 16,
  },
  {
    text: 'bad',
    value: 17,
  },
];

function SimpleWordcloud() {
  <div className="max-w-md mx-auto p-4 bg-gray-200 rounded-md shadow-md">
    <h2 className="text-xl font-semibold mb-4">Word Cloud Example</h2>
    <div className="w-full h-64"></div>
  </div>;
  return <ReactWordcloud words={words} />;
}
export default SimpleWordcloud;
