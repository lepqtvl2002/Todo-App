import html from "../core.js"
import { connect } from "../store.js"

function footer({ todos, filter, filters }) {
    return html`<footer class="footer">
    <span class="todo-count"><strong>${todos.filter(todo => !todo.completed).length}</strong> item left</span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
        ${Object.keys(filters).map(type => html`<li>
        <a 
            ${filter === type && 'class="selected"'} 
            onclick="dispatch('FILTER', '${type}')"
            href="#">
                ${type[0].toUpperCase() + type.slice(1)} 
        </a>
    </li>`)}        
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    ${todos.some(todo => todo.completed === true) 
        && `<button onclick="dispatch('CLEAR_COMPLETED')" class="clear-completed">Clear completed</button>`
    }
</footer>`
}

export default connect()(footer)