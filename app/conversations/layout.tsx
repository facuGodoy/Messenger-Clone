import getConversations from "../actions/getConversations";
import getUsers from "../actions/getUsers";
import SideBar from "../components/sidebar/SideBar";
import ConversationsList from "./components/ConversationsList";

export default async function ConversationsLayout({ children }: { children: React.ReactNode }) {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    // @ts-expect-error Server Component
    <SideBar>
      <ConversationsList users={users} initialItems={conversations} />
      <div className="h-full">{children}</div>
    </SideBar>
  );
}
