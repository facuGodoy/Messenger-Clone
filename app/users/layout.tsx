import getUsers from "../actions/getUsers";
import SideBar from "../components/sidebar/SideBar";
import UserList from "./components/UserList";

export default async function UsersLayout({ children }: { children: React.ReactNode }) {
  const users = await getUsers();

  return (
    // @ts-expect-error Server Component
    <SideBar>
      <UserList items={users} />
      <div className="h-full">{children}</div>
    </SideBar>
  );
}
