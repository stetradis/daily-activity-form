import Form from "../components/Form";
import Header from "../layout/Header";

export default function Home() {
  return (
    <section className="py-8 bg-white dark:bg-gray-900 lg:py-0">
      <Header />
      <div className="lg:flex">
        <div className="flex items-center mx-auto md:w-[42rem] px-4 md:px-8 xl:px-0">
          <div className="w-full mt-12">
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 sm:mb-6 leding-tight dark:text-white">
              Activity details
            </h1>
            <div>
              Hi Stella and Sophia! Lets get ready for our daily activity. Today
              we&apos;ll be baking cookies, yum! First, lets dive into your
              favorite things and see which cookie recipe matches your
              personality!
            </div>
            <br />
            <h2 className="mb-4 text-xl font-extrabold tracking-tight text-gray-900 sm:mb-6 leding-tight dark:text-white">
              Tell Us More
            </h2>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
