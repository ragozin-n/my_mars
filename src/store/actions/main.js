import { FETCH_MARS_PICTURES } from './types'
import { fetchURL, getURL } from '#config/api'

export const fetchMarsPictures = () => async dispatch =>
  fetchURL({
    dispatch,
    type: FETCH_MARS_PICTURES,
    params: await getURL.user.checkForAgent()
  })
