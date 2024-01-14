// FireBase Queries Used
import { db } from "./firebase.js";
import { arrayUnion, doc, updateDoc, collection, query, where, limit, getDocs, addDoc, deleteDoc } from "firebase/firestore";

async function updateUser(numslot, uid, gid, id) {
    const path = 'Users/' + id;
    console.log(path);
    const userdoc = doc(db, path);
    if (numslot === 1) {
        const docData = {
            GID1: gid
        };

        await updateDoc(userdoc, docData);
    } else if (numslot === 2) {
        const docData = {
            GID2: gid
        };

        await updateDoc(userdoc, docData);
    } else if (numslot === 3) {
        const docData = {
            GID3: gid
        };

        await updateDoc(userdoc, docData);
    } else if (numslot === 4) {
        const docData = {
            GID4: gid
        };

        await updateDoc(userdoc, docData);
    } else {
        const docData = {
            GID5: gid
        };
        await updateDoc(userdoc, docData);
    }
    return true;
}

async function addUserToGroup(uid, id) {
    const path = 'WatchLists/' + id;
    console.log(path);
    const groupdoc = doc(db, path);
    const docData = {
        members: arrayUnion(uid)
    }
    await updateDoc(groupdoc, docData)
}

async function getGroupInformation(gid) {
    var data = [];
    const gQuery = query(
        collection(db, "WatchLists"),
        where("GID", "==", gid), 
        limit(1)
    );

    const querySnapshot = await getDocs(gQuery);
    querySnapshot.forEach((doc) => {
        data.push([doc.data(), doc.id]);
    });
    return data;
}


async function getWatchList(gid) {
    var data = [];
    const WLquery = query(
        collection(db, 'Content'), 
        where("GID", "==", gid), 
        limit(10)
    );

    const querySnapshot = await getDocs(WLquery);
    querySnapshot.forEach((doc) => {
        data.push([doc.data(), doc.id]);
    });
    return data;
}


async function addToWatchList(gid, cid, c_name) {
    // We need to first see if it already exists.
    const  contentQuery = query(
        collection(db, 'content'), 
        where("GID", "==", gid),
        where("CID", "==", cid),
        limit(1)
    );

    const querySnapshot = await getDocs(contentQuery);
    if (querySnapshot.size === 0) {
        // add it
        const docRef = await addDoc(collection(db, "Content"), {
            CID: cid, 
            ContentName: c_name,
            GID: gid,
            status: "ongoing"
        });
    
        console.log("Document Written with ID: ", docRef.id)
    } else {
        console.log("This already exists in the WatchList")

    }
}

async function updateWatchStatus(docID, uid) {
    const path = "Content/" + docID;
    console.log(uid);
    const docRef = doc(db, path);
    await updateDoc(docRef, {
        WatchedBy: arrayUnion(uid)
    });
    console.log("Document Updated!")
}


async function removeFromWatchList(docID) {
    const path = "Content/" + docID;
    await deleteDoc(doc(db, path));
}

async function createWatchList(gid, gname, gpass, leaderuid) {
    const docRef = await addDoc(collection(db, "WatchLists"),  {
        GID: gid, 
        GroupName: gname, 
        Pass: gpass, 
        LeaderUID: leaderuid,
        members: arrayUnion(leaderuid)
    });
    console.log("Document Written with ID: ", docRef.id);
}


export { updateUser, addUserToGroup, getWatchList, addToWatchList, removeFromWatchList, getGroupInformation, updateWatchStatus, createWatchList };