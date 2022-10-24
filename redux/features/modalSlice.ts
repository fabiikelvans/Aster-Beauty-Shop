import { createSlice } from "@reduxjs/toolkit";
import {RootState} from "../store";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        isAffinityModalOpen: false,
        isRecipeModalOpen: false
    },
    reducers: {
        toggleAffinityModal: (state) => {
            state.isAffinityModalOpen = !state.isAffinityModalOpen;
        },
        toggleRecipeModal: (state) => {
            state.isRecipeModalOpen = !state.isRecipeModalOpen;
        }
    }
});

export const { toggleAffinityModal, toggleRecipeModal } = modalSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
//useSelector((state) => state.openAffinityModal.isAffinityModalOpen)
export const modalOpen = (state: RootState) =>
    state.modal.isAffinityModalOpen;

export default modalSlice.reducer;
