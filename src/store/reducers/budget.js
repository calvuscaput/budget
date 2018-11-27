import * as actionTypes from '../actions/actionTypes';

const initialState = {
    items: [
      {
        type: 'deduct',
        name: 'хрень',
        value: 100,
        category: '1',
        key: '1',
        mobileTrigger: false
      },
      {
        type: 'deduct',
        name: 'хрень',
        value: 100,
        category: '1',
        key: '2',
        mobileTrigger: false
      },
      {
        type: 'append',
        name: 'хрень',
        value: 100,
        category: '2',
        key: '3',
        mobileTrigger: false
      },
      {
        type: 'append',
        name: 'хрень',
        value: 100,
        category: '2',
        key: '4',
        mobileTrigger: false
      },
      {
        type: 'deduct',
        name: 'хрень',
        value: 100,
        category: '3',
        key: '5',
        mobileTrigger: false
      },
      {
        type: 'deduct',
        name: 'хрень',
        value: 100,
        category: '3',
        key: '6',
        mobileTrigger: false
      },
      {
        type: 'deduct',
        name: 'хрень',
        value: 100,
        category: '3',
        key: '7',
        mobileTrigger: false
      },
      {
        type: 'append',
        name: 'хрень',
        value: 100,
        category: '4',
        key: '8',
        mobileTrigger: false
      },
      
    ],
    positiveAmount: 0,
    negativeAmount: 0,
    amount: 0
  }


  const mobileShowItem = (state, action) => {
    let updatedState = {
      ...state,
      items: [...state.items],
    }
    updatedState.items = updatedState.items.map((item) => {
      if (item.key === action.key) {
        item.mobileTrigger === false ?
        item.mobileTrigger = true :
        item.mobileTrigger = false      }
      return item;
    })
    return updatedState;
  }

const recountAmounts = (items) => {
  const amounts = {
    positiveAmount: 0,
    negativeAmount: 0,
    amount: 0
  }
  items.map(item => {
    item.type === 'append' ?
    amounts.positiveAmount = amounts.positiveAmount + item.value :
    amounts.negativeAmount = amounts.negativeAmount + item.value;
    return null
  })
  amounts.amount = amounts.positiveAmount - amounts.negativeAmount;

  return amounts
}

const addItem = (state, action) => {
  let updatedState = {
    ...state,
    items: [...state.items],
  }
  updatedState.items.unshift({
    type: action.itemType,
    name: action.itemName,
    value: action.itemValue,
    category: action.itemCategory,
    key: action.itemKey,
    mobileTrigger: false
  });
  updatedState = {
    ...updatedState,
    ...recountAmounts(updatedState.items)
  }
  return updatedState;

}

const removeItem = (state, action) => {
  let updatedState = {
    ...state,
    items: [...state.items],
  }

  updatedState.items = updatedState.items.filter((item) => {
    return item.key !== action.key;
  });
  updatedState = {
    ...updatedState,
    ...recountAmounts(updatedState.items)
  }
  return updatedState
}

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.ADD_ITEM:
        return addItem(state, action);
      case actionTypes.REMOVE_ITEM:
        return removeItem(state, action);
      case actionTypes.MOBILE_SHOW_ITEM:
        return mobileShowItem(state, action);
      default:
        return state;
  
    }
  }
  
  export default reducer;