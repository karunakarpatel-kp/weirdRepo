"use client";

import { CustomMetaData } from "Components/MetaData/CustomMetaData";
import { SEO_OBJ, blogPostsObj } from "Essential";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Slider from "react-slick";

import sampleImage from "../public/Redux_Toolkit_slice.png";
import MasonryStyle from "Components/CustomMasonry/MasonryStyle";
import GrowAGarden from "./(Games)/_GamesList/Grow-a-garden";
import Racing from "./(Games)/_GamesList/Racing";
import GadgetUniverse from "./(Games)/_GamesList/gadget-universe";
import EscapeRoad from "./(Games)/_GamesList/escape-road";

// export const metadata: any = CustomMetaData({ presentURL: SEO_OBJ.HOME_PAGE.absoluteURL });

const Home = () => {
  return (
    <>
      <div className="masonry grid grid-flow-col grid-rows-2 gap-4 mt-14">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 3, 750: 4, 900: 6 }}>
          <Masonry>
            <div className="cols-span-2">
              <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
                <Racing />
              </Link>
            </div>
            <div>
              <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
                <Racing />
              </Link>
            </div>

            <div>
              <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
                <GrowAGarden />
              </Link>
            </div>

            <div className=" ">
              <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
                <Racing />
              </Link>
            </div>

            <div className=" ">
              <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
                <GadgetUniverse />
              </Link>
            </div>

            <div className="">
              <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
                <GrowAGarden />
              </Link>
            </div>

            <div className=" ">
              <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
                <Racing />
              </Link>
            </div>

            <div className=" ">
              <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
                <Racing />
              </Link>
            </div>

            <div className=" ">
              <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
                <Racing />
              </Link>
            </div>

            <div className=" ">
              <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
                <GrowAGarden />
              </Link>
            </div>

            <div className=" ">
              <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
                <Racing />
              </Link>
            </div>

            <div className=" ">
              <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
                <GadgetUniverse />
              </Link>
            </div>

            <div>
              <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
                <EscapeRoad />
              </Link>
            </div>
          </Masonry>
        </ResponsiveMasonry>
      </div>
      {/* React Slick */}
      <div className="slider-container bg-white text-black">
        <Slider speed={500} slidesToShow={3} infinite={true} dots={true}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Home;

// export const metadata: any = CustomMetaData({ presentURL: SEO_OBJ.HOME_PAGE.absoluteURL });

// const Home = () => {
//   return (
//     <>
//       <div className="masonry grid grid-flow-col grid-rows-2 gap-4 mt-14">
//         <ResponsiveMasonry columnsCountBreakPoints={{ 350: 3, 750: 4, 900: 6 }}>
//           <Masonry>
//             <div className="cols-span-2">
//               <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
//                 <Racing />
//               </Link>
//             </div>
//             <div>
//               <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
//                 <Racing />
//               </Link>
//             </div>

//             <div>
//               <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
//                 <GrowAGarden />
//               </Link>
//             </div>

//             <div className=" ">
//               <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
//                 <Racing />
//               </Link>
//             </div>

//             <div className=" ">
//               <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
//                 <GadgetUniverse />
//               </Link>
//             </div>

//             <div className="">
//               <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
//                 <GrowAGarden />
//               </Link>
//             </div>

//             <div className=" ">
//               <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
//                 <Racing />
//               </Link>
//             </div>

//             <div className=" ">
//               <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
//                 <Racing />
//               </Link>
//             </div>

//             <div className=" ">
//               <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
//                 <Racing />
//               </Link>
//             </div>

//             <div className=" ">
//               <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
//                 <GrowAGarden />
//               </Link>
//             </div>

//             <div className=" ">
//               <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
//                 <Racing />
//               </Link>
//             </div>

//             <div className=" ">
//               <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
//                 <GadgetUniverse />
//               </Link>
//             </div>

//             <div>
//               <Link href={"/grow-a-garden"} title="grow-a-garden-game" className="">
//                 <EscapeRoad />
//               </Link>
//             </div>
//           </Masonry>
//         </ResponsiveMasonry>
//       </div>
//       {/* React Slick */}
//       <div className="slider-container bg-white text-black">
//         <Slider speed={500} slidesToShow={3} infinite={true} dots={true}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//           <div>
//             <h3>7</h3>
//           </div>
//           <div>
//             <h3>8</h3>
//           </div>
//           <div>
//             <h3>9</h3>
//           </div>
//         </Slider>
//       </div>
//     </>
//   );
// };

// export default Home;
