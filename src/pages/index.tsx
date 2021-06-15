import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import IMovieRating from '../types/movie_ratings'
import requests from '../utils/requests'

export interface IHomeProps {
  results: Array<IMovieRating>
}

export default function Home(props: IHomeProps): React.ReactElement {
  const { results } = props
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results results={results} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { genre } = context.query

  let { url } = requests.fetchTrending
  if (typeof genre === 'string') url = requests[genre].url

  let results = []
  try {
    const response = await fetch(`https://api.themoviedb.org/3${url}`)
    const data = await response.json()
    results = data.results
  } catch (error) {
    console.log(error)
  }

  return {
    props: {
      results,
    },
  }
}
