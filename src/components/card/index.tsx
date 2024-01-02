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
      <div className="Card w-56 h-64">
        <div className="w-56 h-44">
          <img className="h-40 rounded-2xl" src={url} />
        </div>
        <div className="card-content">
          <div>{title}</div>
        </div>
        <div className="flex">
          {icon}
          {rating}
        </div>
      </div>
    )
  }
}

export default Card
