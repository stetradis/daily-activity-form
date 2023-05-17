"use client";
import { useState } from "react";
import Form from "../components/Form";
import Header from "../layout/Header";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <section className="pb-8 pt-0">
      <Header />
      <div className="lg:flex">
        <div className="flex items-center mx-auto md:w-[42rem] px-4 md:px-8 xl:px-0">
          <div className="w-full mt-12 mx-4">
            {!showForm && (
              <div>
                <h1 className="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 sm:mb-6 leding-tight dark:text-white">
                  Activity details
                </h1>
                <div>
                  Hi Stella and Sophia! Lets get ready for our daily activity.
                  Today we&apos;ll be baking cookies, yum! First, lets dive into
                  your favorite things and see which cookie recipe matches your
                  personality!
                </div>
                <br />
                <button
                  onClick={handleShowForm}
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 sm:py-3.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Lets Begin!
                </button>
              </div>
            )}
            {showForm && (
              <div>
                <h2 className="mb-4 text-xl font-extrabold tracking-tight text-gray-900 sm:mb-6 leding-tight dark:text-white">
                  Activity Questions
                </h2>
                <Form setShowForm={setShowForm} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
