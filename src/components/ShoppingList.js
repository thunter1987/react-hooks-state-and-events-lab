import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  const [itemCategory, setItemCategory] = useState("All")
  const [itemList, setItemList] = useState(items)

  function handleCategoryChange(event) {
    setItemCategory(event.target.value)
    const updateItems = items.filter(item => {
      if (event.target.value === "All") {
        return true
      }
      else {
        return event.target.value === item.category
      }
    })
    setItemList(updateItems)
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
