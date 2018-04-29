let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Agost',
  'September',
  'October',
  'November',
  'December'
]
export function convertDate(string) {
  const year = string.substr(0, 4);
  const monthFake = string.substr(5, 2);
  //Replace 0 in months
  let month = monthFake.replace('0', '');
  const day = string.substr(8,2);
  return `${day}/${months[month]}/${year}`;
}