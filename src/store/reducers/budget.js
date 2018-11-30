import * as actionTypes from '../actions/actionTypes';

const initialState = {
    items: [],
    positiveAmount: 0,
    negativeAmount: 0,
    amount: 0,
    loading: false,
    error: null
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
  updatedState.error = null;
  updatedState.loading = false;
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
  updatedState.loading = false
  updatedState = {
    ...updatedState,
    ...recountAmounts(updatedState.items)
  }
  return updatedState
}

const itemLoadingStart = (state) => {
  let updatedState = {
    ...state,
    items: [...state.items],
  }
  updatedState.loading = true
  return updatedState
}

const clearItems = (state) => {
  let updatedState = {
    ...state,
    items: [],
  }  
  return updatedState
}

const itemLoadingFail = (state, action) => {
  let updatedState = {
    ...state,
    items: [...state.items],
  }
  updatedState.loading = false;
  updatedState.error = action.error;
  return updatedState
}

const itemLoadingEnd = (state) => {
  let updatedState = {
    ...state,
    items: [...state.items],
  }
  updatedState.loading = false
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
      case actionTypes.ITEM_LOADING_START:
        return itemLoadingStart(state)
      case actionTypes.ITEM_LOADING_FAIL:
        return itemLoadingFail(state, action)
      case actionTypes.ITEM_LOADING_END:
        return itemLoadingEnd(state, action)
      case actionTypes.CLEAR_ITEMS:
        return clearItems(state)
      default:
        return state;
  
    }
  }
  
  export default reducer;