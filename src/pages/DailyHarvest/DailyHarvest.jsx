import { useContext, useReducer } from 'react'
import './DailyHarvest.css'
import { v4 as uuidv4 } from 'uuid'
import { updateItemById } from '../../utils/updateItemById'
import { DataContext } from '../../context/DataContext'
import { deleteItemById } from '../../utils/deleteItemById'

import ErrorsAlert from '../../components/ErrorsComponent/ErrorsAlert'
import RecordCards from '../../components/RecordCards/RecordCards'
import { harvestFieldDefinitions } from '../../utils/fieldDefinitions'
import FormInput from '../../components/FormComponent/FormInput'
import { dataChecker } from '../../utils/dateChecker'
import useCheckForExistingData from '../../custom/useCheckForExistingData'
import useMaxTemp from '../../custom/useMaxTemp'
import { DateContext } from '../../context/DateContext'
import DailyHarvestGraph from '../../components/Graphs/DailyHarvestGraph'
import { validateFormData } from '../../utils/validateFormData'
import updateEditedForm from '../../utils/updateEditedForm'
import { INITIAL_ERROR_STATE, errorReducer } from '../../reducers/ErrorsReducer'
import useCheckForCurrentDateInfo from '../../custom/useCheckForCurrentDateInfo'
import findTodaysAction from '../../utils/findTodaysAction'
import { INITIAL_FORM_STATE, formReducer } from '../../reducers/FormReducer'

const DailyHarvest = () => {
  const [stateForm, dispatchForm] = useReducer(formReducer, INITIAL_FORM_STATE)
  const [stateErrors, dispatchErrors] = useReducer(
    errorReducer,
    INITIAL_ERROR_STATE
  )
  const { harvestDataState, setHarvestDataState } = useContext(DataContext)
  const { date, bucketsHarvested, comments } = stateForm.harvestForm
  const { errors } = stateErrors
  const clearHarvestFormData = INITIAL_FORM_STATE.harvestForm
  const existingData = dataChecker(harvestDataState, date)
  const contextCurrentDate = useContext(DateContext)
  const currentDate = date === '' ? contextCurrentDate : date
  const maxTemp = useMaxTemp()

  useCheckForExistingData(
    existingData,
    dispatchForm,
    'UPDATE_FORM',
    'harvestForm'
  )

  const handleEditClick = (newData) => {
    updateEditedForm(dispatchForm, 'SET_EDIT_ITEM_ID', newData.id)
    updateEditedForm(dispatchForm, 'harvestForm', newData)
  }

  const submit = (e) => {
    e.preventDefault()
    dispatchErrors({
      type: 'CREATE_ERRORS',
      payload: ''
    })

    if (existingData) {
      updateItemById(
        harvestDataState,
        stateForm.harvestForm,
        setHarvestDataState
      )
      updateEditedForm(dispatchForm, 'harvestForm', clearHarvestFormData)
      return
    }

    let newHarvestData = {
      id: uuidv4(),
      date: currentDate,
      bucketsHarvested: bucketsHarvested,
      comments: comments,
      maxTemp: maxTemp
    }

    //! this is an array of functions. New data is added to each function so we can look at its details
    const validations = [
      (newData) =>
        newData.bucketsHarvested === '' || newData.bucketsHarvested === '0'
          ? 'Please enter a the number of buckets collected'
          : null
    ]

    const errorMessages = validateFormData(newHarvestData, validations)
    console.log(errorMessages[0])

    if (errorMessages.length > 0) {
      // addError(errorMessages[0])
      dispatchErrors({
        type: 'CREATE_ERRORS',
        payload: errorMessages
      })
      return
    }
    if (!existingData) {
      updateItemById(harvestDataState, newHarvestData, setHarvestDataState)
    }
  }

  const todaysHarvest = findTodaysAction(harvestDataState, currentDate)
  const harvestFormActive = true
  useCheckForCurrentDateInfo(
    todaysHarvest,
    currentDate,
    dispatchForm,
    harvestFormActive
  )

  return (
    <section className='harvestSection'>
      <div className='errorsDiv'>
        {errors.length > 0 && <ErrorsAlert errors={errors} />}
      </div>
      <div className='cardContainer'>
        <ul className='cardUl'>
          {harvestDataState
            .slice()
            .reverse()
            .map((harvestDay) => (
              <RecordCards
                key={harvestDay.id}
                item={harvestDay}
                formState={stateForm.harvestForm}
                handleEditClick={handleEditClick}
                deleteItemById={() =>
                  deleteItemById(
                    harvestDataState,
                    harvestDay,
                    setHarvestDataState
                  )
                }
                submit={submit}
                dispatch={dispatchForm}
                formType={'harvestForm'}
                editItemId={stateForm.editItemId}
                fieldDefinitions={harvestFieldDefinitions}
              />
            ))}
        </ul>
      </div>
      <div className='formAndGraphContainer'>
        <div className='formWrp'>
          <h2 className='formTitle'>Daily Harvest</h2>
          <form className='recordTakingForm' onSubmit={submit}>
            <FormInput
              value={currentDate}
              divClass={'formDataInputDiv'}
              labelText={'Date:'}
              labelClass={'formLabel'}
              inputType={'date'}
              inputClass={'formInput'}
              formType={'harvestForm'}
              fieldName={'date'}
              dispatch={dispatchForm}
            />
            <FormInput
              value={bucketsHarvested}
              divClass={'formDataInputDiv'}
              labelText={'Buckets collected:'}
              labelClass={'formLabel'}
              inputType={'number'}
              inputClass={'formInput'}
              formType={'harvestForm'}
              fieldName={'bucketsHarvested'}
              dispatch={dispatchForm}
            />
            <FormInput
              value={comments}
              divClass={'formDataInputDiv'}
              labelText={'Comments:'}
              labelClass={'formLabel'}
              inputType={'textarea'}
              inputClass={'formInput'}
              formType={'harvestForm'}
              fieldName={'comments'}
              dispatch={dispatchForm}
            />

            <button className='submitButton' type='submit'>
              Submit
            </button>
          </form>
        </div>
        <div className='harvesGraphDiv'>
          <DailyHarvestGraph width={500} height={250} />
        </div>
      </div>
    </section>
  )
}

export default DailyHarvest
