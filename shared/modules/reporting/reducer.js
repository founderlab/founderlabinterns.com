import _ from 'lodash' // eslint-disable-line
import {fromJS} from 'immutable'
import {TYPES} from './actions'

const defaultState = fromJS({
  pagesBySlug: {},
  staticPageLinks: {},
  settings: {},
})

export default function reducer(state=defaultState, action={}) {

    switch (action.type) {
        case TYPES.USER_DATA_LOAD_SUCCESS + '_START':
            return state.merge({loading: true, errors: {}})

        case TYPES.USER_DATA_LOAD_SUCCESS + '_ERROR':
            return state.merge({loading: false, errors: {load: action.error || action.res.body.error}})

        case TYPES.USER_DATA_LOAD_SUCCESS +'_SUCCESS':
          const toMerge = {
            loading: false,
            errors: null,
            models: action.models,
          }
          const ss = state.mergeDeep(toMerge)
          return ss

        default:
          return state
  }
}
