import React, {Component} from "react"
import Card from "./Card"

class Results extends Component {
  render() {
    let cards = this.props.data.map(data => <Card title={data.name} desc={data.description} method={data.method} tags={data.tags.join(", ")} url={data.url} web={data.web} />)

    return (
      <div id="cards" class="row">
        {cards}
      </div>
    )
  }
}

export default Results