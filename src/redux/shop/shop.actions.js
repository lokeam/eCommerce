import ShoptActionTypes from './shop.types';

export const updateCollections = (collectionsMap) => ({
  type: ShoptActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
});