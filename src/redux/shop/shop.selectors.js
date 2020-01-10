import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ?
      Object.keys(collections).map(key => collections[key]) :
      []

);

export const selectCollectionID = collectionURLParam => createSelector(
  [selectCollections],
  collections => (collections ?
    collections[collectionURLParam] : null)
);

export const selectCollectionIsFetching = createSelector(
  [selectShop],
  shop => shop.isFetching
);
