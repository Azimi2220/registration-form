import React from "react";

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function FilterNumbers() {
  const filterNumbers = Numbers.filter((num) => num % 2 === 0);

  return (
    <div>
      {filterNumbers.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
}
