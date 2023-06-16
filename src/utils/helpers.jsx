export const newItems = (data, text) => {
  const newData = data.map((item) => item[text])

  return ['all', ...new Set(newData)]
}

export const dateMinMax = (allfly, direction) => {
  let filterDate

  if (direction === 'departure') {
    filterDate = allfly.map((item) => item.departure.slice(0, 10))
  }
  if (direction === 'arrival') {
    filterDate = allfly.map((item) => item.arrival.slice(0, 10))
  }

  const sortMin = filterDate.sort((a, b) => {
    return b.localeCompare(a)
  })

  return sortMin
}
