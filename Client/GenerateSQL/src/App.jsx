import Style from './index.module.css'
import sqlLogo from './assets/sql-Logo.png';

import { useState } from 'react';

function App() {
  const[queryDescription,setQueryDescription]=useState(""); 

  const submitForm = (e) =>{
    e.preventDefault();
    console.log("form submitted",queryDescription)
  }

  return (
    <>
      <main className={Style.main}>
        <img src={sqlLogo} alt='' className={Style.img} />
        <h3> Generate SQL with AI</h3>

        <form onSubmit={submitForm}>
          <input
          type="text"
          name='query-description'
          placeholder='Describe your query'
          onChange={(e) => setQueryDescription(e.target.value)}
          />
          <input type="submit" value="Generate query" />
        </form>
      </main>
    </>
  )
}

export default App
