import getConversations from "../actions/getConversations";
import SideBar from "../components/sidebar/SideBar";
import ConversationsList from "./components/ConversationsList";

export default async function ConversationsLayout({ children }: { children: React.ReactNode }) {
  const conversations = await getConversations();

  return (
    // @ts-expect-error Server Component
    <SideBar>
      <ConversationsList initialItems={conversations} />
      <div className="h-full">{children}</div>
    </SideBar>
  );
}
