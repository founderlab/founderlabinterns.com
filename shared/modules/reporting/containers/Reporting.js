import _ from 'lodash' // eslint-disable-line
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
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
    const userData = reporting.toJSON()
    const models = userData.models
    for (var i = 0; i < 50; i++) {
      console.log("each model entry")
      console.log(models[i])
    }
    //console.log(userData)
  	//const models = reporting.get('models').toJSON()
  	//console.log(models)
    //const parsedData = JSON.parse(models)
  	const users = []

    return (
      <Reporting users={users} />
    )
  }

}
