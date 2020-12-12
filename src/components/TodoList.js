import React, { Component } from "react";
import { connect } from "react-redux";
import { REMOVE_TODO, TOGGLE_TODO } from "../constants/index";
import "./TodoList.css";

class TodoList extends Component {
  render() {
    const resolvedClass = {
      textDecoration: "line-through",
    };
    const { todos, removeTodo, toggleTodo } = this.props;

    return (
      <div className="todoListMain">
        <div className="header">
          {todos.map((todo, index) => {
            console.log(this.props.todos);
            return (
              <div key={index} className="list_style">
                <li
                  className="todo"
                  style={todo.completed === true ? resolvedClass : {}}
                  onClick={() => toggleTodo(todo.id)}>
                  {todo.title}
                </li>
                <span className="close" onClick={() => removeTodo(todo.id)}>
                  X
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => {
    dispatch({
      type: TOGGLE_TODO,
      payload: id,
    });
  },
  removeTodo: (id) => {
    dispatch({ type: REMOVE_TODO, payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
