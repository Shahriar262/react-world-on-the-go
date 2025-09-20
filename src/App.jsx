
import { Suspense } from 'react';
import './App.css'
import Countries from './Components/Countries/Countries'



  const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
   .then(res => res.json())

function App() {
  
  return (
    <>
     
      <Suspense fallback={<h2 className='countries-h1'>Country loading...</h2>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
     
    </>
  )
}

export default App
