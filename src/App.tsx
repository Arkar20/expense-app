import { ThemeProvider } from "@/theme/theme-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "./components/templates/chart";
import { AddExpenseDialogForm } from "./components/templates";
import { useExpenseStorage } from "./store";

const App = () => {
    const { expenses } = useExpenseStorage();

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="p-4  bg-primary-foreground min-h-screen text-white max-w-screen-xl mx-auto">
                <div className="flex justify-end ">
                    <AddExpenseDialogForm />
                </div>
                <div className="flex flex-col md:flex-row md:space-x-6">
                    <div className="md:w-[40%]">
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
                                        <span>
                                            ${expense.amount.toFixed(2)}
                                        </span>
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
            </div>
        </ThemeProvider>
    );
};

export default App;
