import Sharing from "Components/SocialShare/Sharing";
import React from "react";

const Sidebar = () => {
  return (
    <>
      <aside className="border-0 border-slate-900 col-span-12 mt-5 lg:mt-0  lg:col-span-4 relative ">
        <section className=" col-span-12 md:col-span-4 lg:col-span-4 border-0 border-red-700 p-0  lg:px-5 mb-5">
          <div className="flex flex-col justify-between  border border-slate-300 shadow-sm p-2 px-8 py-4 mt-0 ">
            <div className="text-2xl font-semibold mb-4 ">Seller Information</div>
            <span className="border border-brandColor border-dotted w-3/4 dark:border-white "></span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quas. Illo natus facere ducimus incidunt
            quaerat iusto quis fugit quisquam.
          </div>
        </section>
        {/* Sticky Section */}
        <section className=" col-span-12 md:col-span-4 lg:col-span-4 border-0 border-red-700 p-0 lg:px-5 md:sticky md:top-20 ">
          <section>
            <div className="flex flex-col justify-between  border border-slate-300 shadow-sm p-2 px-8 py-4 mt-0 ">
              <div className="text-2xl font-semibold mb-4 ">Seller Information</div>
              <span className="border border-brandColor border-dotted w-3/4 dark:border-white "></span>
              <ol className="list-disc">
                <li>
                  <span className="flex items-center ">
                    <span className="pr-3">Email Verified</span>
                    <span>
                      {/* <MdVerified className="text-brandColor dark:text-white" /> */}
                      Yes
                    </span>
                  </span>
                </li>
                <li>
                  <span className="flex items-center ">
                    <span className="pr-3">Phone Number Verified</span>
                    <span>
                      {/* <MdVerified className="text-brandColor dark:text-white" /> */}
                      Yes
                    </span>
                  </span>
                </li>
                <li>
                  <span className="flex items-center ">
                    <span className="pr-3">Contact Infomration Verified</span>
                    <span>
                      {/* <MdVerified className="text-brandColor dark:text-white" /> */}
                      Yes
                    </span>
                  </span>
                </li>
                <li>
                  <span className="flex items-center ">
                    <span className="pr-3">Governament ID Verified</span>
                    <span>Yes</span>
                  </span>
                </li>
              </ol>
            </div>
          </section>
          <section className=" col-span-12 md:col-span-4 lg:col-span-4 border-0 border-red-700 mt-5 ">
            <div className="border border-slate-300 shadow-sm p-2 px-8 py-4 flex justify-center  ">
              <Sharing />
            </div>
          </section>
        </section>
      </aside>
    </>
  );
};

export default Sidebar;
