function formatDate(date) {
  const year = date.getFullYear()
  const month = ("0" + (date.getMonth() + 1)).slice(-2)
  const day = ("0" + date.getDate()).slice(-2)
  const hour = ("0" + date.getHours()).slice(-2)
  const minute = ("0" + date.getMinutes()).slice(-2)
  return {
    date: `${year}-${month}-${day}`,
    hour: `${hour}:${minute}`,
  }
}

module.exports = formatDate
