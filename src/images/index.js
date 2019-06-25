const commonAssets = [
  {
    path: require('./heart_gray.png'),
    name: 'heart_gray'
  },
  {
    path: require('./heart_roman.png'),
    name: 'heart_roman'
  },
  {
    path: require('./heart_roman_clicked.png'),
    name: 'heart_roman_clicked'
  },
  {
    path: require('./dislike.png'),
    name: 'dislike'
  },
  {
    path: require('./like.png'),
    name: 'like'
  }
]

export const getImage = imageName => {
  const findedImage = commonAssets.find(image => image.name === imageName)
  return findedImage ? findedImage.path : null
}
