import React from "react";

interface HighlightTextProps {
  children?: JSX.Element | JSX.Element[] | string | string[];
}

export const HighlightText = (props: HighlightTextProps) => {
  return (
    <>
      <strong className="customCode">{props.children}</strong>
    </>
  );
};
