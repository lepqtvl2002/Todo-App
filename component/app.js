import html from "../core.js"
import { connect } from "../store.js"
import header from "./header.js"
import todoList from "./todoList.js"
import footer from "./footer.js"

const connector = connect()

function app({ todos }) {
    return html`<section class="todoapp">
    ${header()}
	<!-- This section should be hidden by default and shown when there are todos -->
    ${todos.length > 0 && todoList()}
    </section>
	<!-- This footer should hidden by default and shown when there are todos -->
    ${todos.length > 0 && footer()}`
}

export default connector(app)