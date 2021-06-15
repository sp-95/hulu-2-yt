import React from 'react'
import IMovieRating from './types/movie_ratings'

export interface IThumbnailProps {
  result: IMovieRating
}

const Thumbnail: React.FunctionComponent<IThumbnailProps> = (
  props: IThumbnailProps
) => {
  return (
    <div>
      <h1>Thumbnail</h1>
    </div>
  )
}

export default Thumbnail
