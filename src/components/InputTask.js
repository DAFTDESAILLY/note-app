import React from "react";
import { Select, Input, Button, Grid, Header, Icon } from "semantic-ui-react";
import { useState } from "react";
import{v4 as uuidv4} from 'uuid';

const options = [
  { key: "casa", text: "Casa", value: "Casa" },
  { key: "tarea", text: "Tarea", value: "Tarea" },
  { key: "lista de compra ", text: "Lista de compra ", value: "lista de compra " },
  { key: "oficina", text: "Oficina", value: "Oficina" },
  { key: "pagos", text: "Pagos", value: "Pagos" },
  { key: "deporte", text: "Deporte", value: "deporte" },
  { key: "otros", text: "Otros", value: "Otros" },
];

export default function InputTask(props) {
  const [task, setTask] = useState({
    idTask: "",
    taskName: "",
    categoryTask: "",
  });
  const [error, setError] = useState(false);

  const{createTask}=props;


  const onChangeTask = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeCategoryTask = (e, data) => {
    setTask({
      ...task,
      [data.name]: data.value,
    });
  };
  const onSubmitTask = (e) => {
    //no recarge 
    e.preventDefault();
    // validacion
    if (task.taskName.trim() === "") {
      setError(true);
      return;
    }
    // eliminar mensaje 
    setError(false);
    //asignar un id 
    task.idTask =uuidv4();
    //Crear tarea 
     createTask(task);
     //limpiar input
     setTask({
      idTask: "",
      taskName: "",
      categoryTask: "",
     });
  };

  return (
    <>
      <Grid centered columns={2}>
        <Input type="text" action>
          <Input
            size="small"
            icon="add"
            placeholder="Escribe tu Tarea..."
            iconPosition="left"
            name="taskName"
            value={task.taskName}
            onChange={onChangeTask}
          />
          <Select
            compact
            options={options}
            className="select-form-task"
            name="categoryTask"
            placeholder="Categorias"
            value={task.categoryTask} // Corregido: categoryTask en lugar de categoryName
            onChange={onChangeCategoryTask}
          />
          <Button type="submit" color="violet" onClick={onSubmitTask}>
            Añadir Tarea
          </Button>
        </Input>
      </Grid>
      {error && (
        <Grid centered>
          <Header as="h4" color="red" className="alert-error-form">
            <Icon name="close" />
            <Header.Content>La tarea es obligatoria</Header.Content>
            <Icon name="close" />
          </Header>
        </Grid>
      )}
    </>
  );
}
