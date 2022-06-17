import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SearchExercises from './components/SearchExercises';
import './App.css';


function App() {

  const [response, setResponse] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8080/exercises')
    .then((response)=>{
      setResponse(response.data);
    })
  },[])

  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <SearchExercises response={response}/>
    </div>
  );
}

export default App;
