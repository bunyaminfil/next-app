import React from "react";
import Head from "next/head";
import App from "next/app";
import AppLayout from "../components/Layout/AppLayout";
import { DefaultSeo } from "next-seo";
import "antd/dist/antd.css";
import "../styles/layout.css";

class NextApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <React.Fragment>
        <Head>
          <link rel="shortcut icon" href="/logo-etc.png" />
        </Head>
        <DefaultSeo
          title={process.env.seoTitle}
          description={process.env.seoDescription}
          openGraph={{
            type: process.env.openGraphType,
            locale: process.env.openGraphLocale,
            url: process.env.openGraphUrl,
            site_name: process.env.openGraphSiteName,
          }}
        />
        <AppLayout routerPath={router.asPath}>
          <Component {...pageProps} />
        </AppLayout>
      </React.Fragment>
    );
  }
}

export default NextApp;
