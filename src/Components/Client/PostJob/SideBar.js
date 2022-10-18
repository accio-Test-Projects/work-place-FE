import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs,onSnapshot } from "firebase/firestore";
import { db } from "../../../config/firebaseInitisize";
function SideBar() {
  const [allJobs, setAllJobs] = useState(null);
  let loggedInUser = JSON.parse(localStorage.getItem("user"));
  let clientId = loggedInUser.uid;
  const fetchAllJobs = async () => {
    const q = query(collection(db, "jobs"), where("client_id", "==", clientId));

    const querySnapshot = await getDocs(q);
    let jobs = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      jobs.push(doc.data());
    });
    setAllJobs(jobs);
  };
  useEffect(() => {
    fetchAllJobs();
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
