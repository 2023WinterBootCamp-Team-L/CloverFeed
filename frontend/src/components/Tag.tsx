import React from "react";
import classNames from "classnames";

interface TagProps {
  text: string;
  color: string;
  image: string; // Image source as a string
}

const Tag: React.FC<TagProps> = ({ text, color, image }) => {
  const tagClasses = classNames(
    color,
    "text-black",
    "py-2 px-4",
    "rounded-2xl",
    "mt-4",
    "text-sm",
    "flex",
    "items-center",
    "justify-center"
  );

  return (
    <label className="inline-flex relative">
      <div className={tagClasses}>
        <img
          src={image}
          alt="Tag Icon"
          className="mr-2 max-h-4 object-contain"
        />
        {text}
      </div>
    </label>
  );
};

export default Tag;
