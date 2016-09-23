import _ from 'lodash' // eslint-disable-line
import React, {Component, PropTypes} from 'react'

export default class Reporting extends Component {

  static propTypes = {
    users: PropTypes.object.isRequired,
  }

  render() {
    const{users} = this.props
    return (
      //const {user} = this.props
      <section id="users">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-lg-offset-3">
              <p>Hello from components</p>
              <p>{users}</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
