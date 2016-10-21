import _ from 'lodash' // eslint-disable-line
import React, {Component, PropTypes} from 'react'
import D3LineGraph from '../components/D3LineGraph'

export default class Reporting extends Component {

  static propTypes = {
    users: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {area: false}
    this.areaOnChange = this.areaOnChange.bind(this)
  }

  areaOnChange() {
    this.setState({ area: !this.state.area })
  }

  render() {
    const data = [
      {date: new Date(2016, 0, 1), count: 10},
      {date: new Date(2016, 1, 1), count: 20},
      {date: new Date(2016, 2, 1), count: 15},
      {date: new Date(2016, 3, 1), count: 18},
      {date: new Date(2016, 4, 1), count: 30},
      {date: new Date(2016, 5, 1), count: 25},
      {date: new Date(2016, 6, 1), count: 10},
      {date: new Date(2016, 7, 1), count: 5},
      {date: new Date(2016, 8, 1), count: 30},
      {date: new Date(2016, 9, 1), count: 25},
      {date: new Date(2016, 10, 1), count: 50},
      {date: new Date(2016, 11, 1), count: 30},
    ]

    //const{users} = this.props
    return (
      //const {user} = this.props
      <section id="users">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-lg-offset-3">
              {/*<p>{users}</p>*/}
              <label><input type="checkbox" defaultValue={this.state.area} onChange={this.areaOnChange} /> Area</label>
              <D3LineGraph data={data} area={this.state.area}/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
