export const questions = [
  {
    text: "What is the most popular front-end framework for building web applications?",
    answers: ["React", "Angular", "Vue.js"],
    correctAnswer: 0,
  },
  {
    text: "What is the purpose of the HTML `<head>` tag?",
    answers: [
      "To define the structure of a web page",
      "To add styles to a web page",
      "To provide metadata about a web page",
    ],
    correctAnswer: 2,
  },
  {
    text: "What is the difference between HTTP and HTTPS?",
    answers: [
      "HTTP is faster, HTTPS is slower",
      "HTTP is secure, HTTPS is not",
      "HTTP is not secure, HTTPS is secure",
    ],
    correctAnswer: 2,
  },
  {
    text: "What is the role of a web server?",
    answers: [
      "To host a database",
      "To serve web pages",
      "To provide email services",
    ],
    correctAnswer: 1,
  },
  {
    text: "What is the purpose of CSS?",
    answers: [
      "To add interactivity to a web page",
      "To define the structure of a web page",
      "To control the layout and visual styling of a web page",
    ],
    correctAnswer: 2,
  },
  {
    text: "What is JavaScript used for in web development?",
    answers: [
      "To create server-side applications",
      "To add styles to a web page",
      "To add interactivity to a web page",
    ],
    correctAnswer: 2,
  },
  {
    text: "What is the difference between a GET and POST request?",
    answers: [
      "GET requests are used for sending data, POST requests are used for retrieving data",
      "GET requests are used for retrieving data, POST requests are used for sending data",
      "GET requests are faster, POST requests are slower",
    ],
    correctAnswer: 1,
  },
  {
    text: "What is a RESTful API?",
    answers: [
      "A type of web framework",
      "A type of database",
      "An architectural style for designing networked applications",
    ],
    correctAnswer: 2,
  },
  {
    text: "What is the purpose of a CDN?",
    answers: [
      "To host a website",
      "To provide email services",
      "To distribute content across multiple servers",
    ],
    correctAnswer: 2,
  },
  {
    text: "What is the difference between a static website and a dynamic website?",
    answers: [
      "A static website is faster, a dynamic website is slower",
      "A static website is built using HTML, a dynamic website is built using JavaScript",
      "A static website is built once, a dynamic website is built on the fly",
    ],
    correctAnswer: 2,
  },
];

import Question from "./Question";
import React from "react";
export default function Questions() {
  return (
    <div>
      <h1 className="bg-stone-900 text-white text-4xl pb-2">Quiz</h1>
      <div className="flex text-center mt-2 gap-2">
        <h2>Name:</h2>
        <input
          className=" border border-black text-center"
          placeholder="  Name"
        ></input>
        <h2>Last Name:</h2>
        <input
          className=" border border-black text-center"
          placeholder=" Last Name"
        ></input>
        <h2>ID:</h2>
        <input
          className=" border border-black text-center"
          placeholder=" ID"
        ></input>
      </div>
      {questions.map((question) => (
        <Question question={question} />
      ))}
      <button className="bg-stone-800 text-white mt-5 text-2xl w-64 rounded-sm pb-1 hover:bg-stone-700">
        Submit
      </button>
    </div>
  );
}
