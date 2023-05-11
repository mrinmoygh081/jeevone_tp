import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />
        <link rel="stylesheet" href="/assets/css/slick.css" />
        {/* <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" /> */}
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />

        <script src="./assets/js/jquery-3.6.0.slim.min.js"></script>
        <script src="/assets/js/bootstrap.bundle.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
        {/* <script src="/assets/js/swiper-bundle.min.js"></script> */}
        <script src="/assets/js/script.js"></script>
      </body>
    </Html>
  );
}
