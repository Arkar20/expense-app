import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DataListInput } from "../atoms";

export function AddExpenseDialogForm() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="mb-4">
                    Add Expense
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Expense</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="expense-name">Expense Name</Label>
                        <Input
                            id="expense-name"
                            placeholder="e.g., Groceries"
                        />
                    </div>
                    <div>
                        <Label htmlFor="expense-amount">Amount</Label>
                        <Input
                            id="expense-amount"
                            type="number"
                            placeholder="e.g., 50"
                        />
                    </div>
                    <div className="flex flex-col">
                        <Label htmlFor="expense-amount">Amount</Label>

                        <DataListInput
                            data={[{ label: "food", value: "food" }]}
                            onChange={(selectedItem) =>
                                console.log(selectedItem)
                            }
                        />
                    </div>
                    <Button variant="outline">Add</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
