import React, { useEffect } from "react";
import { query, where, getDocs,doc, collection,deleteDoc } from "firebase/firestore";
import { db } from "../../../config/firebaseInitisize";
import ApplicationTable from "../../common/ApplicationTable";
function CLientApplicants() {
  const [applications, setAllApplications] = React.useState(null);
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  const clientId = loggedInUser.uid;
  const fetchAllApplications = async () => {
    try {
      const q = query(
        collection(db, "applications"),
        where("client_id", "==", clientId)
      );

      const querySnapshot = await getDocs(q);
      let applications = [];
      querySnapshot.forEach((doc) => {
        applications.push(doc.data());
        console.log(applications);
      });
      setAllApplications(applications);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllApplications();
  }, []);

  const handleAction = async (action,Applicationdata) => {
    console.log(action,Applicationdata);
    if(action==='reject'){
      try{
      await deleteDoc(doc(db, "applications",Applicationdata.application_id));
      const filteredApplications = applications.filter((application) => {
        return application.application_id !== Applicationdata.application_id;
      })
      setAllApplications(filteredApplications);
      }
      catch(err){
        console.log(err);
      }
    }

  }
  
  return (
    <div>
      {applications && applications.length === 0 ? (
        <div>no applications</div>
      ) : applications && applications.length > 0 ? (
        <div>
          <ApplicationTable
            handleAction={handleAction}
            buttons={true}
            columns={[
              { label: "Candidate Name", key: "candidate_name" },
              { label: "Job Title", key: "job_title" },
              { label: "Budget", key: "project_bugdet" },
              { label: "Status", key: "interest_showen" },
              { label: "date", key: "createdAt" },
            ]}
            rows={applications}
          />
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}

export default CLientApplicants;
