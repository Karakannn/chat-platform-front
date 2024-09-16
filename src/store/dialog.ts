import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Dialog {
  name: string;
  data?: unknown;
}

export interface DialogState {
  dialogs: Dialog[];
}

const initialState: DialogState = {
  dialogs: [],
};

const dialoglice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    append: (state, action: PayloadAction<Dialog>) => {
      state.dialogs.push({ ...action.payload });
    },
    destroy: (state, action: PayloadAction<{ name: string }>) => {
      state.dialogs = state.dialogs.filter((dialog) => dialog.name !== action.payload.name);
    },
    destroyAll: (state) => {
      state.dialogs = [];
    },
  },
});

export const { append, destroy, destroyAll } = dialoglice.actions;
export default dialoglice.reducer;
