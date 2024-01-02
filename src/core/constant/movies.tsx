import React from "react"
import StarIcon from "../icons/star"

type Movie = {
  adult: boolean
  backdrop_path: React.ReactNode
  genre_ids: number[]
  id: number
  original_language: string
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

export const nowPlayingMovies: Movie[] = [
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 1,
    original_language: "en",
    original_title: "TOP GUN: Maverick",
    overview: "",
    popularity: 0,
    poster_path: "/images/Topgun.png",
    release_date: "",
    title: "TOP GUN: Maverick",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 1,
    original_language: "en",
    original_title: "TOP GUN: Maverick",
    overview: "",
    popularity: 0,
    poster_path: "/images/Topgun.png",
    release_date: "",
    title: "TOP GUN: Maverick",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
  {
    adult: false,
    backdrop_path: <StarIcon />,
    genre_ids: [0],
    id: 1,
    original_language: "en",
    original_title: "TOP GUN: Maverick",
    overview: "",
    popularity: 0,
    poster_path: "/images/Topgun.png",
    release_date: "",
    title: "TOP GUN: Maverick",
    video: false,
    vote_average: 4.6,
    vote_count: 0,
  },
]
