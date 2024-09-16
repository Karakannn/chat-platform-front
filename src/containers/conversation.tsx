import ConversationPanel from "@/components/common/conversation-panel";
import ConversationSidebar from "@/components/common/conversation-sidebar";
import { Outlet, useParams } from "react-router-dom";
import mockConversation from "@/__mocks__/conversations";

export default function ConversationContainer() {
  const { id } = useParams();
  
  return (
    <div className="w-full h-full flex">
      <ConversationSidebar conversations={[]} />
      {!id && <ConversationPanel />}
      <Outlet />
    </div>
  );
}
