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
import Link from "next/link";
import SyntaxHighlight from "@Components/SyntaxHighlighter/SyntaxHighlight";
import HeadingThree from "@Components/Elements/Headings/HeadingThree";

const NextjsAPI: NextPageWithLayout = () => {
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
        title={SEO_OBJ.NEXTJS_API.title}
        description={SEO_OBJ.NEXTJS_API.description!}
        image={SEO_OBJ.NEXTJS_API.featuredImage}
        url={SEO_OBJ.NEXTJS_API.absoluteURL}
        publishedTime={SEO_OBJ.NEXTJS_API.publishedTime}
        lastUpdatedTime={SEO_OBJ.NEXTJS_API.lastUpdateTime}
      />
      <Box sx={{ mt: { xs: 1, sm: 1, md: 4, lg: 4 } }}>{/* Added Extra Space Under Toolbar */}</Box>
      <Grid container direction="row" sx={{ pl: { xs: 2, sm: 2, md: 0, lg: 0 }, pr: { xs: 2, sm: 2, md: 0, lg: 0 } }}>
        <Grid item md={10} lg={8}>
          <HeadingOne title={SEO_OBJ.NEXTJS_API.title} id="title" />
          <Subtitle text={SEO_OBJ.NEXTJS_API.description!} />
          <LastUpdateTags
            lastUpdatedTime={DateMonthYearForBlogPost(SEO_OBJ.NEXTJS_API.lastUpdateTime)}
            tags={SEO_OBJ.NEXTJS_API.tags!}
          />
          {/* Image For Desktop Screens */}
          <HeaderImageFullBlogPost
            image={SEO_OBJ.NEXTJS_API.featuredImage}
            alt={SEO_OBJ.NEXTJS_API.featuredImageAltText}
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
            <Link href="https://nextjs.org/docs/pages/building-your-application/routing/api-routes">
              Application Programming Interfaces (APIs){" "}
            </Link>
            play a crucial role in modern web development, enabling applications to interact with external data sources
            and services. In Next.js, a popular React framework, working with APIs is smooth and efficient, thanks to
            built-in features like <B>server-side rendering (SSR)</B> and <B>static site generation (SSG)</B>. In this
            comprehensive guide, we'll explore how to <B>integrate APIs</B> into your Next.js applications, covering
            server-side and client-side data fetching, error handling, and optimization techniques.
          </P>

          <HeadingTwo title="1. Setting Up API Routes" id="set-api-routes" />
          <P>
            Next.js allows developers to define <B>API routes</B> directly within their project structure, making it
            easy to create backend endpoints without the need for an external server. <B>API routes</B> are stored in
            the <B>pages/api</B> directory and can be accessed via HTTP requests.
          </P>
          <SyntaxHighlight>
            {`// pages/api/users.js
export default function handler(req, res) {
  const users = /* fetch users from database or external API */;
  res.status(200).json(users);
}
`}
          </SyntaxHighlight>

          <HeadingTwo title="2. Handling HTTP Requests" id="handling-http-request" />
          <P>
            Next.js API routes support various HTTP methods, including <C>GET</C>, <C>POST</C>, <C>PUT</C>,{" "}
            <C>DELETE</C>, and more. You can define different handlers for each HTTP method to handle different types of
            requests.
          </P>
          <SyntaxHighlight>
            {`// pages/api/users/[id].js
export default function handler(req, res) {
  const { id } = req.query;
  // Handle GET request for retrieving user by ID
  // Handle PUT request for updating user by ID
  // Handle DELETE request for deleting user by ID
}
`}
          </SyntaxHighlight>
          <HeadingTwo title="3. Middleware and Authentication" id="middleware-authentication" />
          <P>
            <Link href="https://www.karunakarpatel.com/Blog/nextjs_router">Next.js API routes</Link> support middleware,
            allowing you to execute code before or after processing a request. Middleware can be used for tasks such as
            authentication, request validation, error handling, and more.
          </P>
          <SyntaxHighlight>
            {`// pages/api/authenticated.js
export default function handler(req, res) {
  // Middleware for authentication
  if (!req.user) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  // API logic for authenticated users
}
`}
          </SyntaxHighlight>

          <HeadingTwo title="4. Data Fetching and Database Integration" id="data-fetching-database-integration" />
          <P>
            Next.js API routes can fetch data from external sources, interact with databases, and perform{" "}
            <B>CRUD (Create, Read, Update, Delete)</B> operations. You can use libraries like <B>axios</B>, fetch, or
            database clients to retrieve and manipulate data.
          </P>
          <SyntaxHighlight>
            {`// pages/api/posts.js
import { getAllPosts } from '../../lib/database';
export default async function handler(req, res) {
  const posts = await getAllPosts();
  res.status(200).json(posts);
}
`}
          </SyntaxHighlight>
          <HeadingTwo title="5. Fetching Data from External APIs" id="fetching-data-external-apis" />
          <P>
            Next.js allows developers to fetch data from external APIs using built-in functions like <C>`fetch()`</C> or
            third-party libraries like <C>`axios`</C>. You can perform API requests in both server-side and client-side
            code, depending on your project’s requirements.
          </P>
          <SyntaxHighlight>
            {`
// pages/posts.js
const Posts = ({ posts }) => (
  <div>
    {posts.map(post => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    ))}
  </div>
);

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
export default Posts;
`}
          </SyntaxHighlight>

          <HeadingTwo title="6. Handling Server-Side Data Fetching" id="server-side-data-fetching" />
          <P>
            In Next.js, you can fetch data on the server-side using functions like <C>`getServerSideProps()`</C> or{" "}
            <C>`getInitialProps()`</C>. This allows you to pre-render pages with dynamic data, ensuring a consistent
            user experience and improved SEO.
          </P>
          <SyntaxHighlight>
            {`
// pages/post/[id].js
const Post = ({ post }) => (
  <div>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
  </div>
);

export async function getServerSideProps({ params }) {
 const res = await fetch("https://jsonplaceholder.typicode.com/posts/{params.id}");
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}
export default Post;
`}
          </SyntaxHighlight>
          <HeadingTwo title="7. Client-Side Data Fetching" id="client-side-data-fetching" />
          <P>
            Next.js also supports client-side data fetching using functions like <C>`useSWR`</C> from the <C>`swr`</C>{" "}
            library or <C>`fetch`</C> directly in your components. This allows for dynamic data loading and updates
            without a full page reload.
          </P>
          <SyntaxHighlight>
            {`
import useSWR from 'swr';
const UserProfile = () => {
  const { data, error } = useSWR('/api/user', fetch);

  if (error) return <div>Error loading user profile</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
    </div>
  );
};

export default UserProfile;
`}
          </SyntaxHighlight>

          <HeadingTwo title="8. Optimizing API Usage" id="optimizing-api-usage" />
          <P>
            To <B>optimize API</B> usage in Next.js, consider strategies such as data caching, pagination, and rate
            limiting. Additionally, use serverless functions or API routes for handling API requests on the server-side
            to avoid exposing sensitive API keys or credentials to client-side code.
          </P>
          <HeadingTwo title="Conclusion" id="conclusion" />
          <P>
            <B>Integrating APIs</B> into your Next.js applications opens up a world of different opportunities for
            fetching and displaying dynamic data. Whether you're fetching data on the server-side, client-side, or both,
            Next.js provides powerful tools and features to streamline the process and enhance the performance of your
            applications.
          </P>

          <HeadingTwo title="FAQs (Frequently Asked Questions)" id="faq" />

          <HeadingThree title="Can I use any API with Next.js?" id="" />
          <P>
            Yes, you can use any <B>API</B> with Next.js, including RESTful APIs, GraphQL APIs, and third-party APIs.
            Next.js provides flexibility and convenience for integrating APIs into your applications.
          </P>
          <HeadingThree
            title="What is the difference between server-side and client-side data fetching in Next.js?"
            id=""
          />
          <P>
            Server-side data fetching in Next.js occurs during the <B>server-rendering</B> process, allowing you to
            pre-render pages with dynamic data. <B>Client-side data fetching</B> happens in the browser after the
            initial page load, enabling dynamic updates without a full page reload.
          </P>
          <HeadingThree title="How can I handle errors when fetching data from APIs in Next.js?" id="" />
          <P>
            You can handle errors when fetching data from APIs in Next.js by using try-catch blocks, error states, or
            conditional rendering in your components. Additionally, Next.js provides built-in error handling mechanisms
            for server-side data fetching functions like <C>`getStaticProps`</C> and <C>`getServerSideProps`</C>.
          </P>
          <HeadingThree title="Is it possible to cache API responses in Next.js?" id="" />
          <P>
            Yes, you can cache API responses in Next.js using libraries like <C>`swr`</C> or <C>`react-query`</C>, which
            provide data caching and revalidation features out of the box. Additionally, you can implement custom
            caching strategies using local storage or session storage in client-side code.
          </P>
          <HeadingThree title="Can I use GraphQL APIs with Next.js?" id="" />
          <P>
            Yes, you can use GraphQL APIs with Next.js by fetching data using GraphQL client libraries like
            <C>`apollo-client`</C> or <C>`urql`</C>. Next.js offers seamless integration with GraphQL, allowing you to
            query data from GraphQL APIs and render it in your components.
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
                  "set-api-routes",
                  "handling-http-request",
                  "middleware-authentication",
                  "data-fetching-database-integration",
                  "fetching-data-external-apis",
                  "server-side-data-fetching",
                  "client-side-data-fetching",
                  "optimizing-api-usage",
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
                  <a href="#set-api-routes" onClick={scrollIntoView} className="listItemLinkContent">
                    1. Setting Up API Routes
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#handling-http-request" onClick={scrollIntoView} className="listItemLinkContent">
                    2. Handling HTTP Requests
                  </a>
                </li>

                <li className="listItemContent ">
                  <a href="#middleware-authentication" onClick={scrollIntoView} className="listItemLinkContent">
                    3. Middleware And Authentication
                  </a>
                </li>

                <li className="listItemContent ">
                  <a
                    href="#data-fetching-database-integration"
                    onClick={scrollIntoView}
                    className="listItemLinkContent"
                  >
                    4. Data Fetching And Database Integration
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#fetching-data-external-apis" onClick={scrollIntoView} className="listItemLinkContent">
                    5. Fetching Data From External APIs
                  </a>
                </li>
                <li className="listItemContent">
                  <a href="#server-side-data-fetching" onClick={scrollIntoView} className="listItemLinkContent">
                    6. Handling Server-Side Data Fetching
                  </a>
                </li>

                <li className="listItemContent">
                  <a href="#client-side-data-fetching" onClick={scrollIntoView} className="listItemLinkContent">
                    7. Client-Side Data Fetching
                  </a>
                </li>

                <li className="listItemContent">
                  <a href="#optimizing-api-usage" onClick={scrollIntoView} className="listItemLinkContent">
                    8. Optimizing API Usage
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

export default NextjsAPI;

NextjsAPI.getLayout = function getLayout(page: ReactJSXElement) {
  return <FullPageBlogPostLayout>{page}</FullPageBlogPostLayout>;
};
