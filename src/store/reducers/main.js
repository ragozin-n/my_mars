import { FETCH_MARS_PICTURES } from '#actions/types'

const INITIAL_STATE = {
  pictures: []
}

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_MARS_PICTURES: {
      return { ...state }
    }
    default:
      return state
  }
}
