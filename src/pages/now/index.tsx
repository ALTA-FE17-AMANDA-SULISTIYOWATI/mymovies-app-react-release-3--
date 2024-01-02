import { Component } from "react"
import Card from "@/components/card"
import StarIcon from "@/core/icons/star"

class Now extends Component {
  render() {
    const cards = [
      {
        url: "/images/Topgun.png",
        title: "TOP GUN: Maverick",
        icon: <StarIcon />,
        rating: 4.6,
      },
      {
        url: "/images/spiderman.png",
        title: "Spiderman: into the spider verse",
        icon: <StarIcon />,
        rating: 4.6,
      },
      {
        url: "/images/blackpanther.png",
        title: "Black Panther: Wakanda Forever",
        icon: <StarIcon />,
        rating: 4.6,
      },
    ]

    return (
      <div>
        <div className="text-[#F9F9F9] text-xl font-bold  px-8 p-6">
          Now Playing
        </div>
        <div className="flex gap-6 items-center justify-center flex-wrap">
          {cards.map((card, index) => (
            <div className="flex">
              <Card
                key={index}
                url={card.url}
                title={card.title}
                icon={card.icon}
                rating={card.rating}
              />
            </div>
          ))}
          {/* <div className="flex">
            <Card
              url="/images/Topgun.png"
              title="TOP GUN: Maverick"
              icon={<StarIcon />}
              rating={4.6}
            />
          </div>
          <div className="flex ">
            <Card
              url="/images/spiderman.png"
              title="Spiderman: into the spider verse"
              icon={<StarIcon />}
              rating={4.6}
            />
          </div>
          <div className="flex">
            <Card
              url="/images/blackpanther.png"
              title="Black Panther: Wakanda Forever"
              icon={<StarIcon />}
              rating={4.6}
            />
          </div>
          <div className="flex">
            <Card
              url="/images/batman.png"
              title="Batman V Superman"
              icon={<StarIcon />}
              rating={4.6}
            />
          </div>
          <div className="flex">
            <Card
              url="/images/wonderwoman.jpeg"
              title="Wonder Woman"
              icon={<StarIcon />}
              rating={4.6}
            />
          </div>
          <div className="flex">
            <Card
              url="/images/aquaman.jpeg"
              title="Aquaman and the Lost Kingdom"
              icon={<StarIcon />}
              rating={4.6}
            />
          </div>
          <div className="flex">
            <Card
              url="/images/onepiece.jpeg"
              title="One Piece"
              icon={<StarIcon />}
              rating={4.6}
            />
          </div>
          <div className="flex">
            <Card
              url="/images/trolls.jpeg"
              title="Trolls Band Together"
              icon={<StarIcon />}
              rating={4.6}
            />
          </div>
          <div className="flex">
            <Card
              url="/images/elemental.jpeg"
              title="Elemental"
              icon={<StarIcon />}
              rating={4.6}
            />
          </div>
          <div className="flex">
            <Card
              url="/images/chicken.jpeg"
              title="Chicken Run: Dawn of the Nugget"
              icon={<StarIcon />}
              rating={4.6}
            />
          </div>
          <div className="flex">
            <Card
              url="/images/silent.jpeg"
              title="Silent Night"
              icon={<StarIcon />}
              rating={4.6}
            />
          </div>
          <div className="flex">
            <Card
              url="/images/godzilla.jpeg"
              title="Godzilla Minus One"
              icon={<StarIcon />}
              rating={4.6}
            />
          </div>
          <div className="flex">
            <Card
              url="/images/migration.jpeg"
              title="Migration"
              icon={<StarIcon />}
              rating={4.6}
            />
          </div>
          <div className="flex">
            <Card
              url="/images/wish.jpeg"
              title="Wish"
              icon={<StarIcon />}
              rating={4.6}
            />
          </div>
          <div className="flex">
            <Card
              url="/images/paw.jpeg"
              title="PAW Patrol : The Mighty Movie"
              icon={<StarIcon />}
              rating={4.6}
            />
          </div> */}
        </div>
      </div>
    )
  }
}

export default Now
