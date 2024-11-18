import {menuItems} from "./data/db.ts";
import MenuItem from "./components/MenuItem.tsx";
import useOrder from "./hooks/useOrder.ts";
import OrderContents from "./components/OrderContents.tsx";
import OrderTotals from "./components/OrderTotals.tsx";
import TipPercentageForm from "./components/TipPercentageForm.tsx";

function App() {

    const {order, addItem, removeItem, tip, setTip} = useOrder();

    return (
        <>
            <header className="bg-teal-400 py-5">
                <h1 className="text-5xl font-black text-center text-white">Calculadora de propinas</h1>
            </header>
            <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-10">
                <div className="p-5">
                    <h2 className="text-2xl font-bold text-center">Menú</h2>
                    {menuItems.map((item) => (
                        <div key={item.id} className="space-y-3 mt-10">
                            <MenuItem item={item} addItem={addItem} />
                        </div>
                    ))}
                </div>
                <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10 shadow-md">
                    <OrderContents order={order} removeItem={removeItem} />
                    <TipPercentageForm setTip={setTip} />
                    <OrderTotals order={order} tip={tip} />
                </div>

            </main>
        </>
    )
}

export default App
