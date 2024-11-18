import {useState} from "react";
import type {MenuItem, OrderItem} from "../types";

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([]);

    const addItem = (item: MenuItem) => {
        const itemExists = order.find((order) => order.id === item.id);
        if (itemExists) {
            const updatedOrder = order.map((orderItem) => {
                if (orderItem.id === item.id) {
                    return {...orderItem, quantity: orderItem.quantity + 1};
                }
                return orderItem;
            });
            setOrder(updatedOrder);
        } else {
            const newItem: OrderItem = {...item, quantity: 1};
            setOrder([...order, newItem]);
        }
    }

    const removeItem = (id: MenuItem['id']) => {
        const updatedOrder = order.filter((order) => order.id !== id);
        setOrder(updatedOrder);
    }

    return {
        order,
        addItem,
        removeItem
    }
}