const types = {
  NEXT_MONTH: 'NEXT_MONTH',
  PREVIOUS_MONTH: 'PREVIOUS_MONTH'
};

const nextMonth = month => ({
  type: types.NEXT_MONTH,
  currentMonth: month
});

const previousMonth = month => ({
  type: types.PREVIOUS_MONTH,
  currentMonth: month
});

export { nextMonth, previousMonth, types };
