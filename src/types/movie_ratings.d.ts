/* eslint-disable camelcase */
interface IMovieRating {
  adult: boolean
  backdrop_path: string
  first_air_date: string
  genre_ids: Array<number>
  id: number
  media_type: string
  name: string
  origin_country: Array<string>
  original_language: string
  original_name: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export default IMovieRating
