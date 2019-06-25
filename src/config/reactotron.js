import Reactotron, { asyncStorage } from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'

const reactotron = Reactotron.configure({
  name: 'MyMars',
  host: 'localhost'
})
  .use(reactotronRedux())
  .use(
    asyncStorage({
      ignore: ['persist:root']
    })
  )
  .useReactNative()
  .connect()

export default reactotron
