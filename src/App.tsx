import {menuItems} from "./data/db.ts";
import MenuItem from "./components/MenuItem.tsx";
import useOrder from "./hooks/useOrder.ts";

function App() {

    const {addItem} = useOrder();

    return (
        <>
            <header className="bg-teal-400 py-5">
                <h1 className="text-5xl font-black text-center text-white">Calculadora de propinas</h1>
            </header>
            <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-10">
                <div>
                    <h2 className="text-2xl font-bold text-center">Menú</h2>
                    {menuItems.map((item) => (
                        <div key={item.id} className="bg-white shadow-md rounded-lg p-2 m-5">
                            <MenuItem item={item} addItem={addItem} />
                        </div>
                    ))}
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-center">Consumo</h2>
                </div>

            </main>
        </>
    )
}

export default App
