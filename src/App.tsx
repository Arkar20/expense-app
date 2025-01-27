import { ThemeProvider } from "@/theme/theme-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "./components/templates/chart";
import { AddExpenseDialogForm } from "./components/templates";
import { useExpenseStorage } from "./store";

const App = () => {
    const { expenses } = useExpenseStorage();

    console.log(expenses);
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className=" p-4  bg-primary-foreground min-h-screen text-white">
                <div className="flex justify-end ">
                    <AddExpenseDialogForm />
                </div>

                <BarChart />
                <Card className="mb-4">
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
                                    <span>${expense.amount.toFixed(2)}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </ThemeProvider>
    );
};

export default App;
