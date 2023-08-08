import logo from './logo.svg';
import './App.css';
import Header from './base/header.component';
import Select from 'react-select';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
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
  { value: 'option 1', label: 'Option 1' },
  { value: 'strawberry', label: 'Option 2' },
  { value: 'vanilla', label: 'Option 3' }
]


function App(props) {
  return (
    <Router>
    <div className="App">
        <Header title="Test App Title" navItems={navitems}/>
        <div>Application goes here</div>
        <Select options={options}/>
      </div>

      <Routes>
        <Route path="/"></Route>
      </Routes>
    </Router>
  );
}

export default App;
