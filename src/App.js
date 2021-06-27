import './App.css';
import UserScreen from './components/screens/UserScreen';
import banner from './assets/banner.jpg'

function App() {
  return (
    <div className="content">
      <div className="content-left">
      </div>
      <div className="content-right">
        <UserScreen />
      </div>
    </div>
  );
}

export default App;
