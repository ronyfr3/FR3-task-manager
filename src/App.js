import React from 'react'
import Todo from './component/Todo';
import Context from './component/Context'
import Footer from './component/Footer';

const App = () => {
 
  return (
    <section className='app'>
       <Context>
         <Todo/>
         <Footer/>
      </Context>
    </section>
  )
}

export default App
