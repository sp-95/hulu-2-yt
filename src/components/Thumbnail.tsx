import { ThumbUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
import IMovieRating from './types/movie_ratings'

export interface IThumbnailProps {
  result: IMovieRating
}

const Thumbnail: React.FunctionComponent<IThumbnailProps> = (
  props: IThumbnailProps
) => {
  const { result } = props
  const {
    backdrop_path: backdropPath,
    first_air_date: firstAirDate,
    media_type: mediaType,
    name,
    overview,
    release_date: releaseDate,
    title,
    vote_count: voteCount,
  } = result
  const BASE_URL = 'https://image.tmdb.org/t/p/original'

  return (
    <div className="p-2 group cursor-pointer transition duration-100 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        src={`${BASE_URL}${backdropPath}`}
        height={1080}
        width={1920}
      />

      <div className="p-2">
        <p className="truncate max-w-md">{overview}</p>

        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {title || name}
        </h2>

        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {mediaType && `${mediaType} •`} {releaseDate && `${releaseDate} •`}{' '}
          {firstAirDate && `${firstAirDate} •`}{' '}
          <ThumbUpIcon className="h-5 mx-2" /> {voteCount}
        </p>
      </div>
    </div>
  )
}

export default Thumbnail
