import { Component } from "react"
import StarIcon from "@/core/icons/star"
import Cardflex from "@/components/cardflex"

class Favorite extends Component {
  render() {
    return (
      <div>
        <div className="text-[#F9F9F9] text-xl font-bold  px-8 p-6">
          Favorite
        </div>
        <div className="flex gap-6 items-center justify-center flex-wrap">
          <div>
            <Cardflex
              url="/images/aquaman2.jpeg"
              title="Aquaman and the Lost Kingdom"
              icon={<StarIcon />}
              rating={4.6}
            />
          </div>
          <div>
            <Cardflex
              url="/images/silent2.jpeg"
              title="Silent Night"
              icon={<StarIcon />}
              rating={4.6}
            />
          </div>
          <div>
            <Cardflex
              url="/images/trolls2.jpeg"
              title="Trolls Band Together"
              icon={<StarIcon />}
              rating={4.6}
            />
          </div>
          <div>
            <Cardflex
              url="/images/godzilla2.png"
              title="Godzilla Minus One"
              icon={<StarIcon />}
              rating={4.6}
            />
          </div>
          <div>
            <Cardflex
              url="/images/migration2.png"
              title="Migration"
              icon={<StarIcon />}
              rating={4.6}
            />
          </div>
          <div>
            <Cardflex
              url="/images/wish2.png"
              title="Wish"
              icon={<StarIcon />}
              rating={4.6}
            />
          </div>
          <div>
            <Cardflex
              url="/images/elemental2.jpeg"
              title="Elemental"
              icon={<StarIcon />}
              rating={4.6}
            />
          </div>
          <div>
            <Cardflex
              url="/images/last2.jpeg"
              title="The Last Of Us Season 1"
              icon={<StarIcon />}
              rating={4.6}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Favorite
