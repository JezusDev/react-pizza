import React from "react";

export default function useChangeListItem(list, activator, setter, form) {
  const handleActive = (index) => {
    setter(index);
  };

  let format = undefined;

  if (form) {
    if (form === "syzes") {
      format = " см.";
    } else if (form === "types") {
      format = ["тонкое", "традиционное"];
    }
  }

  const text = (item) => {
    if (format) {
      if (Array.isArray(format)) {
        return format[item];
      } else {
        return item + format;
      }
    } else {
      return item;
    }
  };

  return (
    <ul>
      {list.map((item, index) => (
        <li
          className={activator === index ? "active" : ""}
          onClick={() => handleActive(index)}
          key={index}
        >
          {text(item)}
        </li>
      ))}
    </ul>
  );
}
