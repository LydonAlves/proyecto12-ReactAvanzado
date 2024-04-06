export const INITIAL_FORM_STATE = {
  editItemId: null,
  harvestForm: {
    id: null,
    date: '',
    bucketsHarvested: '',
    comments: '',
    maxTemp: ''
  },
  deliveriesForm: {
    id: null,
    date: '',
    punnets: '',
    pulp: '',
    agentsName: '',
    receiptNumber: ''
  },
  unitsSoldForm: {
    date: '',
    deliveryId: '',
    id: null,
    pricePulp: '',
    pricePunnets: '',
    pulpSold: 0,
    punnetsSold: ''
  }
}

export function formReducer(state, action) {
  // console.log('Current State:', state)
  // console.log('Action:', action.payload.formType)
  switch (action.type) {
    case 'SET_EDIT_ITEM_ID':
      return {
        ...state,
        editItemId: action.payload
      }
    case 'UPDATE_FORM':
      const { formType, data } = action.payload
      return {
        ...state,
        [formType]: {
          ...state[formType],
          ...data
        }
      }
    default:
      throw new Error('Unhandled action type:' + action.type)
  }
}
