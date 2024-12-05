import TypedAnimation from "Components/Animations/TypedAnimation";
import Sharing from "Components/SocialShare/Sharing";
import React from "react";

const Article = ({ incomingProps }: any) => {
  return (
    <>
      <article className="border-0 md:border border-slate-200 rounded-sm px-5 lg:px-3  py-3 break-words col-span-12 lg:col-span-8">
        {incomingProps.children}
        <section className="border-t border-slate-200 pt-4">
          <TypedAnimation />
        </section>
        <Sharing />
      </article>
    </>
  );
};

export default Article;
