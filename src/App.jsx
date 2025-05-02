// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Posts from './components/Posts'
import AddPost from "./components/AddPost.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="mx-auto max-w-2xl text-center mt-10">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          Мир на ладони
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">Блог для тех, кто верит, что путешествия делают жизнь ярче и готов
          поделиться своими впечатлениями со всем миром.</p>
      </div>
      <AddPost />
      <Posts />
    </>
  )
}

export default App
