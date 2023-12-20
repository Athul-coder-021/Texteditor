// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';//apne aap aa jata hai agar niche <Navbar/> likde tho.
import Textform from './components/Textform';
// anything inside curly brackets is consiered as JS
// let name= "Athul";

function App() {
  return (
    <>
    <Navbar title = "DEVloper" about ="About TextUtils"/>
    <div className="container my-5">
    <Textform heading="Enter your text here"/>
    </div>

    </>
    /*className = Container    ko use karne unordered tharike se exist karne wala format ho jayega ye bootstrap ka hai*/
  );
}
  
export default App;
