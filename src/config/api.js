import _ from 'lodash'
import { API_SERVER, MARS_ENDPOINT, API_KEY } from '#config/constants'

const HEADERS = {
  JSON: { 'Content-Type': 'application/json' },
  MULTIPART: { 'Content-Type': 'multipart/form-data' }
}

export const fetchURL = async ({
  params,
  dispatch = null,
  type = null,
  onSuccess = null,
  onFailure = null,
  ...otherFields
}) => {
  try {
    let data = await fetch(params.url, await params.options())

    if (data.status === 401) {
      throw new Error('Auth state unauthorized')
    } else data = await data.json()

    if (_.isFunction(onSuccess)) return onSuccess(data)

    if (_.isFunction(dispatch) && type)
      dispatch({
        type,
        payload: data,
        status: 'success',
        error: '',
        ...otherFields
      })

    return data
  } catch (error) {
    if (_.isFunction(onFailure)) return onFailure(error)

    if (_.isFunction(dispatch) && type) {
      dispatch({
        type,
        payload: {},
        status: 'failed',
        error: error.message,
        ...otherFields
      })
    }

    return error
  }
}

export const getURL = {
  // Weird usage of api_key in my opinion, of course it should be placed in headers
  mars_pictures: ({ page }) => ({
    url: `${API_SERVER}/${MARS_ENDPOINT}/?sol=1000&page=${page}&api_key=${API_KEY}`,
    options: async () => ({
      method: 'GET',
      headers: {
        ...HEADERS.JSON
      }
    })
  })
}
