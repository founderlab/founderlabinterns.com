import _ from 'lodash' // eslint-disable-line
import React, {Component, PropTypes} from 'react'
import D3LineGraph from '../components/D3LineGraph'

export default class Reporting extends Component {

  static propTypes = {
    graphData: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {area: false}
  }

  areaOnChange = () => {
    this.setState({ area: !this.state.area })
  }

  render() {
    const graphData = this.props.graphData

    return (
      //const {user} = this.props
      <section id="users">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-lg-offset-1">
              <label><input type="checkbox" defaultValue={this.state.area} onChange={this.areaOnChange} /> Area</label>
              <D3LineGraph data={graphData} area={this.state.area}/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
