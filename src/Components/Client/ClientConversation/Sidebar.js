import React, { useEffect } from "react";

function Sidebar({ getAllConversation, allConversations }) {
  useEffect(() => {
    const unsubscribe = getAllConversation();
    return unsubscribe;
  }, []);
  return (
    <div>
      {allConversations && allConversations.length === 0 ? (
        <div>no conversations</div>
      ) : allConversations && allConversations.length > 0 ? (
        <div>{
            allConversations.map((conversation) => {
                return <div>
                    <div>{conversation.candidate_name||'name'}</div>
                    <div>{conversation.last_message}</div>

                </div>
            })
        }</div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}

export default Sidebar;
