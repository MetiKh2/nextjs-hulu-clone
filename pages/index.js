import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/header/Header";
import Nav from '../components/nav/Nav';
import Results from '../components/result/Results';
import requests from '../utils/requests';

export default function Home({results}) {
  console.log(results);
  return (
    <div className={''}>
        <Head>
          <title>Meti-Hulu</title>
        </Head>
      <Header/>
      <Nav/>
      <Results results={results.results}/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre=context.query.genre;
  const results=await fetch(`https://api.themoviedb.org/3${requests[genre]?.url||requests.fetchTrending.url}`)
  .then(res=>{
     return res.json()
  }).catch(err=>{
    console.log(err);
  })
  return {
    props:{
      results
    }
  }
}
