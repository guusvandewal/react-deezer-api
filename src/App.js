import fetch from 'cross-fetch';
// Or just: import 'cross-fetch/polyfill';
import Albums from "./components/Albums";




const App = () => {
  return (
    <div className="App">
<Albums></Albums>
    </div>
  );
}

export default App;
