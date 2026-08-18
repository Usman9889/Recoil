import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalnotificationSelector } from './atoms'

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>

  
}
function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const [messagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom)
  const notificationAtomCount = useRecoilValue(notificationAtom)
  const totalNotificationCount = useRecoilValue(totalnotificationSelector)
  
  return (
    <>
      <button>Home</button>

      <button>My Network ({networkNotificationCount >=100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notification ({notificationAtomCount})</button>

      <button >Me ({totalNotificationCount})</button>
    </>
  )
}
export default App
