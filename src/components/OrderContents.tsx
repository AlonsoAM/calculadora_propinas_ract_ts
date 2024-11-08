import {OrderItem} from "../types";
import {formatCurrency} from "../helpers";

type OrderContentsProps = {
    order: OrderItem[]
}

function OrderContents({order}: OrderContentsProps) {
    return (
        <>
            <div>
                <h2 className="text-2xl font-bold text-center">Consumo</h2>
                <div className="space-y-3 mt-10">
                    {order.length === 0 ? <p className="text-center">La orden está vacía</p> : order.map((item) => (
                        <div className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
                            <div>
                                <p className='text-lg'>{item.name} - {formatCurrency(item.price)}</p>
                                <p className="font-black"> Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}</p>
                            </div>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                                X
                            </button>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default OrderContents
