import logo from './logo.svg';
import './App.css';
import Header from './base/header.component';

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

function App(props) {
  return (
    <div className="App">
      <Header title="Test App Title" navItems={navitems}/>
      <div>Application goes here</div>
    </div>
  );
}

export default App;
