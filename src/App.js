import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
function App() {
  return (
    <>
    <Navbar title="TextUtils" subhead1="About Us" subhead2="Contact Us"/>
    <div className="container my-3"><TextForm/></div>
    </>
  );
}

export default App;
