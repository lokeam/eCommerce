import React from 'react';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import Spinner from '../../components/spinner/spinner.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

const CollectionOverViewSpinner = Spinner(CollectionsOverview);
const CollectionPageSpiner = Spinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };
  unsubscribeFromSnapshot = null;
  
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({
        loading: false
      });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return(
      <div className="shop__page">
      <Route exact path={`${match.path}`} render={(props) => <CollectionOverViewSpinner isLoading={loading} {...props} />} />
      <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageSpiner isLoading={loading} {...props} />} />
    </div>
    ) 
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);