export const state = () => ({
    user: {
        id: 1,
        firstName: 'Lloid',
        lastName: 'Leonetta'
    }
})

export const mutations = {
    add(state, { firstName, lastName, id }) {
        state.user = {
            id,
            firstName,
            lastName,
        }
    }
}