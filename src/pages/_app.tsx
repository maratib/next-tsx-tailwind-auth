import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apollo'
import '../styles/tailwind.css'
import '../styles/global.scss'

// import { ApolloClient, InMemoryCache } from '@apollo/client';
// const client = new ApolloClient({
//   uri: '/api/graphql',
//   cache: new InMemoryCache(),
// });

export default function App({ Component, pageProps }: AppProps) {

  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
