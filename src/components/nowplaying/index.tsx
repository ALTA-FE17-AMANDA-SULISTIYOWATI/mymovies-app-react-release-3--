import { Component } from "react"
import axios from "axios"

import Card from "../card"

interface Movie {
  id: number
  title: string
  poster_path: string
}

interface NowPlayingProps {}

interface NowPlayingState {
  movies: Movie[]
  error: string | null
}

class NowPlaying extends Component<NowPlayingProps, NowPlayingState> {
  constructor(props: NowPlayingProps) {
    super(props)

    this.state = {
      movies: [],
      error: null,
    }
  }

  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=2e26bc7dab5ad19572ab4206345714fc"
      )
      .then((response) => {
        this.setState({ movies: response.data.results })
      })
      .catch((error) => {
        this.setState({ error: "Error fetching data" })
        console.error("Error fetching data:", error)
      })
  }

  render() {
    const { movies, error } = this.state

    return (
      <div>
        <div>
          {error && <p>{error}</p>}
          <div className="my-8 grid grid-cols-5 gap-4">
            {movies.map((movie) => (
              <Card
                key={movie.id}
                url={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                title={movie.title}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default NowPlaying
