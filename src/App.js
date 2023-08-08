
import './App.css';
import Header from './base/header.component';
import Select from 'react-select';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { useEffect, useState } from 'react';
const navitems = [
  {
    "title":"NavItem 1",
    "href": "#"
  },
  {
    "title":"NavItem 2",
    "href": "#"
  },
]

const options = [
  { value: 'option 1', label: 'Option 1', id: 0 },
  { value: 'strawberry', label: 'Option 2', id: 1 },
  { value: 'vanilla', label: 'Option 3', id: 2 }
]



function App(props) {

  
  const [dataItems, setDataItems] = useState(null)
  const [selectedItem, setSetselectedItem] = useState()


  if (!selectedItem) {
    setSetselectedItem({})
  }

  useEffect(() => {
    // if (initializing) {
    //   initializing = false;
    // } else {
    //   return;
    // }
    console.log(`Entering UseEffect: dataItems `);
    if (!dataItems) {
      axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        setDataItems(persons);
        console.log(persons);
      })
    } else {
      console.log("DataItems was not null")
    }
  }, [])
  
  return (
    <Router>
      <div className="App">
        <Header title="Test App Title" navItems={navitems}/>
        <Select options={options}/>
        </div>

      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}


const HomePage = () => {
  <div>Application goes here</div>
}

export default App;
