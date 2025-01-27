import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Expense = {
    id: string;
    label: string;
    category: string;
    amount: number;
    createdAt: Date;
};

interface ExpenseStoreState {
    expenses: Expense[];
    addExpense: (expense: Expense) => void;
    removeExpense: (id: string) => void;
}

export const useExpenseStorage = create(
    persist<ExpenseStoreState>(
        (set, get) => ({
            expenses: [],
            addExpense: (expense: Expense) =>
                set({ expenses: [expense, ...get().expenses] }),
            removeExpense: (id: string) => {
                const expenses = get().expenses.filter(
                    (expense) => expense.id !== id
                );

                set({ expenses });
            },
        }),
        {
            name: "expense-storage", // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        }
    )
);
