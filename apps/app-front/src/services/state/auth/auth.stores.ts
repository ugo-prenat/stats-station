import { IFrontBot, IFrontBroadcaster } from '@alfred/models';
import { create } from 'zustand';

export const AUTH_STORAGE_KEY = 'auth';

interface IAuthStore {
  bot: IFrontBot | null;
  broadcaster: IFrontBroadcaster | null;
  setBot: (bot: IFrontBot) => void;
  setBroadcaster: (broadcaster: IFrontBroadcaster) => void;
  setAuth: (data: {
    broadcaster: IFrontBroadcaster;
    bot: IFrontBot | null;
  }) => void;
}

export const useAuthStore = create<IAuthStore>()((set) => ({
  bot: null,
  broadcaster: null,
  setBot: (bot) => set({ bot }),
  setBroadcaster: (broadcaster) => set({ broadcaster }),
  setAuth: (data) => set((state) => ({ ...state, ...data }))
}));
