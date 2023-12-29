import React, { Component } from "react"
import { Link, Outlet } from "react-router-dom"

class Navbar extends Component {
  render() {
    return (
      <>
        <div className="bg-blue-400 px-6 py-4 flex gap-16">
          {/* logo region */}
          <div className="text-white text-xl">MOVIES</div>
          {/* menu region */}
          <div className="flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/now">Now Playing</Link>
            <Link to="/favorite">Favorite</Link>
          </div>
        </div>
        <Outlet />
      </>
    )
  }
}

export default Navbar
