import React from 'react';

export default class TodoListInput extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(e.target.task.value);
    };
    render() {
      return(
          <form onSubmit={this.handleSubmit}>
              <input name="task" placeholder="Добавить таск" />
              <button>Добавить</button>
          </form>
      );
    }
}
