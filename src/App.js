
import './App.css';

import Navbar from './Header/Navbar'
import Footer from './Footer/Footer'
import JobContents from './Components/JobsContents'
function App() {
  return (
   <>
      <Navbar />
      <div className="border">
      <JobContents />
      </div>
      <hr />
      <Footer />
  </>
    );
 
}

export default App;
