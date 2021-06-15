interface IMovieRating {
  adult: boolean
  backdropPath: string
  genreIds: Array<number>
  id: number
  mediaType: string
  originalLanguage: string
  originalTitle: string
  overview: string
  popularity: number
  posterPath: string
  releaseDate: string
  title: string
  video: boolean
  voteAverage: number
  voteCount: number
}

export default IMovieRating
