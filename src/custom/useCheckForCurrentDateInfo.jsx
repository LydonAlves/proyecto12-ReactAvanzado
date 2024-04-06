import { useEffect } from 'react'
import useUpdateEditedForm from '../utils/updateEditedForm'

const useCheckForCurrentDateInfo = (
  todaysData,
  currentDate,
  dispatchForm,
  harvestFormActive
) => {
  useEffect(() => {
    if (!todaysData && harvestFormActive === true) {
      let newData = {
        id: null,
        date: currentDate,
        bucketsHarvested: '',
        comments: '',
        maxTemp: ''
      }
      useUpdateEditedForm(dispatchForm, 'harvestForm', newData)
    } else if (!todaysData && harvestFormActive === false) {
      let newData = {
        id: null,
        date: currentDate,
        punnets: '',
        pulp: '',
        agentsName: '',
        receiptNumber: ''
      }
      useUpdateEditedForm(dispatchForm, 'deliveriesForm', newData)
    }
  }, [todaysData, currentDate, dispatchForm])
}

export default useCheckForCurrentDateInfo
