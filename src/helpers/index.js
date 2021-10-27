export const getFormattedYear = (year) => {
  if (!year) {
    return '';
  }
  if (Number(year) > 10 && Number(year) < 20) {
    return 'лет'
  }
  const lastNumber = Number(year.toString().slice(-1));
  if (lastNumber === 1) {
    return 'год';
  }
  if (lastNumber > 1 && lastNumber < 5) {
    return 'года';
  }
  return 'лет';
}
