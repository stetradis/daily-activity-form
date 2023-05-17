"use client";
import { useState } from "react";

type FormProps = {
  setShowForm: (showForm: boolean) => void;
};

const Form = (props: FormProps) => {
  const { setShowForm } = props;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [submittedForm, setSubmittedForm] = useState(false);
  const [formData, setFormData] = useState({
    color: "",
    description: "",
    video: "",
    audio: "",
    flavor: "",
  });

  const questions = [
    {
      id: 1,
      text: "What is your favorite color?",
      type: "short_text",
      name: "color",
    },
    {
      id: 2,
      text: "If you could teleport, where in the world would you eat this cookie and why did you choose this place?",
      type: "long_text",
      name: "description",
    },
    {
      id: 3,
      text: "Upload a video introducing yourself",
      type: "video",
      name: "video",
    },
    {
      id: 4,
      text: "Upload a voice note describing the best cookie you ever had",
      type: "audio",
      name: "audio",
    },
    {
      id: 5,
      text: "What is your favorite flavor?",
      type: "multiple_choice",
      options: ["Chocolate", "Strawberry", "Vanilla", "Hazelnut"],
      name: "flavor",
    },
  ];

  const handleFormChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    console.log(file.name);
    // logic for uploading files should be here

    if (event.target.name === "video") {
      setFormData({
        ...formData,
        [event.target.name]: file.name,
      });
    } else if (event.target.name === "audio") {
      setFormData({
        ...formData,
        [event.target.name]: file.name,
      });
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formData);
    setSubmittedForm(true);
  };

  if (submittedForm) {
    return (
      <div>
        Thank you for completing your daily activity! Your custom recipe has
        been emailed to you.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid my-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div>
          <label
            htmlFor={questions[currentQuestion].name}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {questions[currentQuestion].text}
          </label>
          {questions[currentQuestion].type === "short_text" && (
            <input
              type="text"
              name={questions[currentQuestion].name}
              id={questions[currentQuestion].name}
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Blue"
              value={formData.color}
              required
              onChange={handleFormChange}
            />
          )}
        </div>
        <div>
          {questions[currentQuestion].type === "long_text" && (
            <textarea
              id={questions[currentQuestion].name}
              name={questions[currentQuestion].name}
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Describe your ideal destination..."
              value={formData.description}
              onChange={handleFormChange}
            ></textarea>
          )}
        </div>
        <div>
          {questions[currentQuestion].type === "video" && (
            <div>
              <input
                type="file"
                id={questions[currentQuestion].name}
                name={questions[currentQuestion].name}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                accept="video/*"
                onChange={handleFileChange}
              />
            </div>
          )}
        </div>
        <div>
          {questions[currentQuestion].type === "audio" && (
            <div>
              <input
                type="file"
                id={questions[currentQuestion].name}
                name={questions[currentQuestion].name}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                accept="audio/*"
                onChange={handleFileChange}
              />
            </div>
          )}
        </div>
        <div>
          {questions[currentQuestion].type === "multiple_choice" && (
            <select
              id={questions[currentQuestion].name}
              name={questions[currentQuestion].name}
              value={formData.flavor}
              onChange={handleFormChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              {questions[currentQuestion].options?.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
      <div className="flex space-x-3">
        {currentQuestion === 0 && (
          <button
            type="button"
            onClick={() => setShowForm(false)}
            className="text-center items-center w-full py-2.5 sm:py-3.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Prev: Activity Details
          </button>
        )}
        {currentQuestion > 0 && (
          <button
            type="button"
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
            className="text-center items-center w-full py-2.5 sm:py-3.5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Previous
          </button>
        )}
        {currentQuestion < questions.length - 1 && (
          <button
            type="button"
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 sm:py-3.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Next
          </button>
        )}
        {currentQuestion === questions.length - 1 && (
          <button
            type="submit"
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 sm:py-3.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default Form;
