import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {


  return (
    <>
      <Header></Header>
      <section className='w-10/12 mx-auto flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </section>
    </>
  )
}

export default App
