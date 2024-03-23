import Style from './index.module.css'
import sqlLogo from './assets/sql-Logo.png';

import { useState } from 'react';

function App() {
  const [userPrompt, setUserPrompt] = useState("");
  const[sqlQuery,setSqlQuery]=useState("");

  const submitForm = async (e) =>{
    e.preventDefault();
    
    const generatedQuery = await generateQuery();
    setSqlQuery(generatedQuery);
  }

  const generateQuery = async () => {
    const response = await fetch("http://localhost:3005/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ queryDescription: userPrompt }),
    });

    const data = await response.json();
    return data.sqlQuery.trim();
  };

  return (
    <>
      <main className={Style.main}>
        <img src={sqlLogo} alt='' className={Style.img} height="10%" width="10%" />
        <h3> Generate SQL with AI</h3>
        <form onSubmit={submitForm}>
          <input
          type="text"
          name='query-description'
          placeholder='Describe your query'
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
          />
          <input type="submit" value="Generate query" />
          <pre>{sqlQuery}</pre>
        </form>
      </main>
    </>
  )
}

export default App
