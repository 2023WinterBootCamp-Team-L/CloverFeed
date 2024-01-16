import React from 'react';

interface FeedListProps {
  value: string;
}

const FeedList: React.FC<FeedListProps> = ({ value }) => {
  return (
    <div>
      <div className="h-40 w-full border-c-green border-opacity-50 border-2 rounded-lg leading-1.25 p-2 text-sm "> 
      {value}</div>      
    
    </div>
  );
};

export default FeedList;