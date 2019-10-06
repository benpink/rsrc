/* @flow */
/* eslint-disable react/jsx-props-no-spreading */

import "isomorphic-unfetch";
import React from "react";
import getConfig from "next/config";
import Router from "next/router";
import App from "next/app";
import Head from "next/head";

import Layout from "../components/Layout";

const { publicRuntimeConfig } = getConfig();
const { GA_TRACKING_ID } = publicRuntimeConfig;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
Router.events.on("routeChangeComplete", url => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url
  });
});

export default class extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>rsrc - simply fetching</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}
