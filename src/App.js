
import { Provider } from 'react-redux';
import Body from './Components/Body';
import Appstore from './utils/Appstore';

function App() {
  return (
    <div className="App">
     <Provider store={Appstore}>  <Body/> </Provider>
    </div>
  );
}

export default App;
