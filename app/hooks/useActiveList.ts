import { create } from "zustand";

interface ActiveSlistStore {
  members: string[];
  add: (id: string) => void;
  remove: (id: string) => void;
  set: (id: string[]) => void;
}

const useActiveList = create<ActiveSlistStore>((set) => ({
  members: [],
  add: (id) => set((state) => ({ members: [...state.members, id] })),
  remove: (id) => set((state) => ({ members: state.members.filter((memberId) => memberId !== id) })),
  set: (ids) => set({ members: ids }),
}));

export default useActiveList;
