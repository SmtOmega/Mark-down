import React, {useState} from 'react'
import ReactMarkdown from 'react-markdown'
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState("## Markdown Review")
  return (
    <main>
      <section className="container">
        <textarea value={markdown} onChange={(e)=> setMarkdown(e.target.value)}/>
        <article>
          <ReactMarkdown>
            {markdown}
          </ReactMarkdown>
          
        </article>
      </section>
    </main>
  );
}

export default App;
