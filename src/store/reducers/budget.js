import * as actionTypes from '../actions/actionTypes';

const initialState = {
    items: [],
    positiveAmount: 0,
    negativeAmount: 0,
    amount: 0
  }

const addItem = (state, action) => {
  const updatedState = {
    ...state,
    items: [...state.items],
  }
  updatedState.items.push({
    type: action.itemType,
    name: action.itemName,
    value: action.itemValue,
    category: action.itemCategory
  });

  action.itemType === 'append' ? 
  updatedState.positiveAmount = action.itemValue + updatedState.positiveAmount :
  updatedState.negativeAmount = updatedState.negativeAmount - action.itemValue;
  updatedState.amount = updatedState.negativeAmount + updatedState.positiveAmount;
  return updatedState;

}

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.ADD_ITEM:
        return addItem(state, action)
      default:
        return state;
  
    }
  }
  
  export default reducer;