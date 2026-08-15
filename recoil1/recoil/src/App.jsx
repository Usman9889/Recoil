import { useState } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'


function App() {
  return (
    <div>
    <RecoilRoot>
    <Count />
    </RecoilRoot>
    </div>
  )
}
function Count(){
  return <div>
    <CountRenderer />
    <Button/>
  </div>
}
function CountRenderer() {
  const count = useRecoilValue(countAtom);
  
  return <div>
    <b>
      {count}
    </b>
    <EvenCountRenderer />
  </div>
}
function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector)

  return(
    <div>
      {isEven ? "Odd": "Even"}
    </div>
  )
}

function Button(){
  // const [count, setCount] = useRecoilState(countAtom)
  const setCount = useSetRecoilState(countAtom)
  return(
    <div>
      <button onClick={()=>
        setCount(count => count+1)}
        >Increase</button>
      <button onClick={()=>
        setCount(count => count-1)}
        >Decrease</button>
    </div>
  )
}

export default App
