import storage from "./until/storage.js"

const init = {
    todos: storage.get(),
    filter : 'all',
    filters: {
        all: () => true,
        active: (todo) => !todo.completed,
        completed: (todo) => todo.completed
    }
}

const actions = {
    ADD({ todos }, title) {
        todos.push({
            title: title,
            completed: false
        })
        storage.set(todos)
    },
    TOGGLE({ todos, filter, filters }, index) {
        const todo = todos.filter(filters[filter])[index]
        todo.completed = !todo.completed
        storage.set(todos)
    },
    TOGGLE_ALL({ todos }, completed) {
        todos.forEach(todo => todo.completed = completed)
        storage.set(todos)
    },
    DESTROY({ todos }, index) {
        todos.splice(index, 1)
        storage.set(todos)
    },
    FILTER(state , filter) {
        state.filter = filter
    },
    CLEAR_COMPLETED({ todos }) {
        todos.forEach(todo => todo.completed = false)
        storage.set(todos)
    },
    EDIT({ todos, filter, filters }, ...args) {
        const [index, title] = args
        const todo = todos.filter(filters[filter])[index] 
        todo.title = title
        storage.set(todos)
    }
}

export default function reducer(state = init, action, ...args) {
    actions[action] && actions[action](state, ...args)
    return state
}