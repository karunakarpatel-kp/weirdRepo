import React from "react";

interface highlightTextProps {
  children?: JSX.Element | JSX.Element[] | string | string[];
}

const HighlightText = (props: highlightTextProps) => {
  return (
    <>
      <span className="customCode">{props.children}</span>
    </>
  );
};

export default HighlightText;
