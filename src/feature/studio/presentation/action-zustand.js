import { create } from "zustand";

const useActionStore = create((set, get) => ({
     isModalOpenedWithType: undefined,
     setModalType: (type) => set(() => ({ isModalOpenedWithType: type })),
}));

export default useActionStore;
