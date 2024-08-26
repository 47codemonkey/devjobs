import Router from './pages/Router';
import './App.css';

import { store } from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
