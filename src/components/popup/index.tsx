import { Component } from "react"

type Props = {
  url?: string
  title?: string
  description?: string
}

class Popup extends Component<Props> {
  render() {
    const { url, title, description } = this.props

    return (
      <div className="Card w-72 h-48 flex gap-4">
        <div className="">
          <img className="h-40 w-28 rounded-2xl" src={url} />
        </div>
        <div className="card-content">
          <div>{title}</div>
          <div className="flex">{description}</div>
        </div>
      </div>
    )
  }
}

export default Popup
