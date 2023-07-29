import logo from './logo.svg';
import './App.css';
import Layout from './Layout'
import { Provider } from 'react-redux';
import store from './store/store.js'

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          <Layout />
      </div>
    </Provider>
  );
}

export default App;
