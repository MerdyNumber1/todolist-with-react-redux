import React from 'react';

export default class TodoListUl extends React.Component {
    render() {
        return (<ul>
            {this.props.tasks.map((item, index) =>
                <li key={index}>{item.title} |
                    <span onClick={() => this.props.deleteTask(index)}>Удалить</span>
                </li>)
            }
        </ul>);
    }
}
