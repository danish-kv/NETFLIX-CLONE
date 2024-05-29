import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import axios from 'axios'
import { action, comedy, documentaries, horror, orignals, romance } from './urls'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={orignals} title='NetFlix original'/>
        <RowPost url={action} title='Action' isSmall />
        <RowPost url={comedy} title='Comedy' isSmall />
        <RowPost url={horror} title='Horror' isSmall />
        <RowPost url={romance} title='Romance' isSmall />
        <RowPost url={documentaries} title='Documentaries'  />
    </div>
  );
}

export default App;