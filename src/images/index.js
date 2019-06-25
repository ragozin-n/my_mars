const commonAssets = [
  {
    path: require('./heart_gray.png'),
    name: 'heart_gray'
  },
  {
    path: require('./heart_roman.png'),
    name: 'heart_roman'
  }
]

export const getImage = imageName => {
  const findedImage = commonAssets.find(image => image.name === imageName)
  return findedImage ? findedImage.path : null
}
