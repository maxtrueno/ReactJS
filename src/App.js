import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ListaContacto from './EJERCICIOS/Ejercicios sesiones 1, 2 y 3/COMPONENTE A';
import COMPONETEA from './EJERCICIOS/Ejercicios sesiones 1, 2 y 3/COMPONENTE A';
import RelojFuncional from './EJERCICIOS/Ejercicios sesiones 4,5 y 6/reloj_funcional';
import Ejercicio_7_8_9 from './EJERCICIOS/Ejercicios sesiones 7, 8 y 9/app';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/*         Ejercicios sesiones 1, 2 y 3 */}
        {/* <COMPONETEA></COMPONETEA> */}

        {/*         Ejercicios sesiones 4, 5 y 6 */}
{/*         <RelojFuncional></RelojFuncional> */}

        {/*         Ejercicios sesiones 7, 8 y 9 */}
        <Ejercicio_7_8_9></Ejercicio_7_8_9>
        {/* <TaskListComponent></TaskListComponent>  */} 
        
      </header>
    </div>
  );
}

export default App;
