import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ExpenseStoreState {
    expenses: number;
    addExpense: () => void;
}

export const useExpenseStorage = create(
    persist<ExpenseStoreState>(
        (set, get) => ({
            expenses: 0,
            addExpense: () => set({ expenses: get().expenses + 1 }),
        }),
        {
            name: "expense-storage", // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        }
    )
);
