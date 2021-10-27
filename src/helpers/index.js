export const getFormattedYear = (year) => {
  if (!year) {
    return '';
  }
  if (Number(year) === 1) {
    return 'год';
  }
  if ((Number(year) > 1 && Number(year) < 5) || Number(year) < 1) {
    return 'года';
  }
  return 'лет';
}
