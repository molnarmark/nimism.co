import React, {Component} from "react"

class Card extends Component {

  // Old school but refusing to add another dependency for such simpleness
  copyToClipboard(e) {
    var textField = document.createElement("textarea")
    textField.innerText = `nimble install ${this.props.title}`
    document.body.appendChild(textField)
    textField.select()
    document.execCommand("copy")
    textField.remove()
    alert("The command was copied to your clipboard!")
  }

  render() {
    return (
      <div className="card">
        <span className="title">{this.props.title}</span>
        <hr />
        <div className="row">
          <div className="one columns"><i className="fa fa-info" aria-hidden="true"></i></div>
          <div className="eleven columns">{this.props.desc}</div>
        </div>
        <div className="row">
          <div className="one columns"><i className="fa fa-tag" aria-hidden="true"></i></div>
          <div className="eleven columns"><i><span className="tags">{this.props.tags}</span></i></div>
        </div>
        <div className="row">
          <div className="one columns"><i className="fa fa-terminal" aria-hidden="true"></i></div>
          <div className="eleven columns"><span className="command">nimble install {this.props.title} <i onClick={this.copyToClipboard.bind(this)} className="fa fa-clipboard copyToClipboard" aria-hidden="true"></i></span></div>
        </div>
        <hr />
        <div className="row">
          <a href={this.props.url}><div className="six columns repo"><i className={this.props.method === "git"? "fa fa-github" : "fa fa-bitbucket"} aria-hidden="true"></i></div></a>
          <a href={this.props.web}><div className="six columns home"><i className="fa fa-home" aria-hidden="true"></i></div></a>
        </div>
      </div>
    )
  }
}

export default Card