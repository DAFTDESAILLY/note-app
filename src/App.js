import { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Container from './components/Container';
import Header from './components/Header';
import InputTasks from './components/InputTask';
import TaskContent from './components/TaskContent';

function App() {
  let initialTasks = JSON.parse(localStorage.getItem("tasks"));

  if (!initialTasks) {
    initialTasks = [];
  }

  const [tasks, setTasks] = useState(initialTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const createTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask =(id)=>{
    const currentTask = tasks.filter((task)=>task.idTask !==id);
    setTasks(currentTask);
  }

  return (
    <Container>
      <Header />
      <InputTasks createTask={createTask} />
      <TaskContent tasks={tasks} deleteTask={deleteTask} />
    </Container>
  );
}

export default App;
