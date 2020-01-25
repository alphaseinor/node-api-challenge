import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import ProjectList from './components/ProjectList';

function App() {
  const [baseAPI] = useState('http://localhost:4000/api/projects')
  const [actions] = useState('actions/')
  const [projects] = useState('projects/')
  const [data, setData] = useState([])
  const [updater, setUpdater] =useState(false)


  useEffect(()=>{
    console.log("useEffect")
    axios.get(baseAPI)
    .then(result => {
      console.log("res", result)
      setData(result.data)
    })
    .catch(err=> console.log(err))
    .then(()=> console.log("done"))
  },[updater])

  useEffect(() =>{console.log(data)},[data])

  return (
    <section>
      {
        data.map((project, i) => <ProjectList
          key = {i}
          project = {project}
        />)
        
      }
    </section>
  );
}

export default App;
