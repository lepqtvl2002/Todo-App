import html from "../core.js"
import { connect } from "../store.js"
import todoItem from "./todoItem.js"

function todoList( { todos, filter, filters }) {
    return html`<section class="main">
    <input 
        id="toggle-all" 
        class="toggle-all" 
        type="checkbox" 
        onclick="dispatch('TOGGLE_ALL', this.checked)" 
        ${todos.every(filters.completed) && 'checked'} 
    >
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
        <!-- These are here just to show the structure of the list items -->
        ${todos.filter(filters[filter]).map((todo, index) => todoItem({ todo, index }))}
    </ul>
</section>`
}

export default connect()(todoList)