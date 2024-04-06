export const validateFormData = (newData, validations) => {
  return validations
    .map((validation) => validation(newData))
    .filter((message) => message !== null)
}
