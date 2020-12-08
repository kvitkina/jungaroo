export const state = () => ({
    items: [
      {
        id: '1',
        title: 'Title 1',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar ..',
        issuer: 'OZ',
        status: 'backlog',
        dueDate: '09.04.2020'
      },
      {
        id: '2',
        title: 'Title 2',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar ..',
        issuer: 'OZ',
        status: 'inProgress',
        dueDate: '09.04.2020'
      },
      {
        id: '3',
        title: 'Title 3',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar ..',
        issuer: 'OZ',
        status: 'done',
        dueDate: '09.04.2020'
      },
      {
        id: '4',
        title: 'Title 4',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar ..',
        issuer: 'OZ',
        status: 'backlog',
        dueDate: '09.04.2020'
      },
      {
        id: '5',
        title: 'Title 5',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar ..',
        issuer: 'OZ',
        status: 'inProgress',
        dueDate: '09.04.2020'
      },
      {
        id: '6',
        title: 'Title 6',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar ..',
        issuer: 'OZ',
        status: 'done',
        dueDate: '09.04.2020'
      },
      {
        id: '7',
        title: 'Title 7',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar ..',
        issuer: 'OZ',
        status: 'backlog',
        dueDate: '09.04.2020'
      },
      {
        id: '8',
        title: 'Title 8',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar ..',
        issuer: 'OZ',
        status: 'inProgress',
        dueDate: '09.04.2020'
      },
      {
        id: '9',
        title: 'Title 9',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat ar ..',
        issuer: 'OZ',
        status: 'done',
        dueDate: '09.04.2020'
      },
    ]
  })
  
  export const mutations = {
    add(state, { title, text, issuer, dueDate }) {
      state.items.push({
        id, title, text, issuer, dueDate, status: 'Backlog'
      })
    },
    remove(state, { id }) {
      state.items = state.items.filter(item => item.id !== id)
    },
    toggleStatus(state, { id, status }) {
      state.items = state.items.map(item => {
        if(item.id === id) {
          item.status = status
        }
        return item
      })
    }
  }