import { FETCH_MARS_PICTURES } from './types'
import { fetchURL, getURL } from '#config/api'

export const fetchMarsPictures = ({ page } = { page: 0 }) => async dispatch =>
  fetchURL({
    dispatch,
    type: FETCH_MARS_PICTURES,
    params: await getURL.mars_pictures({ page })
  })
