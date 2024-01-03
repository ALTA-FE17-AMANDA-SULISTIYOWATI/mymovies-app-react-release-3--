import { nowPlayingMovies } from "@/core/constant/movies"
import { ComponentProps, withRouter } from "@/core/utils/withRouter"
import { Component } from "react"

class Now extends Component<ComponentProps> {
  render() {
    const { router } = this.props

    const { location } = router

    const { pathname } = location

    const pathSegments = pathname.split("/")

    const id = pathSegments[pathSegments.length - 1]

    const selectedMovie = nowPlayingMovies.find(
      (movie) => movie.id === Number(id)
    )

    if (!selectedMovie) {
      return <div>Movie not found</div>
    }

    console.log(selectedMovie)

    return (
      <div className="flex flex-col gap-6 px-20 p-6 mt-32">
        <div className="text-[#F9F9F9] text-xl font-bold">Data:</div>
        <div>{selectedMovie.id}</div>
        <div>{selectedMovie.title}</div>
        <div>{selectedMovie.vote_average}</div>
      </div>
    )
  }
}

const NowWithRouter = withRouter(Now)

export default NowWithRouter
