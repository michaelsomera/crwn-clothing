import {takeLatest, call, put, all} from 'redux-saga/effects';
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionAsync(){
   yield console.log('I am fired');

   try {
       const collectionRef = firestore.collection('collections');
       const snapshot = yield collectionRef.get();
       const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
       yield put(fetchCollectionsSuccess(collectionMap));
   } catch (error) {
       yield put(fetchCollectionsFailure(error));
   }

}
export function* fetchCollectionStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionAsync);
} 

export function* shopSagas(){
    yield all([
        call(fetchCollectionStart)
    ]);
}