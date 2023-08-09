import './App.css';
import Layout from './Layout'
import { Provider } from 'react-redux';
import store from './store/store.js'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Layout />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
