import Layout from '../components/layouts/Layout';
import {
  //   // useViewerQuery,
  usePostQuery,

} from '../lib/gql/gql.graphql'



export default function About() {

  // const { data, loading, error } = usePostQuery();


  const { data, loading, error } = usePostQuery({
    variables: {
    },
  });
  // const { viewer } = useViewerQuery().data!

  if (loading || error) {
    //   // return <p>loading...</p>;
  }

  // check for errors
  // if (error) {
  //   //   // console.log(error);


  //   //   return (
  //   //     <div>
  //   //       <h1>Error</h1>
  //   //       {/* <p>{error}</p>; */}
  //   //     </div>
  //   //   )
  // }

  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>Welcome to the about page.</h1>
      <h3>Your data :</h3>
      {data?.post.title}

    </Layout>
  )
}
