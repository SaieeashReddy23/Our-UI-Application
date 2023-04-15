import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { testing, testingthunk } from '../../features/user/userSlice'

const Home = () => {
  const dispatch = useDispatch()
  const { isLoading, user } = useSelector((store) => store.user)

  // useEffect(() => {
  //   console.log(`isLoading : ${isLoading} and user : ${JSON.stringify(user)} `)
  //   dispatch(testing({ id: 123 }))
  //   dispatch(testingthunk({ name: 'Ka Paul' }))
  // }, [])

  return <div>Home</div>
}
export default Home
