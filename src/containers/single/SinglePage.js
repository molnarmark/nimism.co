import React, {Component} from "react"
import axios from "axios"
import ReactMarkdown from "react-markdown"
import NavBar from "../../components/shared/NavBar"

let IP = (process.env.NODE_ENV === "development") ? "http://localhost:5000" : "http://api.nimism.co:5000"

class SinglePage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.loading = <div className="loading"><i className="fa fa-refresh" aria-hidden="true"></i></div>
  }

  componentWillMount() {
    let keyword = this.props.routeParams.splat
    axios.get(`${IP}/package/${keyword}`)
      .then(body => {
        this.setState(body.data)
      })
      .catch(e => {})
  }

  getAuthorData() {
    var authordata =
      <h1>a</h1>

    return (
      <div className="card card-fluid">
        {(this.state.profiledata) ? authordata : this.loading}
      </div>
    )
  }

  getMarkdownReadme() {
    return (
      (this.state.readme) ? <ReactMarkdown source={this.state.readme} /> : this.loading
    )
  }

  render() {
    var markdown = this.getMarkdownReadme()
    var authordata = this.getAuthorData()
    return (
      <div className="row">
        <NavBar />
        <div id="hero" className="subpage">
          <p className="nimism animated fadeIn">Colorize</p>
        </div>
        <div className="row animated fadeIn" id="packageData">
          <div className="one columns"></div>

          <div className="seven columns">
            <div className="card card-fluid">{markdown}</div>
          </div>

          <div className="three columns">
            {authordata}
          </div>
          <div className="one columns"></div>
        </div>
        <div id="slogan">
          <span>Find the Nim package you need quickly & easily!
            <br/>
            <div className="credit">Proudly Developed by <a href="http://github.com/molnarmark">Molnár Márk</a></div>
          </span>
        </div>
      </div>
    )
  }
}

export default SinglePage