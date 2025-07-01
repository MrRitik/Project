import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type SidebarState = {
  isOpen: boolean;
  activePath: string;
};

// Get initial state from localStorage or default to closed and dashboard
const getInitialState = (): SidebarState => {
  try {
    const savedState = localStorage.getItem('sidebarState');
    if (savedState) {
      const parsed = JSON.parse(savedState);
      // Ensure we have both properties
      return {
        isOpen: parsed.isOpen ?? false,
        activePath: parsed.activePath ?? '/dashboard',
      };
    }
    return { isOpen: false, activePath: '/dashboard' };
  } catch {
    return { isOpen: false, activePath: '/dashboard' };
  }
};

const initialState: SidebarState = getInitialState();

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: state => {
      state.isOpen = !state.isOpen;
      // Save to localStorage
      localStorage.setItem('sidebarState', JSON.stringify(state));
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
      // Save to localStorage
      localStorage.setItem('sidebarState', JSON.stringify(state));
    },
    setActivePath: (state, action: PayloadAction<string>) => {
      state.activePath = action.payload;
      // Save to localStorage
      localStorage.setItem('sidebarState', JSON.stringify(state));
    },
  },
});

export const { toggleSidebar, setSidebarOpen, setActivePath } = sidebarSlice.actions;
export default sidebarSlice.reducer;
