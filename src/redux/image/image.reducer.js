const INITIAL_STATE = {
  data: [],
  selImg: {}
};

const imgReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_IMG':
      return { ...state, data: action.payload };
    case 'SEL_IMG':
      return { ...state, selImg: action.payload };
    default:
      return state;
  }
};

export default imgReducer;