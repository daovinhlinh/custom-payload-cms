import React from 'react';
import useStyles from '../css/app';
import '../css/style.css';
import { GridProvider } from '@faceless-ui/css-grid';
import { WindowInfoProvider } from '@faceless-ui/window-info';
import breakpoints from '../css/breakpoints';
import { base } from '../css/base';
import Header, { Type as HeaderType } from '../components/layout/Header';

import App from 'next/app';

type AppProps = {
  pageProps: unknown
  Component: React.FC<{}>
} & {
  navbarMenu: HeaderType
}

const MyApp = (appProps: AppProps): React.ReactElement => {
  const classes = useStyles();
  const { Component, pageProps, navbarMenu } = appProps;

  return (
    <WindowInfoProvider breakpoints={{
      xs: `(max-width: ${breakpoints.xs}px)`,
      s: `(max-width: ${breakpoints.s}px)`,
      m: `(max-width: ${breakpoints.m}px)`,
      l: `(max-width: ${breakpoints.l}px)`,
      xl: `(max-width: ${breakpoints.xl}px)`,
      xxl: `(max-width: ${breakpoints.xxl}px)`
    }}>
      <GridProvider
        rowGap={{
          s: base(2),
          m: base(2),
          l: base(2),
          xl: base(2),
        }}
        colGap={{
          s: base(2),
          m: base(2),
          l: base(2),
          xl: base(2),
        }}
        cols={{
          s: 8,
          m: 8,
          l: 12,
          xl: 12
        }}
      >
        <div className={classes.app}>
          <Header navbarMenu={navbarMenu} />
          <Component {...pageProps} />
        </div>
      </GridProvider>
    </WindowInfoProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const [navbarMenu] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/globals/navbar-menu`).then((res) => res.json()),
  ]);

  return {
    ...appProps,
    navbarMenu
  }
}

export default MyApp;
