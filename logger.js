export default function logger(reducer) {
    return (prevState, action, ...args) => {
        console.group('Action: ' + action)
        console.log(prevState)
        console.log('Arguments: ' + args)
        const nextState = reducer(prevState, action, ...args)
        console.log(nextState)
        console.groupEnd()
        return nextState
    }
}