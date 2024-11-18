import {OrderItem} from "../types";
import {useMemo} from "react";
import {formatCurrency} from "../helpers";

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

function OrderTotals({order, tip, placeOrder}: OrderTotalsProps) {

    const subTotal = useMemo(() => {
        return order.reduce((acc, item) => acc + item.price * item.quantity, 0)
    }, [order])

    const tipAmount = useMemo(() => {
        return subTotal * tip
    }, [tip, subTotal])

    const totalAmount = useMemo(() => {
        return subTotal + tipAmount
    }, [tipAmount, subTotal])

    return (
        <>
            <div className='space-y-3'>
                <h2 className='font-black text-2xl'>Totales y Propina:</h2>
                <p>
                    Subtotal a pagar:{' '}
                    <span className='font-bold'>{formatCurrency(subTotal)}</span>
                </p>
                <p>
                    Propina:{' '}
                    <span className='font-bold'>{formatCurrency(tipAmount)}</span>
                </p>
                <p>
                    Total a pagar:{' '}
                    <span className='font-bold'>{formatCurrency(totalAmount)}</span>
                </p>
            </div>
            <button
                className="bg-teal-400 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded-full w-full uppercase mt-10 disabled:opacity-50"
                onClick={placeOrder}
                disabled={totalAmount === 0}>
                Guardar Orden
            </button>
        </>
    )
}

export default OrderTotals
