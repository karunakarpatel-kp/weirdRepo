import seoImage from "/public/seo.jpg";
import nextjsInstallImage from "/public/nextjs_install.png";
import welcomePatelsImage from "/public/welcome-page.png";
import youtubeVideoDownloaderImage from "/public/youtube-video-downloader.png";
import youtubevideotomp3 from "/public/youtube-to-mp3.png";
import youtubevideotomp4 from "/public/youtube-to-mp4.png";
import reduceImageSizeInKB from "/public/reduce-image-size-to-kb.png";
import nextjsvsreactjsImage from "/public/nextjs-vs-reactjs.png";
import nextjsrouter from "/public/nextjs-router.png";
import installTailwindCSSNextjs from "/public/install-tailwindcss-in-nextjs.png";
import nextjimage from "/public/nextjs-image.png";
import nextjsAppRouterImage from "/public/nextjs-app-router.png";
import nextjsDynamicRouterImage from "/public/nextjs-dynamic-router.png";
import jsArrayMethodsImage from "/public/js-array-methods.png";
import nextjsLinkImage from "/public/nextjs-link.png";
import nextjsConfigImage from "/public/nextjs-config.png";
import googleAnalyticsInNextjsImage from "/public/google-analytics-nextjs.png";
import nextjsSeoImage from "/public/nextjs-seo.png";
import nextjsAPIImage from "/public/nextjs-api.png";
import nextjsFormsImage from "/public/nextjs-forms.png";

export const DateMonthYearForBlogPost = (lastUpdateTime: string) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(lastUpdateTime);
  const day = date.getDate();
  const month = months[date.getMonth()]; // Months are 0-based in JavaScript Dates
  const year = date.getFullYear();
  // console.log(`${day}/${month}/${year}`, "DATE");
  return `${day}, ${month}, ${year}`;
};

export const dynamicLastUpdatedTime = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are 0-indexed
  const day = String(currentDate.getDate()).padStart(2, "0");
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+05:30`;
  return formattedDate;
};

interface Base_Url_Props {
  HOME_PAGE_BASE_URL: string;
  BLOG_PAGE_BASE_URL: string;
}

export const BASE_URLS: Base_Url_Props = {
  HOME_PAGE_BASE_URL: process.env.HOME_PAGE_BASE_URL!,
  BLOG_PAGE_BASE_URL: `${process.env.HOME_PAGE_BASE_URL}/Blog`,
};

interface Blog_Post_URL_Props {
  NEXTJS_INSTALLATION_RELATIVE: string;
  NEXTJS_INSTALLATION_ABSOLUTE: string;

  NEXTJS_VS_REACTJS_ABSOLUTE: string;
  NEXTJS_VS_REACTJS_RELATIVE: string;

  NEXTJS_ROUTER_ABSOLUTE: string;
  NEXTJS_ROUTER_RELATIVE: string;

  NEXTJS_METATAGS_ABSOLUTE: string;
  NEXTJS_METATAGS_RELATIVE: string;

  INSTALL_TAILWINDCSS_IN_NEXTJS_ABSOLUTE: string;
  INSTALL_TAILWINDCSS_IN_NEXTJS_RELATIVE: string;

  NEXTJS_IMAGE_ABSOLUTE: string;
  NEXTJS_IMAGE_RELATIVE: string;

  NEXTJS_APP_ROUTER_ABSOLUTE: string;
  NEXTJS_APP_ROUTER_RELATIVE: string;

  NEXTJS_DYNAMIC_ROUTER_ABSOLUTE: string;
  NEXTJS_DYNAMIC_ROUTER_RELATIVE: string;

  JS_ARRAY_METHODS_ABSOLUTE: string;
  JS_ARRAY_METHODS_RELATIVE: string;

  NEXTJS_LINK_ABSOLUTE: string;
  NEXTJS_LINK_RELATIVE: string;

  NEXTJS_CONFIG_ABSOLUTE: string;
  NEXTJS_CONFIG_RELATIVE: string;

  GOOGLE_ANALYTICS_IN_NEXTJS_ABSOLUTE: string;
  GOOGLE_ANALYTICS_IN_NEXTJS_RELATIVE: string;

  NEXTJS_SEO_ABSOLUTE: string;
  NEXTJS_SEO_RELATIVE: string;

  NEXTJS_API_ABSOLUTE: string;
  NEXTJS_API_RELATIVE: string;

  NEXTJS_FORMS_ABSOLUTE: string;
  NEXTJS_FORMS_RELATIVE: string;

  YOUTUBE_VIDEO_DOWNLOAD_PAGE_ABSOLUTE: string;
  YOUTUBE_VIDEO_DOWNLOAD_PAGE_RELATIVE: string;

  YOUTUBE_VIDEO_TO_MP3_PAGE_ABSOLUTE: string;
  YOUTUBE_VIDEO_TO_MP3_PAGE_RELATIVE: string;

  YOUTUBE_VIDEO_TO_MP4_PAGE_ABSOLUTE: string;
  YOUTUBE_VIDEO_TO_MP4_PAGE_RELATIVE: string;

  REDUCE_IMAGE_SIZE_IN_KB_PAGE_ABSOLUTE: string;
  REDUCE_IMAGE_SIZE_IN_KB_PAGE_RELATIVE: string;

  JS_MAP_FUNCTIONS_PAGE_ABSOLUTE: string;
  JS_MAP_FUNCTIONS_PAGE_RELATIVE: string;

  CREATE_REDUX_TOOLKIT_SLICE_REACTJS_PAGE_ABSOLUTE: string;
  CREATE_REDUX_TOOLKIT_SLICE_REACTJS_PAGE_RELATIVE: string;

  BUILD_TODO_APP_USING_REDUX_TOOLKIT_SLICE_REACTJS_ABSOLUTE: string;
  BUILD_TODO_APP_USING_REDUX_TOOLKIT_SLICE_REACTJS_RELATIVE: string;

  MDX_IN_NEXTJS_PAGE_ABSOLUTE: string;
  MDX_IN_NEXTJS_PAGE_RELATIVE: string;

  DEPLOY_NEXTJS_PROJECT_ON_VERCE_PAGE_ABSOLUTE: string;
  DEPLOY_NEXTJS_PROJECT_ON_VERCE_PAGE_RELATIVE: string;

  HOME_PAGE_ABSOLUTE: string;
  HOME_PAGE_RELATIVE: string;

  BLOG_PAGE_RELATIVE: string;
  BLOG_PAGE_ABSOLUTE: string;

  PRIVACY_PAGE_ABSOLUTE: string;
  PRIVACY_PAGE_RELATIVE: string;

  CONTACT_PAGE_ABSOLUTE: string;
  CONTACT_PAGE_RELATIVE: string;

  DISCLAIMER_PAGE_ABSOLUTE: string;
  DISCLAIMER_PAGE_RELATIVE: string;
}

export const blogPostURLS: Blog_Post_URL_Props = {
  HOME_PAGE_ABSOLUTE: BASE_URLS.HOME_PAGE_BASE_URL,
  HOME_PAGE_RELATIVE: "/",

  BLOG_PAGE_ABSOLUTE: BASE_URLS.BLOG_PAGE_BASE_URL,
  BLOG_PAGE_RELATIVE: "/Blog",

  PRIVACY_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/privacy`,
  PRIVACY_PAGE_RELATIVE: "/privacy",

  CONTACT_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/contact`,
  CONTACT_PAGE_RELATIVE: "/contact",

  DISCLAIMER_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/disclaimer`,
  DISCLAIMER_PAGE_RELATIVE: "/disclaimer",

  NEXTJS_INSTALLATION_ABSOLUTE: `${BASE_URLS.BLOG_PAGE_BASE_URL}/nextjs_installation`,
  NEXTJS_INSTALLATION_RELATIVE: "/Blog/nextjs_installation",

  NEXTJS_VS_REACTJS_ABSOLUTE: `${BASE_URLS.BLOG_PAGE_BASE_URL}/nextjs_vs_reactjs`,
  NEXTJS_VS_REACTJS_RELATIVE: "/Blog/nextjs_vs_reactjs",

  NEXTJS_METATAGS_ABSOLUTE: `${BASE_URLS.BLOG_PAGE_BASE_URL}/nextjs_metatags`,
  NEXTJS_METATAGS_RELATIVE: "/Blog/nextjs_metatags",

  NEXTJS_ROUTER_ABSOLUTE: `${BASE_URLS.BLOG_PAGE_BASE_URL}/nextjs_router`,
  NEXTJS_ROUTER_RELATIVE: "/Blog/nextjs_router",

  INSTALL_TAILWINDCSS_IN_NEXTJS_ABSOLUTE: `${BASE_URLS.BLOG_PAGE_BASE_URL}/install_tailwindcss_in_nextjs`,
  INSTALL_TAILWINDCSS_IN_NEXTJS_RELATIVE: "/Blog/install_tailwindcss_in_nextjs",

  NEXTJS_IMAGE_ABSOLUTE: `${BASE_URLS.BLOG_PAGE_BASE_URL}/nextjs_image`,
  NEXTJS_IMAGE_RELATIVE: "/Blog/nextjs_image",

  NEXTJS_APP_ROUTER_ABSOLUTE: `${BASE_URLS.BLOG_PAGE_BASE_URL}/nextjs_app_router`,
  NEXTJS_APP_ROUTER_RELATIVE: "/Blog/nextjs_app_router",

  NEXTJS_DYNAMIC_ROUTER_ABSOLUTE: `${BASE_URLS.BLOG_PAGE_BASE_URL}/nextjs_dynamic_routing`,
  NEXTJS_DYNAMIC_ROUTER_RELATIVE: "/Blog/nextjs_dynamic_routing",

  JS_ARRAY_METHODS_ABSOLUTE: `${BASE_URLS.BLOG_PAGE_BASE_URL}/js_array_methods`,
  JS_ARRAY_METHODS_RELATIVE: "/Blog/js_array_methods",

  NEXTJS_LINK_ABSOLUTE: `${BASE_URLS.BLOG_PAGE_BASE_URL}/nextjs_link`,
  NEXTJS_LINK_RELATIVE: "/Blog/nextjs_link",

  NEXTJS_CONFIG_ABSOLUTE: `${BASE_URLS.BLOG_PAGE_BASE_URL}/nextjs_config`,
  NEXTJS_CONFIG_RELATIVE: "/Blog/nextjs_config",

  GOOGLE_ANALYTICS_IN_NEXTJS_ABSOLUTE: `${BASE_URLS.BLOG_PAGE_BASE_URL}/google_analytics_in_nextjs`,
  GOOGLE_ANALYTICS_IN_NEXTJS_RELATIVE: "/Blog/google_analytics_in_nextjs",

  NEXTJS_SEO_ABSOLUTE: `${BASE_URLS.BLOG_PAGE_BASE_URL}/nextjs_seo`,
  NEXTJS_SEO_RELATIVE: "/Blog/nextjs_seo",

  NEXTJS_API_ABSOLUTE: `${BASE_URLS.BLOG_PAGE_BASE_URL}/nextjs_api`,
  NEXTJS_API_RELATIVE: "/Blog/nextjs_api",

  NEXTJS_FORMS_ABSOLUTE: `${BASE_URLS.BLOG_PAGE_BASE_URL}/nextjs_forms`,
  NEXTJS_FORMS_RELATIVE: "/Blog/nextjs_forms",

  JS_MAP_FUNCTIONS_PAGE_ABSOLUTE: `${BASE_URLS.BLOG_PAGE_BASE_URL}/js_map_function`,
  JS_MAP_FUNCTIONS_PAGE_RELATIVE: "/Blog/js_map_function",

  CREATE_REDUX_TOOLKIT_SLICE_REACTJS_PAGE_ABSOLUTE: `${BASE_URLS.BLOG_PAGE_BASE_URL}/create_redux_toolkit_slice_reactjs`,
  CREATE_REDUX_TOOLKIT_SLICE_REACTJS_PAGE_RELATIVE: "/Blog/create_redux_toolkit_slice_reactjs",

  BUILD_TODO_APP_USING_REDUX_TOOLKIT_SLICE_REACTJS_ABSOLUTE: `${BASE_URLS.BLOG_PAGE_BASE_URL}/build_todo_app_using_redux_toolkit_slice_reactjs`,
  BUILD_TODO_APP_USING_REDUX_TOOLKIT_SLICE_REACTJS_RELATIVE: "/Blog/build_todo_app_using_redux_toolkit_slice_reactjs",

  MDX_IN_NEXTJS_PAGE_ABSOLUTE: `${BASE_URLS.BLOG_PAGE_BASE_URL}/mdx_in_nextjs`,
  MDX_IN_NEXTJS_PAGE_RELATIVE: "/Blog/mdx_in_nextjs",

  DEPLOY_NEXTJS_PROJECT_ON_VERCE_PAGE_ABSOLUTE: `${BASE_URLS.BLOG_PAGE_BASE_URL}/deploy_nextjs_project_on_vercel`,
  DEPLOY_NEXTJS_PROJECT_ON_VERCE_PAGE_RELATIVE: "/Blog/deploy_nextjs_project_on_vercel",

  YOUTUBE_VIDEO_DOWNLOAD_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/youtube-video-downloader`,
  YOUTUBE_VIDEO_DOWNLOAD_PAGE_RELATIVE: "/youtube-video-downloader",

  YOUTUBE_VIDEO_TO_MP3_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/youtube-to-mp3`,
  YOUTUBE_VIDEO_TO_MP3_PAGE_RELATIVE: "/youtube-to-mp3",

  YOUTUBE_VIDEO_TO_MP4_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/youtube-to-mp4`,
  YOUTUBE_VIDEO_TO_MP4_PAGE_RELATIVE: "/youtube-to-mp4",

  REDUCE_IMAGE_SIZE_IN_KB_PAGE_ABSOLUTE: `${BASE_URLS.HOME_PAGE_BASE_URL}/reduce-image-size-in-kb`,
  REDUCE_IMAGE_SIZE_IN_KB_PAGE_RELATIVE: "/reduce-image-size-in-kb",
};

interface blogPostsObjProps {
  id: number;
  url: string;
  title: string;
  subtitle?: string;
  description?: string;
  lastUpdateTime: string;
  publishedTime: string;
  tags: { tag: string; href: string }[];
  featuredImage: any;
  featuredImageAltText: string;
  ogImageURL: string;
}

interface SEO_OBJ_Props {
  [key: string]: {
    absoluteURL: string;
    relativeURL: string;
    title: string;
    subtitle?: string;
    description?: string;
    lastUpdateTime: string;
    publishedTime: string;
    tags?: { tag: string; href: string }[];
    featuredImage: any;
    featuredImageAltText: string;
    ogImageURL: string;
    changeFrequency?: "weekly" | "daily" | "monthly" | "yearly";
    category?: string;
  };
}

export const SEO_OBJ: SEO_OBJ_Props = {
  // HomePage
  HOME_PAGE: {
    absoluteURL: blogPostURLS.HOME_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.HOME_PAGE_RELATIVE,
    title: "Karunakar Patel: Navigating the landscape of programming knowledge",
    description:
      "Explore programming with Karunakar Patel. Find simplified explanations, hands-on tutorials, practical tips, and personal experiences about programming",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-10-20T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "daily",
    tags: [{ tag: "HomePage", href: "/" }],
  },
  // BlogPage  /Blog/
  BLOG_PAGE: {
    absoluteURL: blogPostURLS.BLOG_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.BLOG_PAGE_RELATIVE,
    title: "Karunakar Patel Blog: A hub for programming enthusiasts.",
    description:
      "Welcome to Karunakar Patels Blog! This is the perfect place for people who love programming. You'll find easy-to-understand articles and tutorials for beginners and experienced coders alike. Join our community and let's learn and grow together in the world of coding!",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-10-20T19:19:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "daily",
    tags: [{ tag: "Blog", href: "/Blog" }],
  },

  POLICY_PAGE: {
    absoluteURL: blogPostURLS.PRIVACY_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.PRIVACY_PAGE_RELATIVE,
    title: "Privacy Policy | KarunakarPatel Blog",
    description:
      "Welcome to KarunakarPatel privacy policy. In here you can find all the details about privacy policy of Karunakar Patel",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-12-09T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "daily",
    tags: [{ tag: "Privacy", href: "/privacy" }],
  },

  CONTACT_PAGE: {
    absoluteURL: blogPostURLS.CONTACT_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.CONTACT_PAGE_RELATIVE,
    title: "Contact Us | KarunakarPatel",
    description:
      "Welcome to KarunakarPatel contact page. In here you can find all the details of about KarunakarPatel contact information and a way to contact administrator of the KarunakarPatel site.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-12-09T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "daily",
    tags: [{ tag: "contact", href: "/contact" }],
  },

  DISCLAIMER_PAGE: {
    absoluteURL: blogPostURLS.DISCLAIMER_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.DISCLAIMER_PAGE_RELATIVE,
    title: "Disclaimer | KarunakarPatel",
    description:
      "Welcome to KarunakarPatel disclaimer page. In here you can find all the details of about KarunakarPatel's Disclaimer and its policies.",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    publishedTime: "2023-12-09T19:07:55+00:00",
    featuredImage: welcomePatelsImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/welcome-page.png`,
    changeFrequency: "daily",
    tags: [{ tag: "disclaimer", href: "/disclaimer" }],
  },

  // nextjs_installation
  NEXTJS_INSTALLATION: {
    absoluteURL: blogPostURLS.NEXTJS_INSTALLATION_ABSOLUTE,
    relativeURL: blogPostURLS.NEXTJS_INSTALLATION_RELATIVE,
    title: "Next.js Installation: Everything You Need to Know to Get Started",
    description:
      "Learn how to install Next.js in an easy way. This guide provides step-by-step instructions for a smooth setup. If you are looking for seamless Next.js installation,  this tutorial has got you covered. Start building efficient and powerful web applications with Next.js today!",
    publishedTime: "2023-10-20T19:07:55+00:00",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Next.js Install", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Next.js", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: nextjsInstallImage,
    featuredImageAltText: "a-person-with-computer",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/nextjs_install.png`,
  },

  NEXTJS_VS_REACTJS: {
    absoluteURL: blogPostURLS.NEXTJS_VS_REACTJS_ABSOLUTE,
    relativeURL: blogPostURLS.NEXTJS_VS_REACTJS_RELATIVE,
    title: "Next.js vs React.js: Choosing the Right Framework for Your Project",
    description:
      "In the world of web development, choosing the right framework can make all the difference in the success of your project. Next.js and React.js are two popular options for building modern web applications. In this article, we'll explore the differences between Next.js and React.js to help you make a standalone decision for your next project.",
    publishedTime: "2024-02-21T11:05:57+05:30",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Nextjs_vs_Reactjs", href: `${blogPostURLS.NEXTJS_VS_REACTJS_RELATIVE}` },
      { tag: "Next.js", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: nextjsvsreactjsImage,
    featuredImageAltText: "nextjs-vs-reactjs",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/nextjs-vs-reactjs.png`,
  },

  NEXTJS_ROUTER: {
    absoluteURL: blogPostURLS.NEXTJS_ROUTER_ABSOLUTE,
    relativeURL: blogPostURLS.NEXTJS_ROUTER_RELATIVE,
    title: "Next.js Router: A Comprehensive Guide",
    description:
      "Next.js, a popular React framework, comes with its built-in routing system known as the Next.js Router. Routing is a fundamental aspect of web development, allowing users to navigate between different pages within a web application seamlessly. In this comprehensive guide, we'll explore the Next.js Router, its features, and how to power it effectively in your Next.js projects.",
    publishedTime: "2024-02-21T11:05:57+05:30",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Nextjs_router", href: `${blogPostURLS.NEXTJS_ROUTER_RELATIVE}` },
      { tag: "Nextjs_vs_Reactjs", href: `${blogPostURLS.NEXTJS_VS_REACTJS_RELATIVE}` },
      { tag: "Next.js_installation", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: nextjsrouter,
    featuredImageAltText: "nextjs-router",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/nextjs-router.png`,
  },

  INSTALL_TAILWINDCSS_IN_NEXTJS: {
    absoluteURL: blogPostURLS.INSTALL_TAILWINDCSS_IN_NEXTJS_ABSOLUTE,
    relativeURL: blogPostURLS.INSTALL_TAILWINDCSS_IN_NEXTJS_RELATIVE,
    title: "Install Tailwindcss in Next.js: A Comprehensive Guide",
    description:
      "Learn how to install Tailwind CSS in your Next.js project to improve your web development experience. Follow our step-by-step guide and solve the potential of Tailwind CSS with Next.js.",
    publishedTime: "2024-02-21T11:05:57+05:30",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Nextjs_router", href: `${blogPostURLS.NEXTJS_ROUTER_RELATIVE}` },
      { tag: "Nextjs_vs_Reactjs", href: `${blogPostURLS.NEXTJS_VS_REACTJS_RELATIVE}` },
      { tag: "Next.js_installation", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: installTailwindCSSNextjs,
    featuredImageAltText: "install-tailwindcss-in-nextjs",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/install_tailwindcss_in_nextjs.png`,
  },

  NEXTJS_IMAGE: {
    absoluteURL: blogPostURLS.NEXTJS_IMAGE_ABSOLUTE,
    relativeURL: blogPostURLS.NEXTJS_IMAGE_RELATIVE,
    title: "Enhance Your Website with Next.js Image: A Comprehensive Guide with Code Examples",
    description:
      "Next.js Image is a powerful component provided by Next.js, a popular React framework, for optimizing images in web applications. It addresses common challenges faced by developers when dealing with images, such as performance optimization, responsive design, and accessibility.",
    publishedTime: "2024-02-21T11:05:57+05:30",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Nextjs_router", href: `${blogPostURLS.NEXTJS_ROUTER_RELATIVE}` },
      { tag: "Nextjs_vs_Reactjs", href: `${blogPostURLS.NEXTJS_VS_REACTJS_RELATIVE}` },
      { tag: "Next.js_installation", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: nextjimage,
    featuredImageAltText: "nextjs-image",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/nextjs-image.png`,
  },

  NEXTJS_APP_ROUTER: {
    absoluteURL: blogPostURLS.NEXTJS_APP_ROUTER_ABSOLUTE,
    relativeURL: blogPostURLS.NEXTJS_APP_ROUTER_RELATIVE,
    title: "Next.js App Router: Maximizing Efficiency and Performance",
    description:
      "Learn how Next.js App Router can develop your web development experience, offering unparalleled productivity and performance. Learn everything you need to know about implementing and optimizing the Next.js App Router for your projects.",
    publishedTime: "2024-02-21T11:05:57+05:30",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Nextjs_router", href: `${blogPostURLS.NEXTJS_ROUTER_RELATIVE}` },
      { tag: "Nextjs_vs_Reactjs", href: `${blogPostURLS.NEXTJS_VS_REACTJS_RELATIVE}` },
      { tag: "Next.js_installation", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: nextjsAppRouterImage,
    featuredImageAltText: "nextjs-app-router-image",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/nextjs-app-router.png`,
  },

  NEXTJS_DYNAMIC_ROUTER: {
    absoluteURL: blogPostURLS.NEXTJS_DYNAMIC_ROUTER_ABSOLUTE,
    relativeURL: blogPostURLS.NEXTJS_DYNAMIC_ROUTER_RELATIVE,
    title: "Mastering Next.js Dynamic Routing: A Complete Guide",
    description:
      "In this comprehensive article, you will learn about Next.js dynamic routing. Learn how to create dynamic routes, pass parameters, and handle dynamic content effectively using Next.js.",
    publishedTime: "2024-02-21T11:05:57+05:30",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Nextjs_router", href: `${blogPostURLS.NEXTJS_ROUTER_RELATIVE}` },
      { tag: "Nextjs_vs_Reactjs", href: `${blogPostURLS.NEXTJS_VS_REACTJS_RELATIVE}` },
      { tag: "Next.js_installation", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: nextjsDynamicRouterImage,
    featuredImageAltText: "nextjs-dynamic-router-image",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/nextjs-dynamic-router.png`,
  },

  JS_ARRAY_METHODS: {
    absoluteURL: blogPostURLS.JS_ARRAY_METHODS_ABSOLUTE,
    relativeURL: blogPostURLS.JS_ARRAY_METHODS_RELATIVE,
    title: "Exploring Essential JavaScript Array Methods: A Comprehensive Overview",
    description:
      "Discover the power of JavaScript array methods in this comprehensive guide. Learn about essential array methods like map, filter, reduce, and more, and how to use them effectively to manipulate and transform arrays in your JavaScript projects.",
    publishedTime: "2024-02-21T11:05:57+05:30",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Nextjs_router", href: `${blogPostURLS.NEXTJS_ROUTER_RELATIVE}` },
      { tag: "Nextjs_vs_Reactjs", href: `${blogPostURLS.NEXTJS_VS_REACTJS_RELATIVE}` },
      { tag: "Next.js_installation", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: jsArrayMethodsImage,
    featuredImageAltText: "js-array-methods-image",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/js-array-methods.png`,
  },

  NEXTJS_LINK: {
    absoluteURL: blogPostURLS.NEXTJS_LINK_ABSOLUTE,
    relativeURL: blogPostURLS.NEXTJS_LINK_RELATIVE,
    title: "Utilizing Next.js Link Component for Seamless Navigation",
    description:
      "Learn how to develop navigation in your Next.js applications using the Link component. This comprehensive blog post covers the usage of Next.js Link for client-side routing, prefetching, and improving user experience.",
    publishedTime: "2024-02-21T11:05:57+05:30",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Nextjs_router", href: `${blogPostURLS.NEXTJS_ROUTER_RELATIVE}` },
      { tag: "Nextjs_vs_Reactjs", href: `${blogPostURLS.NEXTJS_VS_REACTJS_RELATIVE}` },
      { tag: "Next.js_installation", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: nextjsLinkImage,
    featuredImageAltText: "nextjs-link-image",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/nextjs-link.png`,
  },

  NEXTJS_CONFIG: {
    absoluteURL: blogPostURLS.NEXTJS_CONFIG_ABSOLUTE,
    relativeURL: blogPostURLS.NEXTJS_CONFIG_RELATIVE,
    title: "Configuring Next.js: A Guide to the Next.js Configuration File",
    description:
      "Unlock the full potential of Next.js by mastering its configuration options. This comprehensive guide walks you through the Next.js configuration file, covering essential settings and advanced customization techniques.",
    publishedTime: "2024-02-21T11:05:57+05:30",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Nextjs_router", href: `${blogPostURLS.NEXTJS_ROUTER_RELATIVE}` },
      { tag: "Nextjs_vs_Reactjs", href: `${blogPostURLS.NEXTJS_VS_REACTJS_RELATIVE}` },
      { tag: "Next.js_installation", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: nextjsConfigImage,
    featuredImageAltText: "nextjs-config-image",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/nextjs-config.png`,
  },

  GOOGLE_ANALYTICS_IN_NEXTJS: {
    absoluteURL: blogPostURLS.GOOGLE_ANALYTICS_IN_NEXTJS_ABSOLUTE,
    relativeURL: blogPostURLS.GOOGLE_ANALYTICS_IN_NEXTJS_RELATIVE,
    title: "Integrating Google Analytics with Next.js: A Step-by-Step Guide",
    description:
      "Learn how to set up and integrate Google Analytics with your Next.js application to track user behavior, monitor website performance, and gain valuable insights. This informative blog post provides a step-by-step tutorial for implementing Google Analytics in Next.js.",
    publishedTime: "2024-02-21T11:05:57+05:30",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Nextjs_router", href: `${blogPostURLS.NEXTJS_ROUTER_RELATIVE}` },
      { tag: "Nextjs_vs_Reactjs", href: `${blogPostURLS.NEXTJS_VS_REACTJS_RELATIVE}` },
      { tag: "Next.js_installation", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: googleAnalyticsInNextjsImage,
    featuredImageAltText: "google-analytics-nextjs-image",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/google-analytics-nextjs.png`,
  },

  NEXTJS_SEO: {
    absoluteURL: blogPostURLS.NEXTJS_SEO_ABSOLUTE,
    relativeURL: blogPostURLS.NEXTJS_SEO_RELATIVE,
    title: "Optimizing SEO in Next.js: Best Practices and Strategies",
    description:
      "Increase the visibility of your Next.js website in search engine results by following and implementing these advanced SEO techniques. Learn how to optimize metadata, improve site structure, and use these Next.js features for better search engine rankings.",
    publishedTime: "2024-02-21T11:05:57+05:30",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Nextjs_router", href: `${blogPostURLS.NEXTJS_ROUTER_RELATIVE}` },
      { tag: "Nextjs_vs_Reactjs", href: `${blogPostURLS.NEXTJS_VS_REACTJS_RELATIVE}` },
      { tag: "Next.js_installation", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: nextjsSeoImage,
    featuredImageAltText: "nextjs-seo",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/nextjs-seo.png`,
  },

  NEXTJS_API: {
    absoluteURL: blogPostURLS.NEXTJS_API_ABSOLUTE,
    relativeURL: blogPostURLS.NEXTJS_SEO_RELATIVE,
    title: "Working with APIs in Next.js: A Comprehensive Guide",
    description:
      "Reveal the full potential of Next.js by integrating APIs into your applications. Learn how to fetch data from external APIs, handle server-side and client-side data fetching, and optimize API usage for better performance in Next.js projects.",
    publishedTime: "2024-02-21T11:05:57+05:30",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Nextjs_router", href: `${blogPostURLS.NEXTJS_ROUTER_RELATIVE}` },
      { tag: "Nextjs_vs_Reactjs", href: `${blogPostURLS.NEXTJS_VS_REACTJS_RELATIVE}` },
      { tag: "Next.js_installation", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: nextjsAPIImage,
    featuredImageAltText: "nextjs-api",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/nextjs-api.png`,
  },

  NEXTJS_FORMS: {
    absoluteURL: blogPostURLS.NEXTJS_FORMS_ABSOLUTE,
    relativeURL: blogPostURLS.NEXTJS_FORMS_RELATIVE,
    title: "Creating Dynamic Forms with Next.js: A Complete Guide",
    description:
      "Learn how to build interactive and user-friendly forms in your Next.js applications. This comprehensive guide covers form creation, validation, handling form submissions, and integrating forms with Next.js features.",
    publishedTime: "2024-02-21T11:05:57+05:30",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Nextjs_router", href: `${blogPostURLS.NEXTJS_ROUTER_RELATIVE}` },
      { tag: "Nextjs_vs_Reactjs", href: `${blogPostURLS.NEXTJS_VS_REACTJS_RELATIVE}` },
      { tag: "Next.js_installation", href: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: nextjsFormsImage,
    featuredImageAltText: "nextjs-forms",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/nextjs-forms.png`,
  },

  // Youtube Video Convert MP3
  // YOUTUBE_VIDEO_TO_MP3_PAGE: {
  //   absoluteURL: blogPostURLS.YOUTUBE_VIDEO_TO_MP3_PAGE_ABSOLUTE,
  //   relativeURL: blogPostURLS.YOUTUBE_VIDEO_TO_MP3_PAGE_RELATIVE,
  //   title: "Youtube Videos to MP3: Convert and Download For Free",
  //   description:
  //     "Download YouTube videos as MP3 for free with our most powerful YouTube videos to MP3 converter. No app or software is needed.",
  //   // publishedTime: "2024-01-05T22:22:25+05:30",
  //   publishedTime: "2024-01-05T23:01:17+05:30",
  //   lastUpdateTime: `${dynamicLastUpdatedTime()}`,
  //   tags: [
  //     { tag: "youtube-mp3", href: `${blogPostURLS.YOUTUBE_VIDEO_TO_MP3_PAGE_RELATIVE}` },
  //     { tag: "video-to-mp3", href: `${blogPostURLS.YOUTUBE_VIDEO_TO_MP3_PAGE_RELATIVE}` },
  //     { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
  //     { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
  //   ],
  //   featuredImage: youtubevideotomp3,
  //   featuredImageAltText: "youtube-video-to-mp3",
  //   ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/youtube-to-mp3.png`,
  // },

  // // Youtube Video Convert MP3
  // YOUTUBE_VIDEO_TO_MP4_PAGE: {
  //   absoluteURL: blogPostURLS.YOUTUBE_VIDEO_TO_MP4_PAGE_ABSOLUTE,
  //   relativeURL: blogPostURLS.YOUTUBE_VIDEO_TO_MP4_PAGE_RELATIVE,
  //   title: "Youtube Videos To MP4: Convert and Download For Free",
  //   description:
  //     "Download YouTube videos as MP4 for free with our most powerful YouTube videos to MP4 converter. No app or software required",
  //   publishedTime: "2024-01-06T22:04:03+05:30",
  //   lastUpdateTime: `${dynamicLastUpdatedTime()}`,
  //   tags: [
  //     { tag: "youtube-mp4", href: `${blogPostURLS.YOUTUBE_VIDEO_TO_MP4_PAGE_RELATIVE}` },
  //     { tag: "video-to-mp4", href: `${blogPostURLS.YOUTUBE_VIDEO_TO_MP4_PAGE_RELATIVE}` },
  //     { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
  //     { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
  //   ],
  //   featuredImage: youtubevideotomp4,
  //   featuredImageAltText: "youtube-video-to-mp4",
  //   ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/youtube-to-mp4.png`,
  // },

  REDUCE_IMAGE_SIZE_TO_KB_PAGE: {
    absoluteURL: blogPostURLS.REDUCE_IMAGE_SIZE_IN_KB_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.REDUCE_IMAGE_SIZE_IN_KB_PAGE_RELATIVE,
    title: "Reduce Image Size In KB: Compress Images Online For Free.",
    description:
      "Reduce any image size in kb without losing quality. Upload the image and reduce it and download in seconds",
    // publishedTime: "2024-01-06T22:04:03+05:30",
    publishedTime: "2024-01-08T23:54:44+05:30",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "compress-image-online", href: `${blogPostURLS.REDUCE_IMAGE_SIZE_IN_KB_PAGE_RELATIVE}` },
      { tag: "reduce-image-size-to-kb", href: `${blogPostURLS.REDUCE_IMAGE_SIZE_IN_KB_PAGE_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: reduceImageSizeInKB,
    featuredImageAltText: "reduce-image-size-in-kb",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/reduce-image-size-to-kb.png`,
  },

  NEXTJS_METATAGS: {
    absoluteURL: blogPostURLS.NEXTJS_METATAGS_ABSOLUTE,
    relativeURL: blogPostURLS.NEXTJS_METATAGS_RELATIVE,
    title: "A Comprehensive Guide to Next.js Metatags: Enhancing SEO for Your Website",
    description: "Learn more about the Nextjs metatags and their important role in SEO of the websites",
    // publishedTime: "2024-01-06T22:04:03+05:30",
    publishedTime: "2024-03-23T07:54:44+05:30",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Nextjs", href: `${blogPostURLS.NEXTJS_METATAGS_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: reduceImageSizeInKB,
    featuredImageAltText: "reduce-image-size-in-kb",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/reduce-image-size-to-kb.png`,
  },

  JS_MAP_FUNCTIONS: {
    absoluteURL: blogPostURLS.JS_MAP_FUNCTIONS_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.JS_MAP_FUNCTIONS_PAGE_RELATIVE,
    title: "Mastering the JavaScript Map Function: A Comprehensive Guide",
    description:
      "Unlock the full potential of the JavaScript map function with this comprehensive guide. Learn how to use map effectively in your projects, with examples and best practices included.",
    // publishedTime: "2024-01-06T22:04:03+05:30",
    publishedTime: "2024-05-03T09:25:44+05:30",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Nextjs", href: `${blogPostURLS.NEXTJS_METATAGS_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: reduceImageSizeInKB,
    featuredImageAltText: "reduce-image-size-in-kb",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/reduce-image-size-to-kb.png`,
  },

  REDUX_TOOLKIT_SLICE_REACTJS: {
    absoluteURL: blogPostURLS.CREATE_REDUX_TOOLKIT_SLICE_REACTJS_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.CREATE_REDUX_TOOLKIT_SLICE_REACTJS_PAGE_RELATIVE,
    title: "How to Create Redux Toolkit Slice in React.js: A Comprehensive Guide",
    description:
      "Learn how to efficiently create Redux Toolkit slices in your React.js applications, optimizing state management for better scalability and maintainability. Dive into detailed examples and expert tips to streamline your development process.",
    // publishedTime: "2024-01-06T22:04:03+05:30",
    publishedTime: "2024-05-03T09:25:44+05:30",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Nextjs", href: `${blogPostURLS.NEXTJS_METATAGS_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: reduceImageSizeInKB,
    featuredImageAltText: "reduce-image-size-in-kb",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/reduce-image-size-to-kb.png`,
  },

  BUILD_TODO_APP_USING_REDUX_TOOLKIT_SLICE_REACTJS: {
    absoluteURL: blogPostURLS.BUILD_TODO_APP_USING_REDUX_TOOLKIT_SLICE_REACTJS_ABSOLUTE,
    relativeURL: blogPostURLS.BUILD_TODO_APP_USING_REDUX_TOOLKIT_SLICE_REACTJS_RELATIVE,
    title: "Building a Todo App Using Redux Toolkit Slice in React.js: A Comprehensive Guide",
    description:
      "Learn how to create a powerful Todo application using Redux Toolkit Slice in React.js. Follow this step-by-step guide, complete with code examples and explanations, to master Redux integration in your React projects.",
    // publishedTime: "2024-01-06T22:04:03+05:30",
    publishedTime: "2024-05-03T09:25:44+05:30",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Nextjs", href: `${blogPostURLS.NEXTJS_METATAGS_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: reduceImageSizeInKB,
    featuredImageAltText: "reduce-image-size-in-kb",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/reduce-image-size-to-kb.png`,
  },

  MDX_IN_NEXTJS: {
    absoluteURL: blogPostURLS.MDX_IN_NEXTJS_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.MDX_IN_NEXTJS_PAGE_RELATIVE,
    title: "Mastering MDX in Next.js: A Comprehensive Guide for Developers",
    description:
      "Learn how to leverage MDX in Next.js to create dynamic and interactive content for your web applications. Dive deep into MDX syntax, integration with Next.js, and practical examples to enhance your development skills.",
    // publishedTime: "2024-01-06T22:04:03+05:30",
    publishedTime: "2024-05-03T09:25:44+05:30",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Nextjs", href: `${blogPostURLS.NEXTJS_METATAGS_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: reduceImageSizeInKB,
    featuredImageAltText: "reduce-image-size-in-kb",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/reduce-image-size-to-kb.png`,
  },

  DEPLOY_NEXTJS_PROJECT_ON_VERCEL: {
    absoluteURL: blogPostURLS.DEPLOY_NEXTJS_PROJECT_ON_VERCE_PAGE_ABSOLUTE,
    relativeURL: blogPostURLS.DEPLOY_NEXTJS_PROJECT_ON_VERCE_PAGE_RELATIVE,
    title: "Deploying a Next.js Application on Vercel: A Comprehensive Guide for Seamless Deployment",
    description:
      "Learn how to deploy your Next.js application on Vercel effortlessly. This comprehensive guide covers everything from setting up your project to optimizing performance and scaling. Get step-by-step instructions and examples for a smooth deployment process.",
    // publishedTime: "2024-01-06T22:04:03+05:30",
    publishedTime: "2024-05-03T09:25:44+05:30",
    lastUpdateTime: `${dynamicLastUpdatedTime()}`,
    tags: [
      { tag: "Nextjs", href: `${blogPostURLS.NEXTJS_METATAGS_RELATIVE}` },
      { tag: "Blog", href: `${blogPostURLS.BLOG_PAGE_RELATIVE}` },
      { tag: "Karunakar Patel", href: `${blogPostURLS.HOME_PAGE_RELATIVE}` },
    ],
    featuredImage: reduceImageSizeInKB,
    featuredImageAltText: "reduce-image-size-in-kb",
    ogImageURL: `${BASE_URLS.HOME_PAGE_BASE_URL}/reduce-image-size-to-kb.png`,
  },
};

export const blogPostsObj: blogPostsObjProps[] = [
  {
    id: 0,
    url: `${blogPostURLS.NEXTJS_INSTALLATION_RELATIVE}`,
    title: `${SEO_OBJ.NEXTJS_INSTALLATION.title}`,
    description: `${SEO_OBJ.NEXTJS_INSTALLATION.description}`,
    lastUpdateTime: `${SEO_OBJ.NEXTJS_INSTALLATION.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.NEXTJS_INSTALLATION.publishedTime}`,
    tags: SEO_OBJ.NEXTJS_INSTALLATION.tags!,
    featuredImage: SEO_OBJ.NEXTJS_INSTALLATION.featuredImage,
    featuredImageAltText: `${SEO_OBJ.NEXTJS_INSTALLATION.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.NEXTJS_INSTALLATION.ogImageURL}`,
  },
  {
    id: 1,
    url: `${blogPostURLS.NEXTJS_VS_REACTJS_RELATIVE}`,
    title: `${SEO_OBJ.NEXTJS_VS_REACTJS.title}`,
    description: `${SEO_OBJ.NEXTJS_VS_REACTJS.description}`,
    lastUpdateTime: `${SEO_OBJ.NEXTJS_VS_REACTJS.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.NEXTJS_VS_REACTJS.publishedTime}`,
    tags: SEO_OBJ.NEXTJS_VS_REACTJS.tags!,
    featuredImage: SEO_OBJ.NEXTJS_VS_REACTJS.featuredImage,
    featuredImageAltText: `${SEO_OBJ.NEXTJS_VS_REACTJS.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.NEXTJS_VS_REACTJS.ogImageURL}`,
  },
  // {
  //   id: 2,
  //   url: `${blogPostURLS.YOUTUBE_VIDEO_TO_MP3_PAGE_RELATIVE}`,
  //   title: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.title}`,
  //   description: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.description}`,
  //   lastUpdateTime: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.lastUpdateTime}`,
  //   publishedTime: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.publishedTime}`,
  //   tags: SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.tags!,
  //   featuredImage: SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.featuredImage,
  //   featuredImageAltText: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.featuredImageAltText}`,
  //   ogImageURL: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP3_PAGE.ogImageURL}`,
  // },
  // {
  //   id: 3,
  //   url: `${blogPostURLS.YOUTUBE_VIDEO_TO_MP4_PAGE_RELATIVE}`,
  //   title: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP4_PAGE.title}`,
  //   description: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP4_PAGE.description}`,
  //   lastUpdateTime: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP4_PAGE.lastUpdateTime}`,
  //   publishedTime: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP4_PAGE.publishedTime}`,
  //   tags: SEO_OBJ.YOUTUBE_VIDEO_TO_MP4_PAGE.tags!,
  //   featuredImage: SEO_OBJ.YOUTUBE_VIDEO_TO_MP4_PAGE.featuredImage,
  //   featuredImageAltText: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP4_PAGE.featuredImageAltText}`,
  //   ogImageURL: `${SEO_OBJ.YOUTUBE_VIDEO_TO_MP4_PAGE.ogImageURL}`,
  // },
  {
    id: 4,
    url: `${blogPostURLS.REDUCE_IMAGE_SIZE_IN_KB_PAGE_RELATIVE}`,
    title: `${SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.title}`,
    description: `${SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.description}`,
    lastUpdateTime: `${SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.publishedTime}`,
    tags: SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.tags!,
    featuredImage: SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.featuredImage,
    featuredImageAltText: `${SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.REDUCE_IMAGE_SIZE_TO_KB_PAGE.ogImageURL}`,
  },
  {
    id: 5,
    url: `${blogPostURLS.NEXTJS_ROUTER_RELATIVE}`,
    title: `${SEO_OBJ.NEXTJS_ROUTER.title}`,
    description: `${SEO_OBJ.NEXTJS_ROUTER.description}`,
    lastUpdateTime: `${SEO_OBJ.NEXTJS_ROUTER.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.NEXTJS_ROUTER.publishedTime}`,
    tags: SEO_OBJ.NEXTJS_ROUTER.tags!,
    featuredImage: SEO_OBJ.NEXTJS_ROUTER.featuredImage,
    featuredImageAltText: `${SEO_OBJ.NEXTJS_ROUTER.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.NEXTJS_ROUTER.ogImageURL}`,
  },
  {
    id: 6,
    url: `${blogPostURLS.INSTALL_TAILWINDCSS_IN_NEXTJS_RELATIVE}`,
    title: `${SEO_OBJ.INSTALL_TAILWINDCSS_IN_NEXTJS.title}`,
    description: `${SEO_OBJ.INSTALL_TAILWINDCSS_IN_NEXTJS.description}`,
    lastUpdateTime: `${SEO_OBJ.INSTALL_TAILWINDCSS_IN_NEXTJS.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.INSTALL_TAILWINDCSS_IN_NEXTJS.publishedTime}`,
    tags: SEO_OBJ.INSTALL_TAILWINDCSS_IN_NEXTJS.tags!,
    featuredImage: SEO_OBJ.INSTALL_TAILWINDCSS_IN_NEXTJS.featuredImage,
    featuredImageAltText: `${SEO_OBJ.INSTALL_TAILWINDCSS_IN_NEXTJS.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.INSTALL_TAILWINDCSS_IN_NEXTJS.ogImageURL}`,
  },
  {
    id: 7,
    url: `${blogPostURLS.NEXTJS_IMAGE_RELATIVE}`,
    title: `${SEO_OBJ.NEXTJS_IMAGE.title}`,
    description: `${SEO_OBJ.NEXTJS_IMAGE.description}`,
    lastUpdateTime: `${SEO_OBJ.NEXTJS_IMAGE.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.NEXTJS_IMAGE.publishedTime}`,
    tags: SEO_OBJ.NEXTJS_IMAGE.tags!,
    featuredImage: SEO_OBJ.NEXTJS_IMAGE.featuredImage,
    featuredImageAltText: `${SEO_OBJ.NEXTJS_IMAGE.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.NEXTJS_IMAGE.ogImageURL}`,
  },
  {
    id: 8,
    url: `${blogPostURLS.NEXTJS_APP_ROUTER_RELATIVE}`,
    title: `${SEO_OBJ.NEXTJS_APP_ROUTER.title}`,
    description: `${SEO_OBJ.NEXTJS_APP_ROUTER.description}`,
    lastUpdateTime: `${SEO_OBJ.NEXTJS_APP_ROUTER.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.NEXTJS_APP_ROUTER.publishedTime}`,
    tags: SEO_OBJ.NEXTJS_APP_ROUTER.tags!,
    featuredImage: SEO_OBJ.NEXTJS_APP_ROUTER.featuredImage,
    featuredImageAltText: `${SEO_OBJ.NEXTJS_APP_ROUTER.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.NEXTJS_APP_ROUTER.ogImageURL}`,
  },
  {
    id: 9,
    url: `${blogPostURLS.NEXTJS_DYNAMIC_ROUTER_RELATIVE}`,
    title: `${SEO_OBJ.NEXTJS_DYNAMIC_ROUTER.title}`,
    description: `${SEO_OBJ.NEXTJS_DYNAMIC_ROUTER.description}`,
    lastUpdateTime: `${SEO_OBJ.NEXTJS_DYNAMIC_ROUTER.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.NEXTJS_DYNAMIC_ROUTER.publishedTime}`,
    tags: SEO_OBJ.NEXTJS_DYNAMIC_ROUTER.tags!,
    featuredImage: SEO_OBJ.NEXTJS_DYNAMIC_ROUTER.featuredImage,
    featuredImageAltText: `${SEO_OBJ.NEXTJS_DYNAMIC_ROUTER.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.NEXTJS_DYNAMIC_ROUTER.ogImageURL}`,
  },
  {
    id: 10,
    url: `${blogPostURLS.JS_ARRAY_METHODS_RELATIVE}`,
    title: `${SEO_OBJ.JS_ARRAY_METHODS.title}`,
    description: `${SEO_OBJ.JS_ARRAY_METHODS.description}`,
    lastUpdateTime: `${SEO_OBJ.JS_ARRAY_METHODS.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.JS_ARRAY_METHODS.publishedTime}`,
    tags: SEO_OBJ.JS_ARRAY_METHODS.tags!,
    featuredImage: SEO_OBJ.JS_ARRAY_METHODS.featuredImage,
    featuredImageAltText: `${SEO_OBJ.JS_ARRAY_METHODS.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.JS_ARRAY_METHODS.ogImageURL}`,
  },
  {
    id: 11,
    url: `${blogPostURLS.NEXTJS_LINK_RELATIVE}`,
    title: `${SEO_OBJ.NEXTJS_LINK.title}`,
    description: `${SEO_OBJ.NEXTJS_LINK.description}`,
    lastUpdateTime: `${SEO_OBJ.NEXTJS_LINK.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.NEXTJS_LINK.publishedTime}`,
    tags: SEO_OBJ.NEXTJS_LINK.tags!,
    featuredImage: SEO_OBJ.NEXTJS_LINK.featuredImage,
    featuredImageAltText: `${SEO_OBJ.NEXTJS_LINK.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.NEXTJS_LINK.ogImageURL}`,
  },
  {
    id: 12,
    url: `${blogPostURLS.NEXTJS_CONFIG_RELATIVE}`,
    title: `${SEO_OBJ.NEXTJS_CONFIG.title}`,
    description: `${SEO_OBJ.NEXTJS_CONFIG.description}`,
    lastUpdateTime: `${SEO_OBJ.NEXTJS_CONFIG.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.NEXTJS_CONFIG.publishedTime}`,
    tags: SEO_OBJ.NEXTJS_CONFIG.tags!,
    featuredImage: SEO_OBJ.NEXTJS_CONFIG.featuredImage,
    featuredImageAltText: `${SEO_OBJ.NEXTJS_CONFIG.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.NEXTJS_CONFIG.ogImageURL}`,
  },
  {
    id: 13,
    url: `${blogPostURLS.GOOGLE_ANALYTICS_IN_NEXTJS_RELATIVE}`,
    title: `${SEO_OBJ.GOOGLE_ANALYTICS_IN_NEXTJS.title}`,
    description: `${SEO_OBJ.GOOGLE_ANALYTICS_IN_NEXTJS.description}`,
    lastUpdateTime: `${SEO_OBJ.GOOGLE_ANALYTICS_IN_NEXTJS.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.GOOGLE_ANALYTICS_IN_NEXTJS.publishedTime}`,
    tags: SEO_OBJ.GOOGLE_ANALYTICS_IN_NEXTJS.tags!,
    featuredImage: SEO_OBJ.GOOGLE_ANALYTICS_IN_NEXTJS.featuredImage,
    featuredImageAltText: `${SEO_OBJ.GOOGLE_ANALYTICS_IN_NEXTJS.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.GOOGLE_ANALYTICS_IN_NEXTJS.ogImageURL}`,
  },
  {
    id: 14,
    url: `${blogPostURLS.NEXTJS_SEO_RELATIVE}`,
    title: `${SEO_OBJ.NEXTJS_SEO.title}`,
    description: `${SEO_OBJ.NEXTJS_SEO.description}`,
    lastUpdateTime: `${SEO_OBJ.NEXTJS_SEO.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.NEXTJS_SEO.publishedTime}`,
    tags: SEO_OBJ.NEXTJS_SEO.tags!,
    featuredImage: SEO_OBJ.NEXTJS_SEO.featuredImage,
    featuredImageAltText: `${SEO_OBJ.NEXTJS_SEO.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.NEXTJS_SEO.ogImageURL}`,
  },
  {
    id: 15,
    url: `${blogPostURLS.NEXTJS_API_RELATIVE}`,
    title: `${SEO_OBJ.NEXTJS_API.title}`,
    description: `${SEO_OBJ.NEXTJS_API.description}`,
    lastUpdateTime: `${SEO_OBJ.NEXTJS_API.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.NEXTJS_API.publishedTime}`,
    tags: SEO_OBJ.NEXTJS_API.tags!,
    featuredImage: SEO_OBJ.NEXTJS_API.featuredImage,
    featuredImageAltText: `${SEO_OBJ.NEXTJS_API.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.NEXTJS_API.ogImageURL}`,
  },
  {
    id: 16,
    url: `${blogPostURLS.NEXTJS_FORMS_RELATIVE}`,
    title: `${SEO_OBJ.NEXTJS_FORMS.title}`,
    description: `${SEO_OBJ.NEXTJS_FORMS.description}`,
    lastUpdateTime: `${SEO_OBJ.NEXTJS_FORMS.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.NEXTJS_FORMS.publishedTime}`,
    tags: SEO_OBJ.NEXTJS_FORMS.tags!,
    featuredImage: SEO_OBJ.NEXTJS_FORMS.featuredImage,
    featuredImageAltText: `${SEO_OBJ.NEXTJS_FORMS.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.NEXTJS_FORMS.ogImageURL}`,
  },

  {
    id: 16,
    url: `${blogPostURLS.NEXTJS_METATAGS_RELATIVE}`,
    title: `${SEO_OBJ.NEXTJS_METATAGS.title}`,
    description: `${SEO_OBJ.NEXTJS_METATAGS.description}`,
    lastUpdateTime: `${SEO_OBJ.NEXTJS_METATAGS.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.NEXTJS_METATAGS.publishedTime}`,
    tags: SEO_OBJ.NEXTJS_METATAGS.tags!,
    featuredImage: SEO_OBJ.NEXTJS_METATAGS.featuredImage,
    featuredImageAltText: `${SEO_OBJ.NEXTJS_METATAGS.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.NEXTJS_METATAGS.ogImageURL}`,
  },
  {
    id: 17,
    url: `${blogPostURLS.JS_MAP_FUNCTIONS_PAGE_RELATIVE}`,
    title: `${SEO_OBJ.JS_MAP_FUNCTIONS.title}`,
    description: `${SEO_OBJ.JS_MAP_FUNCTIONS.description}`,
    lastUpdateTime: `${SEO_OBJ.JS_MAP_FUNCTIONS.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.JS_MAP_FUNCTIONS.publishedTime}`,
    tags: SEO_OBJ.JS_MAP_FUNCTIONS.tags!,
    featuredImage: SEO_OBJ.JS_MAP_FUNCTIONS.featuredImage,
    featuredImageAltText: `${SEO_OBJ.JS_MAP_FUNCTIONS.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.JS_MAP_FUNCTIONS.ogImageURL}`,
  },
  {
    id: 18,
    url: `${blogPostURLS.CREATE_REDUX_TOOLKIT_SLICE_REACTJS_PAGE_RELATIVE}`,
    title: `${SEO_OBJ.REDUX_TOOLKIT_SLICE_REACTJS.title}`,
    description: `${SEO_OBJ.REDUX_TOOLKIT_SLICE_REACTJS.description}`,
    lastUpdateTime: `${SEO_OBJ.REDUX_TOOLKIT_SLICE_REACTJS.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.REDUX_TOOLKIT_SLICE_REACTJS.publishedTime}`,
    tags: SEO_OBJ.REDUX_TOOLKIT_SLICE_REACTJS.tags!,
    featuredImage: SEO_OBJ.REDUX_TOOLKIT_SLICE_REACTJS.featuredImage,
    featuredImageAltText: `${SEO_OBJ.REDUX_TOOLKIT_SLICE_REACTJS.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.REDUX_TOOLKIT_SLICE_REACTJS.ogImageURL}`,
  },

  {
    id: 19,
    url: `${blogPostURLS.BUILD_TODO_APP_USING_REDUX_TOOLKIT_SLICE_REACTJS_RELATIVE}`,
    title: `${SEO_OBJ.BUILD_TODO_APP_USING_REDUX_TOOLKIT_SLICE_REACTJS.title}`,
    description: `${SEO_OBJ.BUILD_TODO_APP_USING_REDUX_TOOLKIT_SLICE_REACTJS.description}`,
    lastUpdateTime: `${SEO_OBJ.BUILD_TODO_APP_USING_REDUX_TOOLKIT_SLICE_REACTJS.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.BUILD_TODO_APP_USING_REDUX_TOOLKIT_SLICE_REACTJS.publishedTime}`,
    tags: SEO_OBJ.BUILD_TODO_APP_USING_REDUX_TOOLKIT_SLICE_REACTJS.tags!,
    featuredImage: SEO_OBJ.BUILD_TODO_APP_USING_REDUX_TOOLKIT_SLICE_REACTJS.featuredImage,
    featuredImageAltText: `${SEO_OBJ.BUILD_TODO_APP_USING_REDUX_TOOLKIT_SLICE_REACTJS.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.BUILD_TODO_APP_USING_REDUX_TOOLKIT_SLICE_REACTJS.ogImageURL}`,
  },
  {
    id: 20,
    url: `${blogPostURLS.MDX_IN_NEXTJS_PAGE_RELATIVE}`,
    title: `${SEO_OBJ.MDX_IN_NEXTJS.title}`,
    description: `${SEO_OBJ.MDX_IN_NEXTJS.description}`,
    lastUpdateTime: `${SEO_OBJ.MDX_IN_NEXTJS.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.MDX_IN_NEXTJS.publishedTime}`,
    tags: SEO_OBJ.MDX_IN_NEXTJS.tags!,
    featuredImage: SEO_OBJ.MDX_IN_NEXTJS.featuredImage,
    featuredImageAltText: `${SEO_OBJ.MDX_IN_NEXTJS.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.MDX_IN_NEXTJS.ogImageURL}`,
  },
  {
    id: 21,
    url: `${blogPostURLS.DEPLOY_NEXTJS_PROJECT_ON_VERCE_PAGE_RELATIVE}`,
    title: `${SEO_OBJ.DEPLOY_NEXTJS_PROJECT_ON_VERCEL.title}`,
    description: `${SEO_OBJ.DEPLOY_NEXTJS_PROJECT_ON_VERCEL.description}`,
    lastUpdateTime: `${SEO_OBJ.DEPLOY_NEXTJS_PROJECT_ON_VERCEL.lastUpdateTime}`,
    publishedTime: `${SEO_OBJ.DEPLOY_NEXTJS_PROJECT_ON_VERCEL.publishedTime}`,
    tags: SEO_OBJ.DEPLOY_NEXTJS_PROJECT_ON_VERCEL.tags!,
    featuredImage: SEO_OBJ.DEPLOY_NEXTJS_PROJECT_ON_VERCEL.featuredImage,
    featuredImageAltText: `${SEO_OBJ.DEPLOY_NEXTJS_PROJECT_ON_VERCEL.featuredImageAltText}`,
    ogImageURL: `${SEO_OBJ.DEPLOY_NEXTJS_PROJECT_ON_VERCEL.ogImageURL}`,
  },
];
