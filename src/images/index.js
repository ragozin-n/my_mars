const commonAssets = [
  // {
  //   path: require('./a.png'),
  //   name: 'a'
  // }
]

export const getImage = imageName => {
  const findedImage = commonAssets.find(image => image.name === imageName)
  return findedImage ? findedImage.path : null
}
