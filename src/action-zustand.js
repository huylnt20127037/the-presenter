import { create } from "zustand";

const useActionStore = create((set, get) => ({
     isModalOpenedWithType: undefined,


     setModalType: (type) => set((state) => ({ isModalOpenedWithType: type })),

     submit: () => {

     },

}));

export default useActionStore;
