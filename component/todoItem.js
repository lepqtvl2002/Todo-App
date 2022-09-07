import html from "../core.js"
import { connect } from "../store.js"

function todoItem({ todo, index }) {
    return html`<li 
    class="${todo && todo.completed && 'completed'}" 
    data-index="${index}"
    ondblclick="{this.focus() ;this.classList.add('editing')}"
    >
    <div class="view">
        <input 
            class="toggle" 
            type="checkbox" 
            ${todo && todo.completed && 'checked'}
            onchange="dispatch('TOGGLE', ${index})"
        >
        <label>${todo && todo.title}</label>
        <button 
            class="destroy"
            onclick="dispatch('DESTROY', ${index})"
        ></button>
    </div>
    <input class="edit" value="${todo && todo.title}"
    onblur="this.parentElement.classList.remove('editing')"
    onkeyup="event.keyCode === 13 && dispatch('EDIT', ${index}, this.value.trim())">
</li>`
}

export default connect()(todoItem)