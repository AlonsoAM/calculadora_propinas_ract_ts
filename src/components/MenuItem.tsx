import type {MenuItem} from "../types";

type MenuItemProps = {
    item: MenuItem
}

function MenuItem({item}: MenuItemProps) {
    return (
        <>
            <button className="border-2 border-teal-400 rounded-lg p-3 w-full flex justify-between hover:bg-teal-200">
                <p>{item.name}</p>
                <p className="font-black">${item.price}</p>
            </button>
        </>
    )
}

export default MenuItem
