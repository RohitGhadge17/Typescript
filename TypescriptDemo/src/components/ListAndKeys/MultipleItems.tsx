import { useState } from "react"

const defaultItems = [
    {id:"1", value:"Value1"},
    {id:"2", value:"Value2"},
    {id:"3", value:"Value3"},
    {id:"4", value:"Value4"},

]

export const MultipleItems = () => {
    const [items,setItems] = useState(defaultItems);
    const addItems = () => {
        const item = defaultItems.find((i) => !items.includes(i));
        if(item) {
            setItems([...items,item]);
        }
    }

    const removeItem = (item:any) => {
        setItems(items.filter((i) => i !== item))
    }

    return (
        <div>
            <button onClick={addItems}>Add Item</button>
            <ul style={{listStyle:"none"}}>
                {items.map((item) => <li key={item.id}>
                    <button onClick={() => removeItem(item)}>Remove Item</button>
                    <label>{item.id}</label>
                    <input defaultValue={item.value}></input>
                </li>)}
            </ul>
        </div>
    )
}