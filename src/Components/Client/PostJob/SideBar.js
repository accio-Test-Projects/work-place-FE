import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs,onSnapshot } from "firebase/firestore";
import { db } from "../../../config/firebaseInitisize";
function SideBar() {
  const [allJobs, setAllJobs] = useState([]);
  let loggedInUser = JSON.parse(localStorage.getItem("user"));
  let clientId = loggedInUser.uid;


  const fetchAllJobs = async () => {
    const q = query(collection(db, "jobs"), where("client_id", "==", clientId));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          setAllJobs((prev) => [...prev, change.doc.data()])
        }
      });
    });
    return unsubscribe;
  };
  
  useEffect(() => {
    const unsubscribe=fetchAllJobs();
    return () =>unsubscribe
  }, []);
  return (
    <div>
      {allJobs && allJobs.length === 0 ? (
        <div>no data</div>
      ) : allJobs && allJobs.length > 0 ? (
        <div>
          {allJobs.map((job) => {
            return (
              <div>
                <div>{job.title}</div>
                <div>{job.description}</div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}

export default SideBar;
