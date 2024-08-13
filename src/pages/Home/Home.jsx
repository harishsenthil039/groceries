import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/Exploremenu/Exploremenu'

import Display from '../../components/Display/Display'


const Home = () => {
  const [category,setCategory] = useState("All");;
  return (
    <div>
      <Header />
      <Exploremenu category={category} setCategory={setCategory} />
      <Display category={category} />
    </div>
  )
}

export default Home
