import React, { Component } from 'react'
class Header extends Component {
    render() {
      return (
        <div className="todoListMain">
          <div className="header">
              Hello { this.props.userName } !!!
            <form>
              <input placeholder="Task" />
              <button type="submit"> Add Task </button>
            </form>
          </div>
        </div>
      )
    }
  }
  export default Header