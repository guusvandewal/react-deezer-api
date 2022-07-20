import fetch from 'cross-fetch';
// Or just: import 'cross-fetch/polyfill';
import Albums from "./components/Albums";
import Track from "./components/Track";




const App = () => {
  return (
    <div className="App">
<Albums></Albums>
<Track></Track>
    </div>
  );
}

export default App;
