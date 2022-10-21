import React from "react";
import Sidebar from "./Sidebar";
import MessageArea from "./MessageArea";
import { Grid } from "@mui/material";
import { collection, query, where,onSnapshot } from "firebase/firestore";
import { db } from "../../../config/firebaseInitisize";
function ClientConversation() {
const [allConversations, setAllConversations] = React.useState(null);
  const getAllConversation = async () => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    const clientId = loggedInUser.uid;
    const q = await query(
      collection(db, "conversations"),
      where("client_id", "==", clientId)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const conversation = [];
        querySnapshot.forEach((doc) => {
            conversation.push(doc.data());
        });
        setAllConversations(conversation);
        console.log("conversation ", conversation);
    });
    return unsubscribe;
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Sidebar allConversations={allConversations} getAllConversation={getAllConversation} />
        </Grid>
        <Grid item xs={9}>
          <MessageArea />
        </Grid>
      </Grid>
    </div>
  );
}

export default ClientConversation;
