import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [exchangeData1, setExchangeData1] = useState({})
  const [exchangeData2, setExchangeData2] = useState({})
  const [bankData, setbankData] = useState({})



  useEffect(()=>{
      setExchangeData1({ returns: 100})
  },[])

  useEffect(()=>{
      setExchangeData2({ returns: 100})
  },[])

  useEffect(() => {
    setTimeout(() => {
    setbankData({
      income: 100
    })
  }, 3000)
  },[])

  const cryptoReturns = useMemo(() => {
    console.log("before");
    return exchangeData1.returns + exchangeData2.returns
  }, [exchangeData1, exchangeData2])
   

  const incomeTax = (bankData.income + cryptoReturns) * 0.3
  return (
    
     <div>
      Your income tax is {incomeTax}
     </div>
     
  )
}

export default App
