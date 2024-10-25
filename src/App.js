import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Copyright from './components/Copyright';

function App() {
  	return (
    	<div className='bg-[#E4E0E1]'>
      		<Header/>
			<Hero/>
			<AboutUs/>
			<Footer/>
			<Copyright/>
    	</div>
  	);
}

export default App;
