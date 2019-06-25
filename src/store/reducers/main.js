import _ from 'lodash'
import { FETCH_MARS_PICTURES } from '#actions/types'

const INITIAL_STATE = {
  photos: [],
  lastUpdate: null
}

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_MARS_PICTURES: {
      const photos = _.get(action, 'payload.photos', [])
      return { ...state, photos, lastUpdate: Date.now() }
    }
    default:
      return state
  }
}
