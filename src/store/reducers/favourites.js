import _ from 'lodash'
import { ADD_MARS_PICTURE_TO_FAVOURITES } from '#actions/types'

const INITIAL_STATE = {
  photos: [],
  lastUpdate: null
}

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_MARS_PICTURE_TO_FAVOURITES: {
      const item = _.get(action, 'payload.item', null)
      if (item === null || !item) return { ...state }
      return {
        ...state,
        photos: [...state.photos, item],
        lastUpdate: Date.now()
      }
    }
    default:
      return state
  }
}
