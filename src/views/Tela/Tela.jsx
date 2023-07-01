import React, { useState } from "react";
import deleteIcon from "../../assets/excluir.svg";
import editIcon from "../../assets/edit.svg";
import addIcon from "../../assets/adicionar.svg";


const Tela = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const editTask = (index, newTask) => {
    if (index >= 0 && index < tasks.length) {
      const updatedTasks = [...tasks];
      updatedTasks[index] = newTask;
      setTasks(updatedTasks);
    } else {
      console.log("Índice inválido.");
    }
  };

  const deleteTask = (index) => {
    if (index >= 0 && index < tasks.length) {
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      setTasks(updatedTasks);
    } else {
      console.log("Índice inválido.");
    }
  };

  const handleTaskEdit = (index) => {
    const newTaskText = prompt("Tem certeza que deseja editar esta tarefa?");
    if (newTaskText !== null) {
      editTask(index, newTaskText);
    }
  };

  const showDeleteNotification = (index) => {
    const confirmation = window.confirm("Tem certeza que deseja excluir esta tarefa?");
    if (confirmation) {
      setShowNotification(true);
      deleteTask(index);
      setTimeout(() => {
        setShowNotification(false);
      }, 2000); // Tempo em milissegundos para a notificação desaparecer (por exemplo, 2 segundos)
    }
  };

  return (
    <main className="main">
      <nav className="nav">
        <h1>Organização</h1>
        <div>
          <p>Tarefas</p>
        </div>
      </nav>
      <section className="tituloinicial">
        <p className="titulo">
          Otimize seu tempo e se organize com o nosso Planejador Diário
        </p>
        <div className="sections">
          <p className="tarefa">Tarefa</p>
          <p className="status">Status</p>
          <p className="opcoes">Opções</p>
        </div>
        <p className="border"></p>
        {tasks.map((task, index) => (
          <div key={index} className="task-container">
            <p className="nametarefa">{task}</p>
            <input type="checkbox" className="task-checkbox" />
            <div className="task-options">
              <button onClick={() => handleTaskEdit(index)}>
                <img className="bt" src={editIcon} alt="Editar" />
              </button>
              <button onClick={() => showDeleteNotification(index)}>
                <img className="bt" src={deleteIcon} alt="Excluir" />
              </button>
            </div>
          </div>
        ))}
        <div className="add-task-container">
          <input
            type="text"
            placeholder="Nova tarefa..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <img
            src={addIcon}
            alt="Adicionar"
            onClick={addTask}
            className="add-task-button"
          />
        </div>

        {showNotification && (
          <div className="notification">
            <p>Notificação</p>
            <p>Essa é a notificação de exclusão ou edição.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default Tela;
