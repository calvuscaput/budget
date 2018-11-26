import * as actionTypes from './actionTypes';

export const addItem = (name, itemType, category, value, key) => {
  return {
    type: actionTypes.ADD_ITEM,
    itemName: name,
    itemType: itemType,
    itemValue: value,
    itemCategory: category,
    itemKey: key
  }
}

export const removeItem = key => {
  return {
    type: actionTypes.REMOVE_ITEM,
    key: key
  }
}

export const mobileShowItem = key => {
  return {
    type: actionTypes.MOBILE_SHOW_ITEM,
    key: key
  }
}
