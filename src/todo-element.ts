import { html, css, LitElement } from 'lit'
import { customElement, property, query, state } from 'lit/decorators.js'
import litLogo from './assets/lit.svg'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('todo-list')
export class TodoElement extends LitElement {
 
  @state()
  todos: Array<string> | undefined;

  @query('input[name="todo"]')
  todoInput: HTMLInputElement | undefined;

  render() {
    return html`
      Todos:
      <ul>
        ${this.todos?.map(todo => html`<li>${todo}</li>`)}
      </ul>
      <input name="todo"><button @click=${this.addTodo}>Add todo</button>
    `
  }

  addTodo() {
    this.dispatchEvent(new CustomEvent('add_todo', {detail: {todo: this.todoInput?.value}}));
    this.todoInput!.value = '';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'todo-list': TodoElement
  }
}
