import db from '../components/Firebase.mjs';
import {GeoPoint, Timestamp, collection,getDocs, query, updateDoc, where, addDoc, setDoc,doc} from 'firebase/firestore'
export const setRides = async (email,rideinfo) => {
    const q = query(collection(db,'rides'),where('email','==',email));
    // setDoc(q,{
    //     ...data,
    //     booked : [...booked,ride]
    // })
    try{
        const snapshot = await getDocs(q);
        if(snapshot.size > 0){
            snapshot.forEach(item => {
                console.log(item.data());
                updateDoc(doc(db,"rides",item.id),{
                    rides : [...item.data().rides,rideinfo]
                }).then(res => localStorage.setItem("response","success")).catch(err => {
                    localStorage.setItem("response","failed")
                });
            })
        }
        else{
            addDoc(collection(db,"rides"),{
                email,
                rides : [rideinfo]
            }).then(res => localStorage.setItem("response","sucess")).catch(err => {
                localStorage.setItem("response","failed")
            });
        }
    }
    catch(err){
        console.log(err);
    }
}

export const getRides = async (email) => {
    const q = query(collection(db,'rides'),where('email','==',email));
    var ans = [];
    try{
        const snapshot = await getDocs(q);
        snapshot.forEach(item => {
            ans = item.data();
        })
    }
    catch(err){
        console.log(err);
    }
    return ans;
}

export const delRide = async (email,ridesarr) => {
    const q = query(collection(db,'rides'),where('email','==',email));
    console.log(ridesarr)
    try{
        const snapshot = await getDocs(q);
        snapshot.forEach(item => {
            updateDoc(doc(db,"rides",item.id),{
                rides : ridesarr
            }).then(res => { localStorage.removeItem('name')}).catch(err => {
                console.log(err)
            });
        })
    }
    catch(err){
        console.log(err);
    }
}