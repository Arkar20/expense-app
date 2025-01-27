import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Alert, AlertDescription } from "@/components/ui/alert";
import { DataListInput, DatePicker } from "../atoms";
import { useExpenseStorage } from "@/store";

// Define Zod schema for validation
const expenseSchema = z.object({
    label: z.string().min(1, "Expense name is required"),
    amount: z
        .string()
        .refine((value) => !isNaN(Number(value)) && Number(value) > 0, {
            message: "Please enter a valid amount",
        }),
    category: z.string().min(1, "Category is required"),
    createdAt: z
        .string()
        .refine((value) => !isNaN(Date.parse(value)), "Invalid date"),
});

// Infer form data type from Zod schema
type FormData = z.infer<typeof expenseSchema>;

export function AddExpenseDialogForm() {
    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(expenseSchema), // Use Zod resolver for validation
        defaultValues: {
            label: "",
            amount: "",
            category: "",
        },
    });

    const [isOpen, setIsOpen] = React.useState(false);

    const { addExpense } = useExpenseStorage();

    const onSubmit = (data: FormData) => {
        addExpense({
            ...data,
            amount: Number(data.amount),
            createdAt: new Date(data.createdAt),
            id: new Date().getTime().toString(),
        });
        reset();
        setIsOpen(false);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="mb-4">
                    Add Expense
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Expense</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Expense Name */}
                    <div className="space-y-2">
                        <Label htmlFor="name">Expense Name</Label>
                        <Controller
                            name="label"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    id="label"
                                    placeholder="e.g., Groceries"
                                    className={
                                        errors.label ? "border-red-500" : ""
                                    }
                                    {...field}
                                />
                            )}
                        />
                        {errors.label && (
                            <Alert variant="destructive" className="py-2">
                                <AlertDescription>
                                    {errors.label.message}
                                </AlertDescription>
                            </Alert>
                        )}
                    </div>

                    {/* Amount */}
                    <div className="space-y-2">
                        <Label htmlFor="amount">Amount</Label>
                        <Controller
                            name="amount"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    id="amount"
                                    type="number"
                                    placeholder="e.g., 50"
                                    className={
                                        errors.amount ? "border-red-500" : ""
                                    }
                                    {...field}
                                />
                            )}
                        />
                        {errors.amount && (
                            <Alert variant="destructive" className="py-2">
                                <AlertDescription>
                                    {errors.amount.message}
                                </AlertDescription>
                            </Alert>
                        )}
                    </div>

                    {/* Category */}
                    <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Controller
                            name="category"
                            control={control}
                            render={({ field }) => (
                                <DataListInput
                                    data={[
                                        {
                                            label: "Food",
                                            value: "FOOD",
                                        },
                                        {
                                            label: "Transport",
                                            value: "TRANSPORT",
                                        },
                                    ]}
                                    value={field.value}
                                    onChange={(newValue) => {
                                        field.onChange(newValue.value);
                                    }}
                                />
                            )}
                        />
                        {errors.category && (
                            <Alert variant="destructive" className="py-2">
                                <AlertDescription>
                                    {errors.category.message}
                                </AlertDescription>
                            </Alert>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="date">Date</Label>
                        <Controller
                            name="createdAt"
                            control={control}
                            render={({ field }) => (
                                <DatePicker
                                    date={
                                        field.value
                                            ? new Date(field.value)
                                            : undefined
                                    }
                                    setDate={(date) => {
                                        if (date) {
                                            field.onChange(date.toISOString());
                                        }
                                    }}
                                />
                            )}
                        />
                        {errors.createdAt && (
                            <Alert variant="destructive" className="py-2">
                                <AlertDescription>
                                    {errors.createdAt.message}
                                </AlertDescription>
                            </Alert>
                        )}
                    </div>

                    <Button type="submit" className="w-full">
                        Add Expense
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
