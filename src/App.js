import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import appstore from './utils/appstore';
import { Provider } from 'react-redux';
function App() {

  return(
    <div>
      <Provider store={appstore}>
   <Body />
   </Provider>
   </div>
  )
}

export default App;
