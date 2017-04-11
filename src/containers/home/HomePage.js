import React, {Component} from "react"
import Results from "../../components/search/Results"
import NavBar from "../../components/shared/NavBar"
import axios from "axios"

let IP = (process.env.NODE_ENV === "development") ? "http://localhost:5000" : "http://api.nimism.co:5000"

export default class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: "",
      height: "calc(100vh - 50px)",
      results: []
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    let val = e.target.value
    this.setState([e.target.name]: val)

    clearTimeout(this.state.typeTimeout)
    let typeTimeout = setTimeout(_ => this.apiCall(val), 500)
    this.setState({typeTimeout})
  }

  apiCall(keyword) {
    if (keyword.length >= 3) {
      axios.get(`${IP}/search/${keyword}`)
        .then(resp => {
          this.setState({results: resp.data})
          if (resp.data.length > 0) this.setState({height: "120px"})
        })
        .catch()
    } else {
      this.setState({results: [], height: "calc(100vh - 50px)"})
    }
  }

  render() {
    let isEmpty = (this.state.results.length === 0 && this.state.keyword.length > 3) ? <i className="fa fa-frown-o" aria-hidden="true"></i> : ""
    let results = (this.state.results.length > 0) ? <Results data={this.state.results} /> : ""
    return (
      <div className="row">
        <NavBar />
        <div id="hero" style={{"minHeight": this.state.height}}>
          <p className="nimism animated fadeInDown">nimism</p>

          <div className="searchInputGroup">
            <input type="text" name="keyword" autoComplete="off" onChange={this.onChange} placeholder="Start typing your keywords.." />
            <i className="fa fa-search search" aria-hidden="true"></i>
          </div>

        </div>
        <div id="slogan">
          <span>Find the Nim package you need quickly & easily!
            <br/>
            <div className="credit">Proudly Developed by <a href="http://github.com/molnarmark">Molnár Márk</a></div>
          </span>
        </div>
        {results}
        {isEmpty}
        <a href="https://github.com/molnarmark/nimism.co"><img className="github-ribbon" src="https://camo.githubusercontent.com/567c3a48d796e2fc06ea80409cc9dd82bf714434/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"/></a>
      </div>
    )
  }
}