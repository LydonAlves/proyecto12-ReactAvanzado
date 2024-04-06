export const getGraphWidth = (width) => {
  if (width < 480) return 300
  else if (width < 700) return 400
  else if (width < 900) return 600
  else if (width < 1100) return 800
  else return 1000
}

export const getGraphHeight = (width) => {
  if (width < 480) return 250
  else if (width < 700) return 250
  else if (width < 900) return 300
  else return 500
}
