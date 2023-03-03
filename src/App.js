import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ListaContacto from './EJERCICIOS/Ejercicios sesiones 1, 2 y 3/COMPONENTE A';
import COMPONETEA from './EJERCICIOS/Ejercicios sesiones 1, 2 y 3/COMPONENTE A';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*         Ejercicios sesiones 1, 2 y 3 */}
        <COMPONETEA></COMPONETEA>
        
        <TaskListComponent></TaskListComponent>  
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
