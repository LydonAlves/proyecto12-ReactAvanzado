import { useContext, useReducer } from 'react'
import './MarketDeliveries.css'
import { v4 as uuidv4 } from 'uuid'
import { updateItemById } from '../../utils/updateItemById'
import { DataContext } from '../../context/DataContext'
import { deleteItemById } from '../../utils/deleteItemById'
import ErrorsAlert from '../../components/ErrorsComponent/ErrorsAlert'
import RecordCards from '../../components/RecordCards/RecordCards'
import { deliveryFieldDefinitions } from '../../utils/fieldDefinitions'
import FormInput from '../../components/FormComponent/FormInput'
import { dataChecker } from '../../utils/dateChecker'
import { DateContext } from '../../context/DateContext'
import DeliveriesTotalGraph from '../../components/Graphs/DeliveriesTotalGraph'
import { validateFormData } from '../../utils/validateFormData'
import updateEditedForm from '../../utils/updateEditedForm'
import useCheckForExistingData from '../../custom/useCheckForExistingData'
import { INITIAL_ERROR_STATE, errorReducer } from '../../reducers/ErrorsReducer'
import findTodaysAction from '../../utils/findTodaysAction'
import useCheckForCurrentDateInfo from '../../custom/useCheckForCurrentDateInfo'
import { INITIAL_FORM_STATE, formReducer } from '../../reducers/FormReducer'

const MarketDeliveries = () => {
  const [stateForm, dispatchForm] = useReducer(formReducer, INITIAL_FORM_STATE)
  const [stateErrors, dispatchErrors] = useReducer(
    errorReducer,
    INITIAL_ERROR_STATE
  )
  const { deliveryDetails, setDeliveryDetails } = useContext(DataContext)
  const { punnets, pulp, agentsName, receiptNumber, date } =
    stateForm.deliveriesForm
  const existingData = dataChecker(deliveryDetails, date)
  const { errors } = stateErrors
  const clearDeliveriesFormData = INITIAL_FORM_STATE.deliveriesForm
  const contextCurrentDate = useContext(DateContext)
  const currentDate = date === '' ? contextCurrentDate : date

  useCheckForExistingData(
    existingData,
    dispatchForm,
    'UPDATE_FORM',
    'deliveriesForm'
  )

  const handleEditClick = (newData) => {
    updateEditedForm(dispatchForm, 'SET_EDIT_ITEM_ID', newData.id)
    updateEditedForm(dispatchForm, 'deliveriesForm', newData)
  }

  const submit = (e) => {
    e.preventDefault()
    dispatchErrors({
      type: 'CREATE_ERRORS',
      payload: ''
    })

    if (stateForm.editItemId) {
      updateItemById(
        deliveryDetails,
        stateForm.deliveriesForm,
        setDeliveryDetails
      )
      updateEditedForm(dispatchForm, 'deliveriesForm', clearDeliveriesFormData)
      return
    }

    let newData = {
      id: uuidv4(),
      date: currentDate,
      punnets: punnets,
      pulp: pulp,
      agentsName: agentsName,
      receiptNumber: receiptNumber
    }

    const validations = [
      (newData) =>
        newData.agentsName === '' ? "Please enter the agent's name" : null,
      (newData) =>
        newData.receiptNumber === '' || newData.receiptNumber === 0
          ? 'Please enter a receipt number'
          : null,
      (newData) =>
        newData.punnets === '' ||
        (newData.punnets === 0 && newData.pulp === '') ||
        newData.pulp === 0
          ? 'Please enter the amount of either punnets or litres of pulp'
          : null
    ]

    const errorMessages = validateFormData(newData, validations)

    if (errorMessages.length > 0) {
      dispatchErrors({
        type: 'CREATE_ERRORS',
        payload: errorMessages
      })
    }
    updateItemById(deliveryDetails, newData, setDeliveryDetails)
    updateEditedForm(dispatchForm, 'deliveriesForm', clearDeliveriesFormData)
  }

  const todaysDelivery = findTodaysAction(deliveryDetails, currentDate)

  const harvestFormActive = false
  useCheckForCurrentDateInfo(
    todaysDelivery,
    currentDate,
    dispatchForm,
    harvestFormActive
  )

  return (
    <section className='deliveriesSection'>
      <div className='errorsDiv'>
        {errors.length > 0 && <ErrorsAlert errors={errors} />}
      </div>
      <div className='cardContainer'>
        <ul className='cardUl'>
          {deliveryDetails
            .slice()
            .reverse()
            .map((delivery) => (
              <RecordCards
                key={delivery.id}
                item={delivery}
                formState={stateForm.deliveriesForm}
                handleEditClick={handleEditClick}
                deleteItemById={() =>
                  deleteItemById(deliveryDetails, delivery, setDeliveryDetails)
                }
                submit={submit}
                dispatch={dispatchForm}
                formType={'deliveriesForm'}
                editItemId={stateForm.editItemId}
                fieldDefinitions={deliveryFieldDefinitions}
              />
            ))}
        </ul>
      </div>
      <div className='formAndGraphContainer'>
        <div className='formWrp'>
          <h2 className='formTitle'>Delivery details</h2>
          <form className='recordTakingForm' onSubmit={submit}>
            <FormInput
              value={currentDate}
              divClass={'formDataInputDiv'}
              labelText={'Date:'}
              labelClass={'formLabel'}
              inputType={'date'}
              inputClass={'formInput'}
              formType={'deliveriesForm'}
              fieldName={'date'}
              dispatch={dispatchForm}
            />
            <FormInput
              value={punnets}
              divClass={'formDataInputDiv'}
              labelText={'Punnets'}
              labelClass={'formLabel'}
              inputType={'number'}
              inputClass={'formInput'}
              formType={'deliveriesForm'}
              fieldName={'punnets'}
              dispatch={dispatchForm}
            />
            <FormInput
              value={pulp}
              divClass={'formDataInputDiv'}
              labelText={'Pulp: litres'}
              labelClass={'formLabel'}
              inputType={'number'}
              inputClass={'formInput'}
              formType={'deliveriesForm'}
              fieldName={'pulp'}
              dispatch={dispatchForm}
            />
            <FormInput
              value={agentsName}
              divClass={'formDataInputDiv'}
              labelText={'Agent name'}
              labelClass={'formLabel'}
              inputType={'text'}
              inputClass={'formInput'}
              formType={'deliveriesForm'}
              fieldName={'agentsName'}
              dispatch={dispatchForm}
            />
            <FormInput
              value={receiptNumber}
              divClass={'formDataInputDiv'}
              labelText={'Receipt #'}
              labelClass={'formLabel'}
              inputType={'number'}
              inputClass={'formInput'}
              formType={'deliveriesForm'}
              fieldName={'receiptNumber'}
              dispatch={dispatchForm}
            />
            <button className='submitButton' type='submit'>
              Submit
            </button>
          </form>
        </div>
        <div className='harvesGraphDiv'>
          <DeliveriesTotalGraph width={500} height={250} />
        </div>
      </div>
    </section>
  )
}

export default MarketDeliveries
