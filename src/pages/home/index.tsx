import Button from "@/components/button"
import Card from "@/components/card"
import { nowPlayingMovies } from "@/core/constant/movies"
import BookmarkIcon from "@/core/icons/bookmark"
import DownloadIcon from "@/core/icons/download"
import LikeIcon from "@/core/icons/like"
import PlayIcon from "@/core/icons/play"
import ShareIcon from "@/core/icons/share"
import { Component } from "react"

class Home extends Component {
  render() {
    return (
      <>
        <div className="h-screen relative">
          {/* background */}
          <div className="bg-[url('/images/hero.png')] h-screen bg-cover masked" />
          {/* content */}
          <div className="absolute bottom-20 w-full px-20 z-50 flex justify-between">
            <div className="flex flex-col gap-6">
              <div className="bg-blackColor rounded-4xl py-2 px-6 flex justify-center items-center text-xs max-w-[70px]">
                Series
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-whiteColor text-3xl font-bold">
                  The Last Of Us Season 1
                </div>
                <div className="text-[#9CA4AB] text-[14px] font-normal">
                  9 Episodes • 2022 • Fantasy • Actions
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Button
                  variant="contained"
                  title="Continue Watching"
                  icon={<PlayIcon />}
                />
                <Button title="Add Watchlist" icon={<BookmarkIcon />} />
              </div>
            </div>
            <div className="flex items-end gap-6">
              <Button title="Download" icon={<DownloadIcon />} />
              <Button title="Share" icon={<ShareIcon />} />
              <Button title="Like" icon={<LikeIcon />} />
            </div>
          </div>
        </div>
        <div className="w-full px-20 pt-8 border-t border-t-[#252427]">
          <div className="text=[#F9F9F9] text-2xl font-bold">Now Playing</div>
          <div className="my-8 grid grid-cols-6 gap-4">
            {nowPlayingMovies.map((el, i) => (
              <Card
                key={i}
                url={el.poster_path}
                title={el.title}
                icon={el.backdrop_path}
                rating={el.vote_average}
              />
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default Home
