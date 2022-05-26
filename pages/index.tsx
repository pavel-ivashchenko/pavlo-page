import React, { Fragment } from 'react'
import { GetStaticPropsContext } from 'next'
import type { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import Head from 'next/head'

import Layout from '../components/layout/Layout'


export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}

const Home: NextPage = () => {
  const t = useTranslations("Core");

  return (
    <Fragment>

      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('desc')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout />

    </Fragment>
  )
}

export default Home;
