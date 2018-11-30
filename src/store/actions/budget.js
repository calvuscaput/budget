import * as actionTypes from './actionTypes';
import axios from '../../axios-data';
export const addItem = (item) => {
  return {
    type: actionTypes.ADD_ITEM,
    itemName: item.name,
    itemType: item.itemType,
    itemValue: item.value,
    itemCategory: item.category,
    itemKey: item.key,
    userId: item.userId
  }
}

export const removeItem = key => {
  return {
    type: actionTypes.REMOVE_ITEM,
    key: key
  }
}

export const itemLoadingStart = () => {
  return {
    type: actionTypes.ITEM_LOADING_START,
  }
}

export const itemLoadingFail = (error) => {
  return {
    type: actionTypes.ITEM_LOADING_FAIL,
    error: error
  }
}

export const mobileShowItem = key => {
  return {
    type: actionTypes.MOBILE_SHOW_ITEM,
    key: key
  }
}
export const itemLoadingEnd = () => {
  return {
    type: actionTypes.ITEM_LOADING_END,
  }
}

export const clearItems = () => {
  return {
    type: actionTypes.CLEAR_ITEMS,
  }
}

export const sendItem = (itemData, token) => {
  return dispatch => {
    const queryparams = '?auth=' + token;
    dispatch(itemLoadingStart())
    
    axios.post('/items.json' + queryparams, itemData)    
    .then(response => {
      dispatch(addItem({...itemData, key: response.data.name}));
      
    })
    .catch(error => {
      dispatch(itemLoadingFail(error));
      
    })
  }

}

export const removeRemoteData = (key, token) => {
  
  return dispatch => {
    const queryparams = '?auth=' + token;
    dispatch(itemLoadingStart());
    axios.delete(`/items/${key}.json` + queryparams)
    .then(response => {
      if (response) {
        dispatch(removeItem(key))
      }
      dispatch(itemLoadingEnd());      
    })
    .catch(error => {
      dispatch(itemLoadingFail(error.response.data.error));
    })
  }
}

export const setItems = (userId, token) => {
  return dispatch => {
    dispatch(itemLoadingStart())
    dispatch(clearItems())
    const queryparams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios.get('items.json' + queryparams)
    .then(response => {
      dispatch(itemLoadingEnd())
      if (response.data) {
        Object.keys(response.data).map(key => {
          const item = response.data[key];
          dispatch(addItem({...item, key: key}));
          return key;
        });

      }
    })
    .catch(error => {
            
       dispatch(itemLoadingFail(error));
    })
  }
}