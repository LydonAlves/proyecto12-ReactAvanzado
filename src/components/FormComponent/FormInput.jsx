import './FormInput.css'

const FormInput = ({
  value,
  divClass,
  labelText,
  labelClass,
  inputType,
  inputClass,
  formType,
  fieldName,
  dispatch,
  disabled
}) => {

  return (
    <div className={divClass}>
      <label className={labelClass}> {labelText} </label>
      {inputType === 'textarea' ? (
        <textarea
          className={inputClass}
          value={value || ''}
          type={inputType}
          onChange={(e) => {
            dispatch({
              type: 'UPDATE_FORM',
              payload: {
                formType: formType,
                data: {
                  [fieldName]: e.target.value
                }
              }
            })
          }}
          disabled={disabled === true}
        />
      ) : (
        <input
          min={0}
          className={inputClass}
          value={value || ''}
          type={inputType}
          onChange={(e) => {
            dispatch({
              type: 'UPDATE_FORM',
              payload: {
                formType: formType,
                data: {
                  [fieldName]: e.target.value
                }
              }
            })
          }}
          disabled={disabled === true}
        />
      )}
    </div>
  )
}

export default FormInput
