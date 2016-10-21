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
    // const userData = reporting.toJSON()
    // const models = userData.models

    const users = reporting.get('models').toJSON()
    const userList = _.values(users)
    //console.log('userList', userList)
    
    /*
    console.log("for each working")
    _.forEach(users, function(value, key) {
      console.log(value.date)
    })
    */
    
    //console.log(models)
    //console.log(userData)
  	//const models = reporting.get('models').toJSON()
  	//console.log(models)
    //const parsedData = JSON.parse(models)
  	//const users = []
    /*
    forEach(function(userList, user => user.createdDate) {
      
    })
*/
    const graphData = {
      data: []
    }
    const countsByDay = _.countBy(userList, user => moment(user.date).hours(0).minutes(0).seconds(0).toDate())
    _.forEach(countsByDay, function(value, key) {
      const dateObj = new Date(key)
      const newData = {
        date: dateObj,
        count: value,
      }
      graphData.data.push(newData)
    })
    //console.log('count', count)
    //console.log(graphData)

    return (
      <Reporting users={users} />
    )
  }

}
