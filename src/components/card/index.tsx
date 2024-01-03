import React, { Component } from "react"

type Props = {
  url?: string
  title?: string
  icon?: React.ReactNode
  rating?: number
}

class Card extends Component<Props> {
  render() {
    const { url, title, icon, rating } = this.props

    return (
      <div className="hover:scale-105 transition duration-300 ease-in-out w-[300px] cursor-pointer">
        <div className="">
          <img className="h-40 w-full rounded-2xl" src={url} />
        </div>
        <div className="mt-2">
          <div>{title}</div>
        </div>
        <div className="flex items-center gap-2">
          {icon}
          {rating}
        </div>
      </div>
    )
  }
}

export default Card
