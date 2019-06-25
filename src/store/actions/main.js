import {
  FETCH_MARS_PICTURES,
  RATE_MARS_PICTURE,
  ADD_MARS_PICTURE_TO_FAVOURITES
} from './types'
import { fetchURL, getURL } from '#config/api'

export const fetchMarsPictures = ({ page } = { page: 0 }) => async dispatch =>
  fetchURL({
    dispatch,
    type: FETCH_MARS_PICTURES,
    params: await getURL.mars_pictures({ page })
  })

export const rateCard = ({ id }) => dispatch =>
  dispatch({ type: RATE_MARS_PICTURE, payload: { id } })

export const addToFavourites = ({ item }) => dispatch =>
  dispatch({ type: ADD_MARS_PICTURE_TO_FAVOURITES, payload: { item } })
