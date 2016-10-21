import _ from 'lodash' // eslint-disable-line
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import {loadUsers} from '../../reporting/actions'
import Reporting from '../components/Reporting'

@connect(state => ({reporting: state.reporting}))
export default class ReportingContainer extends Component {
  static propTypes = {
    reporting: PropTypes.object.isRequired,
  }

  static fetchData({store}, callback) {
    return store.dispatch(loadUsers(callback))
  }

  render() {
    const {reporting} = this.props
    const users = reporting.get('models').toJSON()
    const userList = _.values(users)
    const graphData = []

    const countsByDay = _.countBy(userList, user => moment(user.date).hours(0).minutes(0).seconds(0).toDate())
    _.forEach(countsByDay, function(value, key) {
      const dateObj = new Date(key)
      const newData = {
        date: dateObj,
        count: value,
      }
      graphData.push(newData)
    })

    graphData.sort(function(a, b) { return a.date > b.date })

    return (
      <Reporting graphData={graphData} />
    )
  }

}
