import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import Card from './component/Card/Card'
import NameContainer from './component/nameContainer/NameContainer'
import { loadConfigFromFile } from 'vite'

function App() {
  const [show, setShow] = useState([]);

  const BookmarkItem = (Title) => {

    let newShowData = [...show, Title];
    setShow(newShowData);

  }d



  return (
    <div className="App">
      <Header />

      <div className='flex justify-between m-20 gap-5'>
        <div className='w-3/5 border-2  rounded-xl  bg-slate-200 py-2'>
          <Card TotalTime={TotalTime} BookmarkItem={BookmarkItem} />
        </div>

        <div className='w-2/5 border-2 border-indigo-00 rounded-xl bg-slate-200'>

          <div className='text-xl text-center font-bold'>
            <h1 className='mb-10'>Spent time on read:</h1>
            <h2>Bookmarked Blogs: {show.length}</h2>
            <NameContainer show={show} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
