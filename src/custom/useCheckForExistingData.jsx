import { useEffect } from 'react'

const useCheckForExistingData = (
  existingData,
  dispatch,
  dispatchType,
  formType
) => {
  useEffect(() => {
    if (existingData) {
      dispatch({
        type: dispatchType,
        payload: {
          formType: formType,
          data: existingData
        }
      })
    }
  }, [existingData])
}

export default useCheckForExistingData
