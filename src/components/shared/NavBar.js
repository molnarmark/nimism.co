import React, {Component} from "react"

class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="http://blog.nimism.co">Blog</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </nav>
    )
  }
}

export default NavBar