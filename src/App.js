import logo from './logo.svg';
import './App.css';
import Header from './base/header.component';
import Select from 'react-select';

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
    <div className="App">
      <Header title="Test App Title" navItems={navitems}/>
      <div>Application goes here</div>
      <Select options={options}/>
    </div>
  );
}

export default App;
