import React, { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
    </Head>

    <Link href="/">Home</Link>{' '}
        |{' '}
    <Link href="/about">About
    </Link>{' '}
    <br />


    {children}

  </div>
)

export default Layout