import React, {Suspense} from 'react'
import Component from './Component'
import { trackPromise } from 'react-promise-tracker';


const App = () => (
  <div>
    <h1>Minimal React</h1> 
  
  <Component></Component>
  </div>
 
)
export default App