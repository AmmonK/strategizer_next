import { create } from 'zustand';

const useFormStore = create((set) => ({
  critical: 0,
  setCritical: (critical) => set({ critical }),
  cost: 0,
  setCost: (cost) => set({ cost }),
  data: 0,
  setData: (data) => set({ data }),
  time: 0,
  setTime: (time) => set({ time }),
  testName: '',
  setTestName: (testName) => set({ testName }),
  deadline: '',
  setDeadline: (deadline) => set({ deadline }),
  assignedTo: '',
  setAssignedTo: (assignedTo) => set({ assignedTo }),
  duration: '',
  setDuration: (duration) => set({ duration }),
}));

export default useFormStore;