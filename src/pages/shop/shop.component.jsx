import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import Spinner from '../../components/spinner/spinner.component';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectCollectionIsFetching } from '../../redux/shop/shop.selectors';


const CollectionOverViewSpinner = Spinner(CollectionsOverview);
const CollectionPageSpiner = Spinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionFetching } = this.props;
    return(
      <div className="shop__page">
      <Route exact path={`${match.path}`} render={props => <CollectionOverViewSpinner isLoading={isCollectionFetching} {...props} />} />
      <Route path={`${match.path}/:collectionId`} render={props => <CollectionPageSpiner isLoading={isCollectionFetching} {...props} />} />
    </div>
    ); 
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectCollectionIsFetching
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);