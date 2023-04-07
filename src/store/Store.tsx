import { create } from "zustand";

interface State{
    category:string;
    setCategory:(value:string)=>void;
}
export const useStore = create<State>((set) => ({
    category: 'All',
    setCategory: (category) => set({ category }),
  }));