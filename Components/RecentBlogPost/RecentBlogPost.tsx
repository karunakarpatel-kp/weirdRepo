"use client";
import React from "react";
import { blogPostsObj } from "Essential";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface incomingBlogObjProps {
  id: number;
  url: string;
  title: string;
  description?: string;
  lastUpdateTime: string;
  publishedTime: string;
  tags: {
    tag: string;
    href: string;
  }[];
  featuredImage: any;
  featuredImageAltText: string;
}

const RecentBlogPost = () => {
  const presentURL = usePathname();

  const filteredObjWithoutPresentURL = blogPostsObj.filter((singleURL) => presentURL !== singleURL.url);
  const lastThreePublishedArticles = filteredObjWithoutPresentURL.slice(-3);

  return (
    <>
      <div className="text-3xl font-semibold mt-10 pl-3 mb-6  pb-4 border-t border-b border-dashed pt-4">
        <h6>Recent Articles</h6>
      </div>
      <div className="LoadingUI grid  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-11 md:gap-14 mx-2 ">
        {lastThreePublishedArticles !== null &&
          lastThreePublishedArticles.map((singleBlogPost, index) => {
            return (
              <div
                key={index}
                className=" shadow-md md:shadow-xl mt-0 m-auto p-3 md:p-5 no-underline ring-1 ring-gray-200 dark:ring-slate-600 rounded-md hover:bg-slate-50  dark:bg-slate-900 dark:hover:bg-slate-800 h-full "
              >
                <Link href={singleBlogPost.url} className="no-underline">
                  <h1 className="text-3xl leading-snug  break-words font-bold font-sans mb-0 px-1">
                    {singleBlogPost.title}
                  </h1>
                  <Image
                    src={singleBlogPost.featuredImage}
                    alt={singleBlogPost.featuredImageAltText}
                    className="mt-3 mb-3  h-[230px] ring-1 rounded-md bg-slate-200 dark:bg-slate-800"
                  />
                  <p className="text-xl mt-0  font-normal line-clamp-5 leading-relaxed">{singleBlogPost.description}</p>
                  <div className="flex  space-x-1 md:space-x-2 border-0 border-white flex-wrap  justify-start space-y-2 items-baseline -mt-3 ">
                    {singleBlogPost.tags.map((singleTag, index) => {
                      return (
                        <div
                          className="no-underline border border-slate-100 bg-slate-100 dark:bg-slate-900 dark:border-slate-700 rounded-lg px-3 py-1 text-base "
                          key={index}
                        >
                          {singleTag.tag}
                        </div>
                      );
                    })}
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default RecentBlogPost;

// import { blogPostsObj } from "Essential";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const RecentBlogPost = () => {
//   const lastBlogPostObj = blogPostsObj.slice(-3);
//   console.log(lastBlogPostObj, "LAST BLOG OBJECT");

//   return (
//     <div className="LoadingUI grid  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-11 md:gap-14 mt-14 mb-8 mx-2 ">
//       {lastBlogPostObj.map((singleBlogPost, index) => {
//         return (
//           <div
//             key={index}
//             className=" shadow-md md:shadow-xl mt-0 m-auto p-3 md:p-5 no-underline ring-1 ring-gray-200 dark:ring-slate-600 rounded-md hover:bg-slate-50  dark:bg-slate-900 dark:hover:bg-slate-800 h-full "
//           >
//             <Link href={singleBlogPost.url} className="no-underline">
//               <h1 className="text-3xl leading-snug  break-words font-bold font-sans mb-0 px-1">
//                 {singleBlogPost.title}
//               </h1>
//               <Image
//                 src={singleBlogPost.featuredImage}
//                 alt={singleBlogPost.featuredImageAltText}
//                 className="mt-3 mb-3  h-[230px] ring-1 rounded-md bg-slate-200 dark:bg-slate-800"
//               />
//               <p className="text-xl mt-0  font-normal line-clamp-5 leading-relaxed">{singleBlogPost.description}</p>
//               <div className="flex  space-x-1 md:space-x-2 border-0 border-white flex-wrap  justify-start space-y-2 items-baseline -mt-3 ">
//                 {singleBlogPost.tags.map((singleTag, index) => {
//                   return (
//                     <div
//                       className="no-underline border border-slate-100 bg-slate-100 dark:bg-slate-900 dark:border-slate-700 rounded-lg px-3 py-1 text-base "
//                       key={index}
//                     >
//                       {singleTag.tag}
//                     </div>
//                   );
//                 })}
//               </div>
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default RecentBlogPost;
