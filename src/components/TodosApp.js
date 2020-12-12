import React, { Component } from "react";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import { ADD_TODO } from "../constants/index";

class Todos extends Component {
  state = {
    title: "",
  };

  onChangeHandler = (e) => {
    const value = e.target.value;
    this.setState({ title: value });
  };

  submitData = (e) => {
    e.preventDefault();
    if (this.state.title != "") {
      const { title } = this.state;
      const { addTodo } = this.props;
      addTodo(title);
    }

    this.setState({ title: "" });
  };

  render() {
    const { onChangeHandler, submitData } = this;
    const { todos, title } = this.state;

    return (
      <ul className="theList">
        <form onSubmit={submitData}>
          <input
            className="input-todo"
            placeholder="Add Todo"
            value={title}
            onChange={onChangeHandler}
          />
          <button type="submit">Add Todo</button>
        </form>
        <TodoList todos={todos} />
      </ul>
    );
  }
}
const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  //Add new todo item
  addTodo: (title) => {
    dispatch({
      type: ADD_TODO,
      payload: {
        id: Date.now(),
        title: title,
        completed: false,
      },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
