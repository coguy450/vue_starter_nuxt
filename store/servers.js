export const state = () => ({
    list: ['localhost', 'mlab', 'documentdb'],
    two: 'blah',
    three: {test: 'true'}
  })


export const mutations = {
    add (state, text) {
        console.log(state, text)
    },
    remove (state, { todo }) {
        state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle (state, todo) {
        console.log('toggling in state')
    }
}