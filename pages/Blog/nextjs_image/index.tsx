import HeadingOne from "@Components/Elements/Headings/HeadingOne";
import HeadingThree from "@Components/Elements/Headings/HeadingThree";
import HeadingTwo from "@Components/Elements/Headings/HeadingTwo";
import { Paragraph as P } from "@Components/Elements/Paragraph/Paragraph";
import Subtitle from "@Components/Elements/Subtitle/Subtitle";
import { HighlightText as B } from "@Components/SyntaxHighlighter/HighlightTexts";
import { Ccode as C } from "@Components/SyntaxHighlighter/Ccode";
import FullPageBlogPostLayout from "@Components/Layout/FullPageBlogPostLayout";
import MainLayout from "@Components/Layout/MainLayout";
import HeaderSection from "@Components/SEO/Head";
import Sharing from "@Components/SocialShare/Sharing";
import SyntaxHighlight from "@Components/SyntaxHighlighter/SyntaxHighlight";
import HeaderImageFullBlogPost from "@Components/UI/ImageCards/HeaderImageFullBlogPost";
import LastUpdateTags from "@Components/UI/LastUpdate&Tags/LastUpdateTags";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { DateMonthYearForBlogPost, SEO_OBJ } from "Essentials";
import Link from "next/link";
import { NextPageWithLayout } from "pages/_app";
import React from "react";
import Scrollspy from "react-scrollspy";

const NextjsImage: NextPageWithLayout = () => {
  const scrollIntoView = () => {
    window.scrollTo({
      top: 0,
      left: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <>
      <HeaderSection
        title={SEO_OBJ.NEXTJS_IMAGE.title}
        description={SEO_OBJ.NEXTJS_IMAGE.description!}
        image={SEO_OBJ.NEXTJS_IMAGE.featuredImage}
        url={SEO_OBJ.NEXTJS_IMAGE.absoluteURL}
        publishedTime={SEO_OBJ.NEXTJS_IMAGE.publishedTime}
        lastUpdatedTime={SEO_OBJ.NEXTJS_IMAGE.lastUpdateTime}
      />
      <Box sx={{ mt: { xs: 1, sm: 1, md: 4, lg: 4 } }}>{/* Added Extra Space Under Toolbar */}</Box>
      <Grid container direction="row" sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}>
        <Grid item md={10} lg={8}>
          <HeadingOne title={SEO_OBJ.NEXTJS_IMAGE.title} id="title" />
          <Subtitle text={SEO_OBJ.NEXTJS_IMAGE.description!} />
          <LastUpdateTags
            lastUpdatedTime={DateMonthYearForBlogPost(SEO_OBJ.NEXTJS_IMAGE.lastUpdateTime)}
            tags={SEO_OBJ.NEXTJS_IMAGE.tags!}
          />
          {/* Image For Desktop Screens */}
          <HeaderImageFullBlogPost
            image={SEO_OBJ.NEXTJS_IMAGE.featuredImage}
            alt={SEO_OBJ.NEXTJS_IMAGE.featuredImageAltText}
          />
        </Grid>
        <Grid item md={2} lg={4}>
          {/* Empty Space */}
        </Grid>
      </Grid>

      <Divider sx={{ mt: 4, mb: 4 }} />

      <Grid
        container
        direction="row"
        spacing={3}
        sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}
      >
        <Grid item md={8} lg={8}>
          {/* Content Goes Here...! */}
          <HeadingTwo title="Introduction to Next.js Image" id="introduction-to-nextjs-image" />
          <P>
            <Link href="https://nextjs.org/docs/app/building-your-application/optimizing/images">
              <B>Next.js Image</B>
            </Link>{" "}
            is a powerful component provided by <B>Next.js</B>, a popular React framework, for optimizing images in web
            applications. It addresses common challenges faced by developers when dealing with images, such as
            performance optimization, responsive design, and accessibility.
          </P>
          <HeadingTwo title="Understanding Next.js Image Component" id="understanding-nextjs-image" />
          <HeadingTwo title="What is Next.js Image Component?" id="what-is-nextjs-image" />
          <P>
            <Link href="https://nextjs.org/docs/app/building-your-application/optimizing/images">
              <B>Next.js Image</B>
            </Link>{" "}
            Component is a React component specifically designed for handling images in Next.js applications. It
            provides a seamless way to optimize images for various devices and screen sizes while ensuring fast loading
            times and better user experience.
          </P>

          <HeadingTwo title="Benefits of Next.js Image Component" id="benefits-of-nextjs-image" />
          <P>
            <Link href="https://nextjs.org/docs/app/building-your-application/optimizing/images">
              <B>Next.js Image</B>
            </Link>{" "}
            Component offers several benefits, including automatic <B>image optimization</B>, responsive image loading,
            lazy loading, and built-in support for web accessibility standards. It simplifies the process of managing
            images in web projects and helps improve overall website performance.
          </P>
          <HeadingTwo title="How to Use Next.js Image Component" id="how-to-use-nextjs-image" />
          <HeadingThree title="Installation" id="installation" />
          <P>
            To use <B>Next.js Image Component</B>, you need to have Next.js installed in your project. You can then
            import the Image component from the <C>`next/image`</C> module and start using it in your React components.
          </P>
          <HeadingThree title="Basic Usage" id="basic-usage" />
          <P>
            Using Next.js Image Component is straightforward. You provide the <C>`src`</C> and <C>`alt`</C> attributes
            to specify the image source and alternative text for accessibility. Additionally, you can set optional
            attributes like
            <C>`width`</C>, <C>`height`</C>, and <C>`layout`</C> to control the image's display behavior.
          </P>
          <SyntaxHighlight>
            {`import Image from 'next/image'
 
              export default function Page() {
                return (
                  <Image
                    src="/profile.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                  />
                )
              }
              `}
          </SyntaxHighlight>
          <HeadingThree title="Advanced Usage" id="advanced-usage" />
          <P>
            <B>Next.js Image</B> Component offers advanced features like automatic optimization, responsive loading, and
            custom placeholders. You can use these features to further enhance your application's performance and user
            experience.
          </P>

          <HeadingTwo title="Optimizing Images with Next.js Image" id="optimizing-nextjs-image" />
          <HeadingThree title="Automatic Image Optimization" id="automatic-image-optimization" />

          <P>
            <Link href="https://www.karunakarpatel.com/Blog/nextjs_installation">Next.js</Link> automatically optimizes
            images by generating multiple sizes and formats based on the device's screen size and resolution. This helps
            reduce the file size of images without compromising image quality, which eventually results in faster
            loading times and lower bandwidth usage during page load.
          </P>
          <HeadingThree title="Responsive Image Optimization" id="responsive-image-optimization" />
          <P>
            <B>Next.js Image</B> Component supports responsive image loading out of the box. It serves different image
            sizes based on the viewport size, ensuring that users receive the most suitable image for their device with
            their respective image size. This approach improves page <B>loading speed</B> and reduces unnecessary data
            transfer.
          </P>

          <HeadingTwo title="Best Practices for Next.js Image Component" id="best-practices-nextjs-image" />
          <HeadingThree title="Choosing the Right Image Format" id="choosing-right-image" />

          <P>
            Choosing the right image format is crucial for optimizing performance and visual quality. Next.js Image
            Component supports various formats like <B>JPEG</B>, <B>PNG</B>, and <B>WebP</B>.{" "}
          </P>

          <HeadingThree title="Lazy Loading and Placeholder" id="lazy-loading" />
          <P>
            Implement lazy loading and placeholders to enhance the perceived performance of your web pages.{" "}
            <Link href="https://nextjs.org/docs/app/building-your-application/optimizing/images">
              <B>Next.js Image</B>
            </Link>{" "}
            Component offers built-in support for lazy loading, allowing images to load progressively as users scroll
            down the page. You can also customize the placeholder to provide a smooth loading experience.
          </P>
          <SyntaxHighlight>
            {`import Image from 'next/image';
function LazyLoadedImage() {
  return (
    <div>
      <h1>Lazy Loaded Image</h1>
      <p>This image will be lazily loaded as you scroll down the page.</p>
      <Image
        src="/path/to/image.jpg"
        alt="Description of the image"
        width={500}
        height={300}
        loading="lazy" // Set loading attribute to "lazy" for lazy loading
      />
    </div>
  );
}
export default LazyLoadedImage;
`}
          </SyntaxHighlight>

          <HeadingThree title="Accessibility Considerations" id="accessibility-consideration" />

          <P>
            Ensure that your images are accessible to all users, including those with disabilities. Provide descriptive
            alternative text <B>(`alt` attribute)</B> for each image and use meaningful captions or labels where
            necessary. Next.js Image Component makes it easy to incorporate accessibility best practices into your
            application.
          </P>

          <HeadingTwo title="Comparing Next.js Image with Traditional Image Loading" id="comparing-nextjs-image" />
          <P>
            <B>Next.js Image</B> Component offers several advantages over traditional methods of loading images in web
            applications. It simplifies the image optimization process, improves performance, and provides better
            support for responsive design and accessibility standards.
          </P>

          <HeadingTwo title="Case Studies: Real-world Applications of Next.js Image" id="real-world" />
          <P>
            Explore real-world examples of websites and applications that have successfully implemented Next.js Image
            Component. Learn how developers have used its features to create fast, visually appealing, and accessible
            user experiences in real-world projects.
          </P>
          <HeadingThree title="Conclusion" id="conclusion" />

          <P>
            Next.js Image Component is a valuable tool for developers looking to optimize images in their web
            applications. By using its features and best practices, you can improve website performance, enhance user
            experience, and ensure accessibility for all users.
          </P>
          <HeadingTwo title="FAQs (Frequently Asked Questions)" id="faq" />

          <HeadingThree title="Is Next.js Image Component suitable for all types of projects?" id="" />
          <P>
            Yes,{" "}
            <Link href="https://nextjs.org/docs/app/building-your-application/optimizing/images">
              <B>Next.js Image</B>
            </Link>{" "}
            Component can be used in a wide range of web projects, from simple blogs to complex web applications.
          </P>
          <HeadingThree
            title="Does the Next.js Image Component require additional configuration for optimization?"
            id=""
          />
          <P>
            No, the <B>Next.js Image</B> Component automatically optimizes images based on best practices, requiring
            minimum configuration from developers.
          </P>

          <HeadingThree title="Can I use Next.js Image Component with other frontend frameworks?" id="" />
          <P>
            While the{" "}
            <Link href="https://nextjs.org/docs/app/building-your-application/optimizing/images">
              <B>Next.js Image</B>
            </Link>{" "}
            Component is specifically designed for Next.js applications, it can be integrated with other frontend
            frameworks with some modifications.
          </P>
          <HeadingThree title="How does the Next.js Image Component handle lazy loading?" id="" />
          <P>
            <B>Next.js Image</B> Component uses a technique called "lazy loading" to defer the loading of images until
            they are needed, improving page load times and saving bandwidth.
          </P>
          <HeadingThree title="Is Next.js Image Component free to use?" id="" />
          <P>
            Yes,{" "}
            <Link href="https://nextjs.org/docs/app/building-your-application/optimizing/images">
              <B>Next.js Image</B>
            </Link>{" "}
            Component is open source and free to use in both commercial and non-commercial projects.
          </P>
        </Grid>
        <Grid item md={4} lg={4} sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}>
          <Box position="sticky" top={70}>
            <Box mb={1} pl={2}>
              <Typography variant="body2" fontSize="large">
                CONTENTS
              </Typography>
            </Box>
            <Box pl={2}>
              <Scrollspy
                items={[
                  "introduction-to-nextjs-image",
                  "understanding-nextjs-image",
                  "what-is-nextjs-image",
                  "benefits-of-nextjs-image",
                  "how-to-use-nextjs-image",
                  "installation",
                  "basic-usage",
                  "advanced-usage",
                  "optimizing-nextjs-image",
                  "automatic-image-optimization",
                  "responsive-image-optimization",
                  "best-practices-nextjs-image",
                  "choosing-right-image",
                  "lazy-loading",
                  "accessibility-consideration",
                  "comparing-nextjs-image",
                  "real-world",
                  "faq",
                ]}
                currentClassName="activeScrollItem"
                componentTag="ol"
                style={{ listStyle: "none" }}
              >
                <li className="listItemContent">
                  <a href="#introduction-to-nextjs-image" onClick={scrollIntoView} className="listItemLinkContent">
                    Introduction To Next.Js Image
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#understanding-nextjs-image" onClick={scrollIntoView} className="listItemLinkContent">
                    Understanding Next.Js Image Component
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#what-is-nextjs-image" onClick={scrollIntoView} className="listItemLinkContent">
                    What Is Next.Js Image Component?
                  </a>
                </li>

                <li className="listItemContent ">
                  <a href="#benefits-of-nextjs-image" onClick={scrollIntoView} className="listItemLinkContent">
                    Benefits Of Next.Js Image Component
                  </a>
                </li>

                <li className="listItemContent ">
                  <a href="#how-to-use-nextjs-image" onClick={scrollIntoView} className="listItemLinkContent">
                    How To Use Next.Js Image Component?
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a href="#installation" onClick={scrollIntoView} className="listItemLinkContent">
                    Installation
                  </a>
                </li>
                <li className="listItemContent inside_ele">
                  <a href="#basic-usage" onClick={scrollIntoView} className="listItemLinkContent">
                    Basic Usage
                  </a>
                </li>

                <li className="listItemContent inside_ele">
                  <a href="#advanced-usage" onClick={scrollIntoView} className="listItemLinkContent">
                    Advanced Usage
                  </a>
                </li>

                <li className="listItemContent ">
                  <a href="#optimizing-nextjs-image" onClick={scrollIntoView} className="listItemLinkContent">
                    Optimizing Images With Next.Js Image
                  </a>
                </li>

                <li className="listItemContent inside_ele ">
                  <a href="#automatic-image-optimization" onClick={scrollIntoView} className="listItemLinkContent">
                    Automatic Image Optimization
                  </a>
                </li>

                <li className="listItemContent inside_ele ">
                  <a href="#responsive-image-optimization" onClick={scrollIntoView} className="listItemLinkContent">
                    Responsive Image Optimization
                  </a>
                </li>

                <li className="listItemContent ">
                  <a href="#best-practices-nextjs-image" onClick={scrollIntoView} className="listItemLinkContent">
                    Best Practices For Next.Js Image Component
                  </a>
                </li>

                <li className="listItemContent inside_ele">
                  <a href="#choosing-right-image" onClick={scrollIntoView} className="listItemLinkContent">
                    Choosing The Right Image Format
                  </a>
                </li>

                <li className="listItemContent inside_ele">
                  <a href="#lazy-loading" onClick={scrollIntoView} className="listItemLinkContent">
                    Lazy Loading And Placeholder
                  </a>
                </li>

                <li className="listItemContent inside_ele">
                  <a href="#accessibility-consideration" onClick={scrollIntoView} className="listItemLinkContent">
                    Accessibility Considerations
                  </a>
                </li>

                <li className="listItemContent inside_ele">
                  <a href="#comparing-nextjs-image" onClick={scrollIntoView} className="listItemLinkContent">
                    Comparing Next.Js Image With Traditional Image Loading
                  </a>
                </li>

                <li className="listItemContent inside_ele">
                  <a href="#real-world" onClick={scrollIntoView} className="listItemLinkContent">
                    Case Studies: Real-World Applications Of Next.Js Image
                  </a>
                </li>

                <li className="listItemContent ">
                  <a href="#conclusion" onClick={scrollIntoView} className="listItemLinkContent">
                    Conclusion
                  </a>
                </li>

                <li className="listItemContent">
                  <a href="#faq" onClick={scrollIntoView} className="listItemLinkContent">
                    Frequently Asked Questions
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#discussions" onClick={scrollIntoView} className="listItemLinkContent">
                    Discussions
                  </a>
                </li>
              </Scrollspy>

              {/* Social Sharing Icons Are below */}
              <Box>
                <Sharing />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default NextjsImage;

NextjsImage.getLayout = function getLayout(page: ReactJSXElement) {
  return <FullPageBlogPostLayout>{page}</FullPageBlogPostLayout>;
};
