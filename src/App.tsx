import { Input } from "@/components/ui/input";
import { useExpenseStorage } from "@/store";
function App() {
    const store = useExpenseStorage();
    return (
        <>
            <div className="dark bg-background w-full h-full min-h-screen text-white">
                <p>{store.expenses}</p>
                <button type="button" onClick={() => store.addExpense()}>
                    Add
                </button>
            </div>
        </>
    );
}

export default App;
