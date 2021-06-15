import React from 'react'
import IMovieRating from '../types/movie_ratings'
import Thumbnail from './Thumbnail'

export interface IResultsProps {
  results: Array<IMovieRating>
}

const Results: React.FunctionComponent<IResultsProps> = (
  props: IResultsProps
) => {
  const { results } = props
  return (
    <div className="px-5 my-10 md:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  )
}

export default Results
