import { useState } from 'react'
import logo from './logo.svg'
import './styles.sass'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-light container">
      <header className="App-header">
        <img src={logo} className="w-25 mx-auto d-block" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button className='btn btn-primary' type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
