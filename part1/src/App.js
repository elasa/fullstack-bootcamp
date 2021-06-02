import './App.css';
import Mensaje from './Mensaje.js'

const Description = () =>{
  return <p>Esta es la App del curso fullstack bootcamp</p>
}

const App = () =>{
  return (
    <div className="App">
      <Mensaje color='red' message='Hola estamos trabajando' />
      <Mensaje color='green' message='desde el curso'/>
      <Mensaje color='yellow' message='de React'/>
      <Description />
    </div>
  );
}

export default App;
