import './ErrorsAlert.css'

const ErrorsAlert = ({ errors }) => {
  return (
    <>
      <div className='alerts'>
        {errors.map((error, index) => (
          <p key={index}>{error}</p>
        ))}
      </div>
    </>
  )
}

export default ErrorsAlert
