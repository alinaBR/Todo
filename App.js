import React from 'react';
import Task from './components/Task';
import TaskInput from './components/TaskInput';
import store from './store';
import { observer } from 'mobx-react';

class App extends React.Component {
  render() {
    const { sortedTasks, activeTasks } = store;
    return (
      <div className="App">
        <h1 className="top">
          Active tasks: {activeTasks}
        </h1>
        {sortedTasks.map(task => (
          <Task
            key={task.id}
            doneTask={() => store.doneTask(task.id)}
            deleteTask={() => store.deleteTask(task.id)}
            task={task}

          ></Task>
        ))}

        <TaskInput addTask={v => store.addTask(v)} />
      </div>
    );
  }
}
export default observer(App);
