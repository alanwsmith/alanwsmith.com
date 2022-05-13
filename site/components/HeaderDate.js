export default function HeaderDate({ date }) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const dateObject = new Date(date)

  return `${months[dateObject.getMonth()]} - ${dateObject.getFullYear()}`
}
