import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {pushState} from 'redux-router'
import Helmet from 'react-helmet'
import NotFound from '../../utils/components/NotFound'
import Reporting from '../components/Reporting'

@connect(state => ({app: state.app, slug: state.router.params.slug}), {pushState})
export default class ReportingContainer extends Component {

  static propTypes = {
    app: PropTypes.object.isRequired,
    slug: PropTypes.string.isRequired,
    pushState: PropTypes.func.isRequired,
  }


  page() {
    const {app, slug} = this.props
    return app.get('pagesBySlug').get(slug)
  }

  render() {
    //if (this.props.app.get('loading')) return (<Loader />)
    const page = this.page()
    if (!page) return (<NotFound />)
    return (
      <div>
        <Helmet title={page.toJSON().title} />
        <Reporting page={page.toJSON()} />
      </div>
    )
  }
}
