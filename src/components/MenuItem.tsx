import type {MenuItem} from "../types";
import {formatCurrency} from "../helpers";

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}

function MenuItem({item, addItem}: MenuItemProps) {
    return (
        <>
            <button className="border-2 border-teal-400 rounded-lg p-3 w-full flex justify-between hover:bg-teal-200"
                    onClick={() => addItem(item)}>
                <p>{item.name}</p>
                <p className="font-black">{formatCurrency(item.price)}</p>
            </button>
        </>
    )
}

export default MenuItem
