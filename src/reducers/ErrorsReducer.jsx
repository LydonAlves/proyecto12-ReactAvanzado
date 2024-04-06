export const INITIAL_ERROR_STATE = {
  errors: []
}

export function errorReducer(state, action) {
  switch (action.type) {
    case 'CREATE_ERRORS':
      return {
        ...state,
        errors: action.payload
      }

    default:
      throw new Error('Unhandled action type:' + action.type)
  }
}
