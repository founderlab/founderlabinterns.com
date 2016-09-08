import _ from 'lodash' // eslint-disable-line
import User from '../../models/User'

export const TYPES = {
  USER_DATA_LOAD: 'USER_DATA_LOAD',
}

export function loadUsers(callback) {
  return {
    type: TYPES.USER_DATA_LOAD,
    request: User.cursor({}),
    callback,
  }
}
