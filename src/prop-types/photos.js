import PropTypes from 'prop-types'

export const photosType = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number,
    sol: PropTypes.number,
    img_src: PropTypes.string
  })
)
