import React from "react";

interface CcodeProps {
  children?: JSX.Element | JSX.Element[] | string | string[];
}

const Ccode = (props: CcodeProps) => {
  return (
    <>
      <code className="customCode">{props.children}</code>
    </>
  );
};

export default Ccode;
