import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "@/components/templates/chart";
import { AddExpenseDialogForm } from "@/components/templates";
import { useExpenseStorage } from "@/store";
import { TrashIcon } from "@/components/atoms/icons";

export default function Index() {
    const { expenses, removeExpense } = useExpenseStorage();

    return (
        <>
            <div className="flex justify-end ">
                <AddExpenseDialogForm />
            </div>
            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-[50%] lg:w-[40%]">
                    <BarChart />
                </div>
                <Card className="mb-4 flex-1">
                    <CardHeader>
                        <CardTitle>Expenses</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul>
                            {expenses.map((expense) => (
                                <li
                                    key={expense.id}
                                    className="flex justify-between border-b py-2"
                                >
                                    <span>{expense.label}</span>
                                    <div className="flex space-x-2 items-center justify-start">
                                        <span>
                                            ${expense.amount.toFixed(2)}
                                        </span>
                                        <span>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    removeExpense(expense.id);
                                                }}
                                            >
                                                <TrashIcon />
                                            </button>
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        {!expenses.length && (
                            <div className="w-full flex items-center justify-center h-full">
                                No Expense Found.
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
