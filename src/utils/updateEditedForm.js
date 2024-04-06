const updateEditedForm = (dispatchForm, formType, dataPoint) => {
  dispatchForm({
    type: 'UPDATE_FORM',
    payload: {
      formType: formType,
      data: dataPoint
    }
  })
}

export default updateEditedForm
