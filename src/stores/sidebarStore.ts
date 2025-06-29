import { create } from 'zustand'

interface SidebarState {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void 
  toggle: () => void
}

export const useSidebarStore = create<SidebarState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))
