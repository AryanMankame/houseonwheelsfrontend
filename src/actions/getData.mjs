import db from '../components/Firebase.mjs';
import {collection,getDocs} from 'firebase/firestore'
const getCaravan = async () => {
    var caravanList = await getDocs(collection(db,'caravan-list'));
    var finalList = [];
    finalList = caravanList.docs.map((item) => {
        return item.data();
    })
    return finalList;
}
export default getCaravan;