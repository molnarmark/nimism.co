import React, {Component} from "react"
import axios from "axios"
import ReactMarkdown from "react-markdown"
import NavBar from "../../components/shared/NavBar"


let IP = (process.env.NODE_ENV === "development") ? "http://localhost:5000" : "http://api.nimism.co:5000"

class SinglePage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    let keyword = this.props.routeParams.splat
    axios.get(`${IP}/package/${keyword}`)
      .then(body => {
        this.setState(body.data)
      })
      .catch(e => {})
  }

  render() {
    var markdown = (this.state.readme) ? <ReactMarkdown source={this.state.readme} /> : ""
    return (
      <div className="row">
        <NavBar />
        <div id="hero" className="subpage">
          <p className="nimism animated fadeInLeft">nimism</p>
        </div>
      </div>
    )
  }
}

export default SinglePage