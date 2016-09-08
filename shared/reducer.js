import Immutable from 'immutable'
import {combineReducers} from 'redux'
import {routerStateReducer as router} from 'redux-router'
import {reducer as form} from 'redux-form'
import {reducer as auth} from 'fl-auth-redux'
import {reducer as admin} from 'fl-admin'
import app from './modules/app/reducer'
import profiles from './modules/users/profileReducer'
import reporting from './modules/reporting/reducer'

export default combineReducers({
  auth,
  form,
  router,
  admin,
  app,
  profiles,
  reporting,
  config: (state=new Immutable.Map()) => state,
})
