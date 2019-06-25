import _ from 'lodash'
import { FETCH_MARS_PICTURES, RATE_MARS_PICTURE } from '#actions/types'

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
    case RATE_MARS_PICTURE: {
      const id = _.get(action, 'payload.id', null)

      if (id === null) return { ...state }

      const photos = _.get(state, 'photos', [])
      const photosWithoutRated = photos.filter(photo => photo.id !== id)
      return { ...state, photos: photosWithoutRated }
    }
    default:
      return state
  }
}
