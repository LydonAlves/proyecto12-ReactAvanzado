export const harvestFieldDefinitions = [
  { label: 'Harvest record for', fieldName: 'date', type: 'date' },
  {
    label: 'Number of buckets',
    fieldName: 'bucketsHarvested',
    type: 'number'
  },
  { label: 'Comments', fieldName: 'comments', type: 'textarea' }
]

export const deliveryFieldDefinitions = [
  { label: 'Delivery details for', fieldName: 'date', type: 'date' },
  { label: 'Number of punnets', fieldName: 'punnets', type: 'number' },
  { label: 'Litres of pulp', fieldName: 'pulp', type: 'number' },
  { label: 'Agent name', fieldName: 'agentsName', type: 'text' },
  { label: 'Receipt number', fieldName: 'receiptNumber', type: 'number' }
]
