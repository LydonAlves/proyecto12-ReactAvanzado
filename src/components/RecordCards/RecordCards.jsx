import './RecordCards.css'

const RecordCards = ({
  item,
  formState,
  handleEditClick,
  deleteItemById,
  submit,
  dispatch,
  formType,
  editItemId,
  fieldDefinitions
}) => {
  return (
    <li className='individualCard'>
      <form onSubmit={submit} className='card'>
        {fieldDefinitions.map(({ label, fieldName, type }) => (
          <div
            key={fieldName}
            className={type === 'textarea' ? 'textareaDiv' : 'cardDiv'}
          >
            <label className='cardTitle'> {label}: </label>
            {type === 'textarea' ? (
              <textarea
                className='cardTextarea'
                value={
                  editItemId === item.id
                    ? formState[fieldName]
                    : item[fieldName]
                }
                onChange={(e) => {
                  if (editItemId === item.id) {
                    dispatch({
                      type: 'UPDATE_FORM',
                      payload: {
                        formType: formType,
                        data: { [fieldName]: e.target.value }
                      }
                    })
                  }
                }}
                disabled={editItemId !== item.id}
              />
            ) : (
              <input
                type={type}
                className='cardInput'
                value={
                  editItemId === item.id
                    ? formState[fieldName]
                    : item[fieldName]
                }
                onChange={(e) => {
                  if (editItemId === item.id) {
                    dispatch({
                      type: 'UPDATE_FORM',
                      payload: {
                        formType: formType,
                        data: {
                          ...item,
                          [fieldName]: e.target.value
                        }
                      }
                    })
                  }
                }}
                disabled={editItemId !== item.id}
              />
            )}
          </div>
        ))}
      </form>
      <div className='cardButtonDiv'>
        <button className='deleteButton' onClick={() => deleteItemById(item)}>
          X
        </button>
        <button className='editButton' onClick={() => handleEditClick(item)}>
          Edit
        </button>
      </div>
    </li>
  )
}

export default RecordCards
