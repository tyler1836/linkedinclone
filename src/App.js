import './index.css'
import Mainfeed from './components/Mainfeed';
import Navbar from './components/Navbar';
import Miniprofile from './components/Miniprofile';
import Rightsidebar from './components/Rightsidebar';

function App() {
  return (
    <div className="App">
      {/* navbar search linkedin svg home myNetwork Jobs messaging notifications person/dropdown work/dropdown learning */}
      < Navbar /> 
      {/* left side bar  profile mini view recent searches sticky */}
      < Miniprofile />
      {/* start a post  photo video event write article*/}
      {/* feed */}
      < Mainfeed />
      {/* linkedin news ad and footer sticky dropped at smaller views */}
      < Rightsidebar />
    </div>
  );
}

export default App;
