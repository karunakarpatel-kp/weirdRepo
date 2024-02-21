import HeadingOne from "@Components/Elements/Headings/HeadingOne";
import { Paragraph as P } from "@Components/Elements/Paragraph/Paragraph";
import { Ccode as C } from "@Components/SyntaxHighlighter/Ccode";
import { HighlightText as B } from "@Components/SyntaxHighlighter/HighlightTexts";
import Subtitle from "@Components/Elements/Subtitle/Subtitle";
import FullPageBlogPostLayout from "@Components/Layout/FullPageBlogPostLayout";
import MainLayout from "@Components/Layout/MainLayout";
import HeaderSection from "@Components/SEO/Head";
import Sharing from "@Components/SocialShare/Sharing";
import HeaderImageFullBlogPost from "@Components/UI/ImageCards/HeaderImageFullBlogPost";
import LastUpdateTags from "@Components/UI/LastUpdate&Tags/LastUpdateTags";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { DateMonthYearForBlogPost, SEO_OBJ } from "Essentials";
import { NextPageWithLayout } from "pages/_app";
import React from "react";
import Scrollspy from "react-scrollspy";
import HeadingTwo from "@Components/Elements/Headings/HeadingTwo";
import SyntaxHighlight from "@Components/SyntaxHighlighter/SyntaxHighlight";
import HeadingThree from "@Components/Elements/Headings/HeadingThree";

const NextjsForms: NextPageWithLayout = () => {
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
        title={SEO_OBJ.NEXTJS_FORMS.title}
        description={SEO_OBJ.NEXTJS_FORMS.description!}
        image={SEO_OBJ.NEXTJS_FORMS.featuredImage}
        url={SEO_OBJ.NEXTJS_FORMS.absoluteURL}
        publishedTime={SEO_OBJ.NEXTJS_FORMS.publishedTime}
        lastUpdatedTime={SEO_OBJ.NEXTJS_FORMS.lastUpdateTime}
      />
      <Box sx={{ mt: { xs: 1, sm: 1, md: 4, lg: 4 } }}>{/* Added Extra Space Under Toolbar */}</Box>
      <Grid container direction="row" sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}>
        <Grid item md={10} lg={8}>
          <HeadingOne title={SEO_OBJ.NEXTJS_FORMS.title} id="title" />
          <Subtitle text={SEO_OBJ.NEXTJS_FORMS.description!} />
          <LastUpdateTags
            lastUpdatedTime={DateMonthYearForBlogPost(SEO_OBJ.NEXTJS_FORMS.lastUpdateTime)}
            tags={SEO_OBJ.NEXTJS_FORMS.tags!}
          />
          {/* Image For Desktop Screens */}
          <HeaderImageFullBlogPost
            image={SEO_OBJ.NEXTJS_FORMS.featuredImage}
            alt={SEO_OBJ.NEXTJS_FORMS.featuredImageAltText}
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
          <HeadingTwo title="Introduction" id="introduction" />
          <P>
            <B>Forms</B> are essential elements of web applications, allowing users to input data and interact with the
            website. In Next.js, building forms is straightforward, thanks to its integration with React and its
            powerful features for state management and data handling. In this article, we'll explore{" "}
            <B>how to create forms in Next.js</B>, covering everything from form creation to submission handling and
            beyond.
          </P>
          <HeadingTwo title="1. Creating Forms in Next.js" id="creating-forms-nextjs" />

          <P>
            To create a form in Next.js, you can use standard HTML form elements like <C>`&lt;form&gt;`</C>,{" "}
            <C>`&lt;input&gt;`</C>, <C>`&lt;textarea&gt;`</C>, and <C>`&lt;button&gt;`</C>. Next.js provides a familiar
            environment for building forms using React components, enabling you to manage form state and user input
            efficiently.
          </P>
          <SyntaxHighlight>
            {`
import { useState } from 'react';
const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
`}
          </SyntaxHighlight>
          <HeadingTwo title="2. Form Validation" id="form-validation" />
          <P>
            <B>Form validation</B> is essential for ensuring that users provide correct and valid data. In Next.js, you
            can perform form validation by adding validation logic to the form's <C>`handleSubmit`</C> function,
            checking for errors, and displaying error messages to the user.
          </P>
          <SyntaxHighlight>
            {`
const handleSubmit = (e) => {
  e.preventDefault();
  // Validate form fields
  if (!formData.name || !formData.email || !formData.message) {
    // Display error message
    return;
  }
  // Handle form submission
};
`}
          </SyntaxHighlight>
          <HeadingTwo title="3. Handling Form Submissions" id="handle-form-submission" />

          <P>
            Next.js provides flexibility in handling form submissions. You can handle <B>form submissions</B> directly
            within the same <B>Next.js</B> page where the form is rendered or submit the form data to an external API
            endpoint for processing.
          </P>
          <SyntaxHighlight>
            {`
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // Handle response
  } catch (error) {
    // Handle error
  }
};
`}
          </SyntaxHighlight>

          <HeadingTwo title="4. Integrating Forms with Next.js Features" id="integrate-form-nextjs" />
          <P>
            Next.js offers features like <B>server-side rendering (SSR)</B> and <B>static site generation (SSG)</B>,
            which can be used when working with forms. You can use Next.js data fetching methods like{" "}
            <C>`getServerSideProps`</C> or
            <C>`getStaticProps`</C> to prepopulate form fields with data fetched from an external source.
          </P>
          <HeadingTwo title="Conclusion" id="conclusion" />
          <P>
            <B>Creating forms in Next.js</B> is an straight process thanks to its integration with React and its
            powerful features for state management and data handling. By following the guidelines outlined in this
            article, you can build interactive and user-friendly forms that enhance the user experience of your Next.js
            applications.
          </P>
          <HeadingTwo title="FAQs (Frequently Asked Questions)" id="faq" />

          <HeadingThree title="Can I use form libraries like Formik or React Hook Form with Next.js?" id="" />
          <P>
            Yes, you can use form libraries like <B>Formik</B> or React Hook Form with Next.js to simplify form
            creation, validation, and handling. These libraries integrate seamlessly with React and can enhance the
            development process for building <B>forms</B> in Next.js applications.
          </P>
          <HeadingThree title="How can I handle file uploads in Next.js forms?" id="" />
          <P>
            To handle file uploads in <B>Next.js forms</B>, you can use standard HTML{" "}
            <C>`&lt;input type="file" &gt;`</C> elements and handle file uploads using serverless API routes. Next.js
            API routes allow you to receive file uploads and process them as needed.
          </P>
          <HeadingThree title="Is client-side form validation sufficient in Next.js applications?" id="" />
          <P>
            While client-side <B>form</B> validation can improve the user experience by providing immediate feedback to
            users, it's essential to perform server-side validation as well to ensure the integrity and security of the
            data submitted through the form. Server-side validation prevents malicious or invalid data from being
            processed by the server.
          </P>

          <HeadingThree title="What are some common drawbacks to avoid when building forms in Next.js?" id="" />
          <P>
            Common dangers when building forms in Next.js include neglecting form accessibility, failing to handle form
            submission errors gracefully, overlooking <B>server-side validation</B>, and not optimizing form performance
            for mobile devices.
          </P>
          <HeadingThree title="How can I improve form performance in Next.js applications?" id="" />
          <P>
            To improve form performance in <B>Next.js applications</B>, consider optimizing form rendering, reducing
            unnecessary re-renders, minimizing the use of heavy dependencies, and implementing client-side caching
            mechanisms for <B>form data</B>.
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
                  "introduction",
                  "creating-forms-nextjs",
                  "form-validation",
                  "handle-form-submission",
                  "integrate-form-nextjs",
                  "conclusion",
                  "faq",
                ]}
                currentClassName="activeScrollItem"
                componentTag="ol"
                style={{ listStyle: "none" }}
              >
                <li className="listItemContent">
                  <a href="#introduction" onClick={scrollIntoView} className="listItemLinkContent">
                    Introduction
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#creating-forms-nextjs" onClick={scrollIntoView} className="listItemLinkContent">
                    1. Creating Forms In Next.Js
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#form-validation" onClick={scrollIntoView} className="listItemLinkContent">
                    2. Form Validation
                  </a>
                </li>
                {/* Inner Container */}
                <li className="listItemContent ">
                  <a href="#handle-form-submission" onClick={scrollIntoView} className="listItemLinkContent">
                    3. Handling Form Submissions
                  </a>
                </li>

                <li className="listItemContent ">
                  <a href="#integrate-form-nextjs" onClick={scrollIntoView} className="listItemLinkContent">
                    4. Integrating Forms With Next.Js Features
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#conclusion" onClick={scrollIntoView} className="listItemLinkContent">
                    Conclusion
                  </a>
                </li>

                <li className="listItemContent">
                  <a href="#faq" onClick={scrollIntoView} className="listItemLinkContent">
                    Frequently Asked Questions
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

export default NextjsForms;

NextjsForms.getLayout = function getLayout(page: ReactJSXElement) {
  return <FullPageBlogPostLayout>{page}</FullPageBlogPostLayout>;
};
