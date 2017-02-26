import { h, Component } from 'preact'
// Import models

export default class App extends Component {
  constructor() {
    super()
  }

  render({}, {}) {
    return (
      <div>
        <header class="header">
          <h1>todos</h1>
          <input
            class="new-todo"
            placeholder="What needs to be done?"
            value={newTodo}
          />
        </header>
      </div>  
    )
  }
}
