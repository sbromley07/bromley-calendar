const types = {
  CREATE_APPOINTMENT: 'CREATE_APPOINTMENT',
  SELECT_APPOINTMENT: 'SELECT_APPOINTMENT',
  UPDATE_APPOINTMENT: 'UPDATE_APPOINTMENT',
  DELETE_APPOINTMENT: 'DELETE_APPOINTMENT'
};

const createAppointment = appointment => ({
  type: types.CREATE_APPOINTMENT,
  appointment
});

const selectAppointment = id => ({
  type: types.SELECT_APPOINTMENT,
  id
});

const updateAppointment = (id, appointment) => ({
  type: types.UPDATE_APPOINTMENT,
  id,
  appointment
});

const deleteAppointment = id => ({
  type: types.DELETE_APPOINTMENT,
  id
});

export {
  createAppointment,
  selectAppointment,
  updateAppointment,
  deleteAppointment,
  types
};
