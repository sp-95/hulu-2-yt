import React from 'react'
import Thumbnail from './Thumbnail'
import IMovieRating from './types/movie_ratings'

export interface IResultsProps {
  results: Array<IMovieRating>
}

const Results: React.FunctionComponent<IResultsProps> = (
  props: IResultsProps
) => {
  const { results } = props
  return (
    <div>
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  )
}

export default Results
