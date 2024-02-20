import HeadingOne from "@Components/Elements/Headings/HeadingOne";
import { Paragraph as P } from "@Components/Elements/Paragraph/Paragraph";
import { HighlightText as B } from "@Components/SyntaxHighlighter/HighlightTexts";
import { Ccode as C } from "@Components/SyntaxHighlighter/Ccode";
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
import Link from "next/link";
import SyntaxHighlight from "@Components/SyntaxHighlighter/SyntaxHighlight";
import HeadingThree from "@Components/Elements/Headings/HeadingThree";

const JSArrayMethods: NextPageWithLayout = () => {
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
        title={SEO_OBJ.JS_ARRAY_METHODS.title}
        description={SEO_OBJ.JS_ARRAY_METHODS.description!}
        image={SEO_OBJ.JS_ARRAY_METHODS.featuredImage}
        url={SEO_OBJ.JS_ARRAY_METHODS.absoluteURL}
        publishedTime={SEO_OBJ.JS_ARRAY_METHODS.publishedTime}
        lastUpdatedTime={SEO_OBJ.JS_ARRAY_METHODS.lastUpdateTime}
      />
      <Box sx={{ mt: { xs: 1, sm: 1, md: 4, lg: 4 } }}>{/* Added Extra Space Under Toolbar */}</Box>
      <Grid container direction="row" sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}>
        <Grid item md={10} lg={8}>
          <HeadingOne title={SEO_OBJ.JS_ARRAY_METHODS.title} id="title" />
          <Subtitle text={SEO_OBJ.JS_ARRAY_METHODS.description!} />
          <LastUpdateTags
            lastUpdatedTime={DateMonthYearForBlogPost(SEO_OBJ.JS_ARRAY_METHODS.lastUpdateTime)}
            tags={SEO_OBJ.JS_ARRAY_METHODS.tags!}
          />
          {/* Image For Desktop Screens */}
          <HeaderImageFullBlogPost
            image={SEO_OBJ.JS_ARRAY_METHODS.featuredImage}
            alt={SEO_OBJ.JS_ARRAY_METHODS.featuredImageAltText}
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

          <HeadingTwo title="Introduction to Js Array Methods" id="introduction-to-js-array-methods" />
          <P>
            <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">
              <B>JavaScript arrays</B>
            </Link>{" "}
            are handy data structures that allow developers to store and manipulate collections of data efficiently.{" "}
            <B>Array methods</B> play a crucial role in JavaScript programming, enabling developers to perform various
            operations on arrays, such as adding or removing elements, iterating over array elements, and transforming
            array data. In this blog post, we'll explore some of the most essential <B>JavaScript array methods</B> and
            demonstrate how to use them effectively in your projects.
          </P>

          <HeadingTwo title="1. Array.map() Method" id="array-map" />
          <P>
            The <C>`map()`</C> method creates a new array by applying a function to each element of the original array.
            It allows developers to transform array elements without mutating the original array.
          </P>

          <SyntaxHighlight>
            {`
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
`}
          </SyntaxHighlight>

          <HeadingTwo title="2. Array.filter() Method" id="array-filter" />
          <P>
            The <C>`filter()`</C> method creates a new array containing elements that pass a specified condition. It is
            useful for selecting elements from an array based on certain criteria.
          </P>
          <SyntaxHighlight>
            {`
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
`}
          </SyntaxHighlight>

          <HeadingTwo title="3. Array.reduce() Method" id="array-reduce" />
          <P>
            The <C>`reduce()`</C> method applies a function to each element of an array to reduce it to a single value.
            It is commonly used for calculating sums, averages, or other aggregate operations on array data.
          </P>
          <SyntaxHighlight>
            {`
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15
`}
          </SyntaxHighlight>

          <HeadingTwo title="4. Array.forEach() Method" id="array-foreach" />
          <P>
            The <C>`forEach()`</C> method executes a provided function once for each array element. It is commonly used
            for performing side effects or iterating over array elements.
          </P>
          <SyntaxHighlight>
            {`
const colors = ['red', 'green', 'blue'];
colors.forEach(color => console.log(color));
// Output:
// red
// green
// blue
`}
          </SyntaxHighlight>
          <HeadingTwo title="5. Array.includes() Method" id="array-includes" />
          <P>
            The <C>`includes()`</C> method checks whether an array includes a certain value, returning true or false
            accordingly. It is useful for checking the presence of an element in an array.
          </P>
          <SyntaxHighlight>
            {`
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.includes('banana')); // Output: true
console.log(fruits.includes('grape')); // Output: false
`}
          </SyntaxHighlight>
          <HeadingTwo title="6. Array.every():" id="array-every" />
          <P>Checks if all elements in the array pass the test implemented by the provided function.</P>
          <SyntaxHighlight>
            {`const numbers = [1, 2, 3, 4, 5];
const allPositiveNumbers = numbers.every((num) => {
  return num > 0;
});
console.log(allPositiveNumbers);
`}
          </SyntaxHighlight>

          <HeadingTwo title="7. Array.some():" id="array-some" />
          <P>Checks if at least one element in the array passes the test implemented by the provided function.</P>
          <SyntaxHighlight>
            {`const numbers = [1, 2, 3, 4, 5];

const hasNegativeNumbers = numbers.some((num) => {
  return num < 0;
});

console.log(hasNegativeNumbers);
`}
          </SyntaxHighlight>

          <HeadingTwo title="8. Array.find():" id="array-find" />
          <P>Returns the value of the first element in the array that satisfies the provided testing function.</P>
          <SyntaxHighlight>
            {`const numbers = [1, 2, 3, 4, 5];
const foundNumber = numbers.find((num) => {
  return num > 3;
});
console.log(foundNumber);
`}
          </SyntaxHighlight>
          <HeadingTwo title="Conclusion" id="conclusion" />
          <P>
            <B>JavaScript array methods</B> provide powerful tools for manipulating and transforming arrays in your
            applications. By mastering these essential array methods, you can simplify your code, improve performance,
            and build more efficient and expressive JavaScript applications.{" "}
          </P>
          <HeadingTwo title="FAQs (Frequently Asked Questions)" id="faq" />

          <HeadingThree title="What is the difference between map() and forEach() methods in JavaScript?" id="" />
          <P>
            The <C>`map()`</C> method creates a new array by applying a function to each element of the original array
            and returns the result as a new array. On the other end, the <C>`forEach()`</C> method executes a provided
            function once for each array element but does not return a new array.
          </P>

          <HeadingThree title="When should I use the filter() method in JavaScript?" id="" />
          <P>
            The <C>`filter()`</C> method is useful when you need to select elements from an array based on certain
            criteria or conditions. It creates a new array containing only the elements that pass the specified
            condition, making it ideal for filtering array data.
          </P>

          <HeadingThree title="How does the reduce() method work in JavaScript?" id="" />
          <P>
            The <C>`reduce()`</C> method applies a function to each element of an array to reduce it to a single value.
            It iterates over the array, accumulating a result by applying the provided function to each element and
            maintaining an accumulator value.
          </P>
          <HeadingThree title="Can I use multiple array methods together in JavaScript?" id="" />
          <P>
            Yes, you can chain multiple array methods together in JavaScript to perform complex operations on arrays.
            For example, you can use <C>`map()`</C> followed by <C>`filter()`</C> or <C>`reduce()`</C> to transform and
            filter array data in a single expression.
          </P>
          <HeadingThree title="What is the purpose of the includes() method in JavaScript arrays?" id="" />
          <P>
            The <C>`includes()`</C> method checks whether an array includes a certain value, returning true if the value
            is found and false otherwise. It is useful for checking the presence of an element in an array without
            having to iterate over the entire array manually.
          </P>
          <HeadingThree title="How do JavaScript array methods contribute to code efficiency?" id="" />
          <P>
            <B>JavaScript array methods</B> allow developers to perform common array operations with concise and
            expressive code, reducing the need for manual iteration and improving code readability and maintainability.
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
                  "introduction-to-js-array-methods",
                  "array-map",
                  "array-filters",
                  "array-reduce",
                  "array-foreach",
                  "array-includes",
                  "array-every",
                  "array-some",
                  "array-find",
                  "conclusion",
                  "faq",
                ]}
                currentClassName="activeScrollItem"
                componentTag="ol"
                style={{ listStyle: "none" }}
              >
                <li className="listItemContent">
                  <a href="#introduction-to-js-array-methods" onClick={scrollIntoView} className="listItemLinkContent">
                    Introduction To JS Array Methods
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#array-map" onClick={scrollIntoView} className="listItemLinkContent">
                    1. Array.Map() Method
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#array-filter" onClick={scrollIntoView} className="listItemLinkContent">
                    2. Array.Filter() Method
                  </a>
                </li>
                {/* Inner Container */}
                <li className="listItemContent">
                  <a href="#array-reduce" onClick={scrollIntoView} className="listItemLinkContent">
                    3. Array.Reduce() Method
                  </a>
                </li>

                <li className="listItemContent ">
                  <a href="#array-foreach" onClick={scrollIntoView} className="listItemLinkContent">
                    4. Array.ForEach() Method
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#array-includes" onClick={scrollIntoView} className="listItemLinkContent">
                    5. Array.Includes() Method
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#array-every" onClick={scrollIntoView} className="listItemLinkContent">
                    6. Array.Every():
                  </a>
                </li>

                <li className="listItemContent">
                  <a href="#array-some" onClick={scrollIntoView} className="listItemLinkContent">
                    7. Array.Some():
                  </a>
                </li>

                <li className="listItemContent">
                  <a href="#array-find" onClick={scrollIntoView} className="listItemLinkContent">
                    8. Array.Find():
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

export default JSArrayMethods;

JSArrayMethods.getLayout = function getLayout(page: ReactJSXElement) {
  return <FullPageBlogPostLayout>{page}</FullPageBlogPostLayout>;
};
