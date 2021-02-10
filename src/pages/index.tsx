// import { useState } from 'react'
import Layout from '../components/layouts/Layout'
// import { initializeApollo } from '../lib/apollo'
import {
  useViewerQuery,
  // useUpdateNameMutation,
  // ViewerDocument,
} from '../lib/gql/gql.graphql'

const Index = () => {
  const { data, loading, error } = useViewerQuery();
  if (loading || error) { }
  // const { viewer } = useViewerQuery().data!
  /*const [newName, setNewName] = useState('')
  const [updateNameMutation] = useUpdateNameMutation()

  const onChangeName = () => {
    updateNameMutation({
      variables: {
        name: newName,
      },
      //Follow apollo suggestion to update cache
      //https://www.apollographql.com/docs/angular/features/cache-updates/#update
      update: (
        store,
        {
          data: {
            updateName: { name },
          },
        }
      ) => {
        // Read the data from our cache for this query.
        const { viewer } = store.readQuery({ query: ViewerDocument })
        const newViewer = { ...viewer }
        // Add our comment from the mutation to the end.
        newViewer.name = name
        // Write our data back to the cache.
        store.writeQuery({ query: ViewerDocument, data: { viewer: newViewer } })
      },
    })
  }*/

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Home</h1>
      <h2>You are signed in as : {data?.viewer.name}</h2>
     and you're status is '{data?.viewer.name}'
      <br />
      <br />
      <br />


      <div>
        {/* <input
          type="text"
          placeholder="your new name..."
          onChange={(e) => setNewName(e.target.value)}
        />
        <input type="button" value="change" onClick={onChangeName} /> */}
      </div>
    </Layout>
  )
}

// export async function getStaticProps() {
// const apolloClient = initializeApollo()

// await apolloClient.query({
//   query: ViewerDocument,
// })

// return {
//   props: {
//     initialApolloState: apolloClient.cache.extract(),
//   },
// }

// }

export default Index
