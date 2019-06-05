import {
  EMPLOYEE_CREATE,
  EMPLOYEE_UPDATE
} from '../actions/types'

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
  employees: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      const { prop, value } = action.payload;
      return { ...state, [prop]: value }
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
}