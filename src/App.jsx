import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [markTime, setMarkTime] = useState(0);
  const [markAdd, setMarkAdd] = useState([])

  const handleMarkTime = (id, time) => {
    setMarkTime(markTime + time);
    // Remove masked Book 
    const remainingBookMark = markAdd.filter(bookMark => bookMark.id !== id);
    setMarkAdd(remainingBookMark)
  }

  const handleBookMarkAdd = blog => {
    const newBookMark = [...markAdd, blog]
    setMarkAdd(newBookMark)
  }


  return (
    <>
      <Header></Header>
      <section className='w-10/12 mx-auto flex'>
        <Blogs handleMarkTime={handleMarkTime} handleBookMarkAdd={handleBookMarkAdd}></Blogs>
        <Bookmarks markAdd={markAdd} markTime={markTime}></Bookmarks>
      </section>
    </>
  )
}

export default App
