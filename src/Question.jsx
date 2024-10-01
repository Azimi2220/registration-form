import React from "react";
export default function Question({ question }) {
  return (
    <div className="border-b-2 border-black">
      <h3 className="flex mt-5 font-bold">{question.text}</h3>
      <ul className="flex gap-4">
        {question.answers.map((answer) => (
          <li>
            <input type="radio" name={question.text}></input>
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
}
