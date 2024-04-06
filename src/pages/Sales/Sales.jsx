import { useContext, useEffect, useReducer, useState } from 'react'
import './Sales.css'
import { v4 as uuidv4 } from 'uuid'
import { updateItemById } from '../../utils/updateItemById'
import { DataContext } from '../../context/DataContext'
import FormInput from '../../components/FormComponent/FormInput'
import findData from '../../utils/findData'
import { dataChecker } from '../../utils/dateChecker'
import IncomeGraph from '../../components/Graphs/IncomeGraph'
import DeliveriesTotalGraph from '../../components/Graphs/DeliveriesTotalGraph'
import updateEditedForm from '../../utils/updateEditedForm'
import useCheckForExistingData from '../../custom/useCheckForExistingData'
import { INITIAL_FORM_STATE, formReducer } from '../../reducers/FormReducer'

const Sales = () => {
  const [stateForm, dispatchForm] = useReducer(formReducer, INITIAL_FORM_STATE)
  const { deliveryDetails, salesDetails, setSalesDetails } =
    useContext(DataContext)

  const lastDelivery = deliveryDetails[deliveryDetails.length - 1]
  const [selectedDelivery, setSelectedDelivery] = useState(lastDelivery)
  const { punnetsSold, pricePunnets, pulpSold, pricePulp, date } =
    stateForm.unitsSoldForm
  const clearSalesForm = INITIAL_FORM_STATE.unitsSoldForm

  const existingData = dataChecker(salesDetails, date)
  useCheckForExistingData(
    existingData,
    dispatchForm,
    'UPDATE_FORM',
    'unitsSoldForm'
  )

  const salesDataPoint = findData(salesDetails, selectedDelivery)

  useEffect(() => {
    if (salesDataPoint) {
      updateEditedForm(dispatchForm, 'unitsSoldForm', salesDataPoint)
    } else {
      updateEditedForm(dispatchForm, 'unitsSoldForm', clearSalesForm)
    }
  }, [salesDataPoint])

  const handleChangeDropdown = (e) => {
    const selectedId = e.target.value
    const selectedItem = deliveryDetails.find(
      (delivery) => delivery.id.toString() === selectedId
    )
    setSelectedDelivery(selectedItem)
  }

  const submit = (e) => {
    e.preventDefault()

    if (existingData) {
      updateItemById(salesDetails, stateForm.unitsSoldForm, setSalesDetails)
      updateEditedForm(dispatchForm, 'unitsSoldForm', clearSalesForm)
      return
    }

    let sales = {
      id: uuidv4(),
      deliveryId: selectedDelivery.id,
      punnetsSold: punnetsSold,
      pricePunnets: pricePunnets,
      pulpSold: pulpSold,
      pricePulp: pricePulp,
      date: selectedDelivery.date
    }

    updateItemById(salesDetails, sales, setSalesDetails)
  }

  return (
    <section className='salesSection'>
      <div className='salesFormWrp'>
        <form className='salesForm'>
          <h2 className='formTitle'>Delivery details</h2>
          <div>
            <select
              name='selectDelivery'
              id='selectDelivery'
              onChange={handleChangeDropdown}
              value={selectedDelivery}
            >
              <option>Select a delivery</option>
              {deliveryDetails
                .slice()
                .reverse()
                .map((delivery) => (
                  <option
                    key={delivery.id}
                    value={delivery.id}
                    className='dropDownOption'
                  >
                    {delivery.date} {delivery.agentsName}
                  </option>
                ))}
            </select>
          </div>
          <FormInput
            value={selectedDelivery.date}
            divClass={'formDataInputDiv salesDeliveriesInputDiv'}
            labelText={'Date:'}
            labelClass={'formLabel'}
            inputType={'date'}
            inputClass={'formInput hideInputBorder'}
            formType={'deliveriesForm'}
            fieldName={'date'}
            dispatch={dispatchForm}
            disabled={true}
          />
          <FormInput
            value={selectedDelivery.punnets}
            divClass={'formDataInputDiv salesDeliveriesInputDiv'}
            labelText={'Punnets'}
            labelClass={'formLabel'}
            inputType={'number'}
            inputClass={'formInput hideInputBorder'}
            formType={'deliveriesForm'}
            fieldName={'punnets:'}
            dispatch={dispatchForm}
            disabled={true}
          />
          <FormInput
            value={selectedDelivery.pulp}
            divClass={'formDataInputDiv salesDeliveriesInputDiv'}
            labelText={'Pulp: litres'}
            labelClass={'formLabel'}
            inputType={'number'}
            inputClass={'formInput hideInputBorder'}
            formType={'deliveriesForm'}
            fieldName={'pulp'}
            dispatch={dispatchForm}
            disabled={true}
          />
          <FormInput
            value={selectedDelivery.agentsName}
            divClass={'formDataInputDiv salesDeliveriesInputDiv'}
            labelText={'Agent:'}
            labelClass={'formLabel'}
            inputType={'text'}
            inputClass={'formInput hideInputBorder'}
            formType={'deliveriesForm'}
            fieldName={'agentsName'}
            dispatch={dispatchForm}
            disabled={true}
          />
          <FormInput
            value={selectedDelivery.receiptNumber}
            divClass={'formDataInputDiv salesDeliveriesInputDiv'}
            labelText={'Receipt #'}
            labelClass={'formLabel'}
            inputType={'number'}
            inputClass={'formInput hideInputBorder'}
            formType={'deliveriesForm'}
            fieldName={'receiptNumber'}
            dispatch={dispatchForm}
            disabled={true}
          />
        </form>
        <form className='salesForm unitsSoldForm' onSubmit={submit}>
          <h2 className='formTitle'>Units sold</h2>
          <div className='salesUnitsDiv'>
            <h3 className='unitSoldTitle'>Punnets</h3>
            <FormInput
              value={punnetsSold}
              divClass={'formDataInputDiv unitsSoldInputDiv'}
              labelText={'Punnets sold'}
              labelClass={'formLabel'}
              inputType={'number'}
              inputClass={'formInput'}
              formType={'unitsSoldForm'}
              fieldName={'punnetsSold'}
              dispatch={dispatchForm}
            />
            <FormInput
              value={pricePunnets}
              divClass={'formDataInputDiv'}
              labelText={'Price paid'}
              labelClass={'formLabel'}
              inputType={'number'}
              inputClass={'formInput'}
              formType={'unitsSoldForm'}
              fieldName={'pricePunnets'}
              dispatch={dispatchForm}
            />
          </div>
          <div className='salesUnitsDiv'>
            <h3 className='unitSoldTitle'>Pulp</h3>
            <FormInput
              value={pulpSold}
              divClass={'formDataInputDiv unitsSoldInputDiv'}
              labelText={'Pulp sold'}
              labelClass={'formLabel'}
              inputType={'number'}
              inputClass={'formInput'}
              formType={'unitsSoldForm'}
              fieldName={'pulpSold'}
              dispatch={dispatchForm}
            />
            <FormInput
              value={pricePulp}
              divClass={'formDataInputDiv '}
              labelText={'Price paid'}
              labelClass={'formLabel'}
              inputType={'number'}
              inputClass={'formInput'}
              formType={'unitsSoldForm'}
              fieldName={'pricePulp'}
              dispatch={dispatchForm}
            />
          </div>
          <button type='submit' className='submitButton'>
            Update details
          </button>
        </form>
      </div>
      <div className='salesPageGraphDiv'>
        <div className='harvesGraphDiv'>
          <DeliveriesTotalGraph width={500} height={250} />
        </div>
        <div className='harvesGraphDiv'>
          <IncomeGraph width={500} height={250} />
        </div>
      </div>
    </section>
  )
}

export default Sales
