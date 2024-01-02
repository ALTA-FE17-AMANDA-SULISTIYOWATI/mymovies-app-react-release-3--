import React, { Component } from "react"

type Props = {
  url?: string
  title?: string
  icon?: React.ReactNode
  rating?: number
}

class Cardflex extends Component<Props> {
  render() {
    const { url, title, icon, rating } = this.props

    return (
      <div className="Card w-72 h-48 flex gap-4">
        <div className="">
          <img className="h-40 w-28 rounded-2xl" src={url} />
        </div>
        <div className="card-content">
          <div>{title}</div>
          <div className="flex">
            {icon}
            {rating}
          </div>
        </div>
      </div>
    )
  }
}

export default Cardflex
