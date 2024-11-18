import {OrderItem} from "../types";
import {useMemo} from "react";
import {formatCurrency} from "../helpers";

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number
}

function OrderTotals({order, tip}: OrderTotalsProps) {

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
            <button></button>
        </>
    )
}

export default OrderTotals
