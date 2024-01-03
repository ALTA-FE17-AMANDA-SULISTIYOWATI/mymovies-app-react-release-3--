import { LogoIcon } from "@/core/icons"
import { Component } from "react"
import { Outlet, RouterProps } from "react-router-dom"
import { MdDarkMode } from "react-icons/md"
import { withRouter } from "@/core/utils/withRouter"
import { ComponentProps } from "@/core/utils/withRouter"

interface NavbarProps extends ComponentProps, RouterProps {
  homeRef: React.RefObject<HTMLDivElement>
  nowRef: React.RefObject<HTMLDivElement>
  favRef: React.RefObject<HTMLDivElement>
  scrollToSection: (elementRef: React.RefObject<HTMLDivElement>) => void
}

interface NavbarState {
  activeMenuItem: string | null
}

class Navbar extends Component<NavbarProps, NavbarState> {
  constructor(props: NavbarProps) {
    super(props)
    this.state = {
      activeMenuItem: null,
    }
  }

  handleMenuItemClick = (
    path: string,
    url: React.RefObject<HTMLDivElement>
  ) => {
    this.props.scrollToSection(url)
    this.setState({
      activeMenuItem: path,
    })
  }

  render() {
    const { homeRef, nowRef, favRef } = this.props

    const menus = [
      {
        name: "Home",
        path: "/",
        url: homeRef,
      },
      {
        name: "Now Playing",
        path: "/now",
        url: nowRef,
      },
      {
        name: "Favorite",
        path: "/favorite",
        url: favRef,
      },
    ]

    return (
      <>
        <div className="px-20 py-8 flex items-center absolute top-0 z-50 justify-between w-full bg-transparent">
          {/* logo region */}
          <LogoIcon />
          {/* menu region */}
          <div className="flex gap-10 items-center mt-4">
            {menus.map((el, i) => (
              <div
                key={i}
                onClick={() => this.handleMenuItemClick(el.path, el.url)}
                className="cursor-pointer"
              >
                <div
                  className={`pb-4 ${
                    this.state.activeMenuItem === el.path
                      ? "border-b-greenColor border-b-4 pb-3"
                      : ""
                  } `}
                >
                  <div
                    className={`text-[16px] ${
                      this.state.activeMenuItem === el.path
                        ? "font-bold"
                        : "font-normal"
                    } px-2`}
                  >
                    {el.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* profile menu */}
          <div className="flex gap-6 items-center">
            <div className="">
              <input
                type="text"
                className="h-10 w-60 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none bg-[#ffffff] bg-opacity-50 placeholder:text-[#000] placeholder:text-opacity-50 text-[#000]"
                placeholder="Search..."
              />
            </div>
            <button className="bg-[#ffffff] bg-opacity-50 p-2 rounded-full">
              <MdDarkMode size={30} color={"#000"} />
            </button>
          </div>
        </div>
        <Outlet />
      </>
    )
  }
}

const NavbarWithRouter = withRouter(Navbar)

export default NavbarWithRouter
