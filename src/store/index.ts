import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Expense = {
    id: number;
    label: string;
    category: string;
    amount: number;
    createdAt: Date;
};

interface ExpenseStoreState {
    expenses: Expense[];
    addExpense: (expense: Expense) => void;
    removeExpense: (id: number) => void;
}

export const useExpenseStorage = create(
    persist<ExpenseStoreState>(
        (set, get) => ({
            expenses: [],
            addExpense: (expense: Expense) =>
                set({ expenses: [expense, ...get().expenses] }),
            removeExpense: (id: number) => {
                const expenses = get().expenses.filter(
                    (expense) => expense.id !== id
                );

                set({ expenses });
            },
        }),
        {
            name: "expense-storage", // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        }
    )
);
