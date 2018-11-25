import * as actionTypes from './actionTypes';

export const addItem = (name, itemType, category, value) => {
  return {
    type: actionTypes.ADD_ITEM,
    itemName: name,
    itemType: itemType,
    itemValue: value,
    itemCategory: category
  }
}