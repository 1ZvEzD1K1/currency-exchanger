import { Provider } from 'react-redux';
import './App.css';
import GlobalPade from './pages/GlobalPade';
import store from './redux/store';

function App() {
  return (
    <Provider store={store} >
      <GlobalPade/>
    </Provider>
  );
}

export default App;
