import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const services = [
  {
    title: "Security Guard Services",
    description:
      "Our best security guard agency provides trained personnel monitoring and safeguarding premises to prevent unauthorised access, maintain order, and ensure safety.",
    icon: "https://najmbarea.com/wp-content/uploads/2023/08/police.png",
    bgColor: "bg-white",
  },
  {
    title: "Technical Services",
    description:
      "A reliable manpower supplier for construction and engineering industries, ensuring skilled and qualified personnel to drive successful project outcomes maintain order, and ensure safety.",
    icon: "https://najmbarea.com/wp-content/uploads/2023/08/global-settings.png",
    bgColor: "bg-white",
  },
  {
    title: "Business Setup and Visa Services",
    description:
      "Streamlining your business venture with our comprehensive business setup and visa services, ensuring a smooth transition and compliance every step of the way.",
    icon: "https://najmbarea.com/wp-content/uploads/2023/08/process.png",
    bgColor: "bg-white",
  },
];

const Homi = () => {
  return (
    <>
      <div>
        <div
          className="relative w-full h-screen bg-cover bg-center md:w-full"
          style={{
            backgroundImage:
              "url('https://najmbarea.com/wp-content/uploads/slider/cache/36d08a8be66fbac2115ac5466c6de154/people-sitting-desk-working.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-sm md:text-lg">
              Business Setup & PRO Services
            </h2>
            <h1 className="text-3xl md:text-5xl font-bold mt-2">
              Najm Barea Management Services
            </h1>
            <button className="mt-4 px-6 py-2 bg-yellow-500 text-white font-semibold hover:bg-yellow-600">
              Read More
            </button>
          </div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <button className="bg-yellow-500 text-white p-2 rounded-full m-2">
              <img
                aria-hidden="true"
                alt="left-arrow"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xMS40MzMgMTUuOTkyTDIyLjY5IDUuNzEyYy4zOTMtLjM5LjM5My0xLjAzIDAtMS40Mi0uMzkzLS4zOS0xLjAzLS4zOS0xLjQyMyAwbC0xMS45OCAxMC45NGMtLjIxLjIxLS4zLjQ5LS4yODUuNzYtLjAxNS4yOC4wNzUuNTYuMjg0Ljc3bDExLjk4IDEwLjk0Yy4zOTMuMzkgMS4wMy4zOSAxLjQyNCAwIC4zOTMtLjQuMzkzLTEuMDMgMC0xLjQybC0xMS4yNTctMTAuMjkiCiAgICAgICAgICBmaWxsPSIjYmQ4MzMwIiBvcGFjaXR5PSIxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+"
              />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <button className="bg-yellow-500 text-white p-2 rounded-full m-2">
              <img
                aria-hidden="true"
                alt="right-arrow"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xMC43MjIgNC4yOTNjLS4zOTQtLjM5LTEuMDMyLS4zOS0xLjQyNyAwLS4zOTMuMzktLjM5MyAxLjAzIDAgMS40MmwxMS4yODMgMTAuMjgtMTEuMjgzIDEwLjI5Yy0uMzkzLjM5LS4zOTMgMS4wMiAwIDEuNDIuMzk1LjM5IDEuMDMzLjM5IDEuNDI3IDBsMTIuMDA3LTEwLjk0Yy4yMS0uMjEuMy0uNDkuMjg0LS43Ny4wMTQtLjI3LS4wNzYtLjU1LS4yODYtLjc2TDEwLjcyIDQuMjkzeiIKICAgICAgICAgIGZpbGw9IiNiZDgzMzAiIG9wYWNpdHk9IjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4="
              />
            </button>
          </div>
          <div className="absolute right-0 bottom-0 flex flex-col p-4 space-y-2">
            <button className="bg-green-400 text-white p-2 rounded-full w-16 h-16">
              <i class="fa-solid fa-phone fa-2xl"></i>
            </button>
            <button className="bg-green-500 text-white p-2 rounded-full w-16 h-16">
              <i className="fa-brands fa-whatsapp fa-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-yellow-600">
            Our Services
          </h2>
        </div>
        <div className="flex flex-row gap-6 items-center w-8/12 ml-60">
          {services.map((service, index) => (
            <div
              key={index}
              className={`w-full p-6 ${service.bgColor} shadow-lg`}
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="mb-4 bg-yellow-600 w-20 rounded-full"
                />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-gray-100 py-8">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-yellow-600 mb-8">
          Prestigious Clients We Serve
        </h2>
        <div className="flex flex-wrap justify-center items-center space-x-24">
          <img
            src="https://najmbarea.com/wp-content/uploads/2023/12/APCC-150x150.png"
            alt="APCC"
            className="w-40 h-40"
          />
          <img
            src="https://najmbarea.com/wp-content/uploads/2023/12/AB-Marina-Logo-min.png-150x150.png"
            alt="Marina Fitness"
            className="h-30 h-28"
          />
          <img
            src="https://najmbarea.com/wp-content/uploads/2023/12/azizi-150x150.png"
            alt="Azizi"
            className="w-40 h-40"
          />
          <img
            src="https://najmbarea.com/wp-content/uploads/2023/12/LANITEM-150x150.png"
            alt="Latinem Securities"
            className="w-40 h-40"
          />
          <img
            src="https://najmbarea.com/wp-content/uploads/2023/12/lootah_logo-1-150x150.png"
            alt="Lootah"
            className="w-36 h-36"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-row gap-10">
          <div className="w-4/12 ml-56">
            <h2 className="text-4xl font-bold text-yellow-600 mb-2 ">
              ABOUT NAJM BAREA
            </h2>
            <h3 className="text-xl font-semibold text-black mb-4 ">
              BEST SECURITY GUARD AGENCY
            </h3>
            <p className="text-gray-700 mb-4 ">
              Principally in Human Capital Outsourcing, NAJM BAREA Group has
              played a meaningful role in providing gainful employment to the
              local community and expatriates alike for 20 years. NAJM BAREA is
              the best certified security guard company which provide best
              security services to your construction properties, commercial and
              residential properties.
            </p>
            <p className="text-gray-700 mb-4">
              At our best security guard agency, we strive for excellence in all
              aspects of our services, offering tailored solutions that address
              your unique requirements. We take pride in adapting and
              capitalising on emerging prospects in the ever-evolving business
              landscape.
            </p>
            <p className="text-gray-700">
              We offer{" "}
              <a href="#" className="text-blue-600 underline">
                best security guard services
              </a>
              , specializing in{" "}
              <a href="#" className="text-blue-600 underline">
                private security guard services in the UAE
              </a>
              .
            </p>
          </div>
          <div className="w-4/12 h-full mt-16">
            <img
              src="https://najmbarea.com/wp-content/uploads/2023/07/abt-23.jpg"
              alt="Team"
              className="shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className=" py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-yellow-600">
            Our Testimonials
          </h2>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-white dark:bg-gray-700 shadow-lg p-8 mx-4 max-w-4xl flex justify-between items-center">
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Thanks to Najm Barea's Business Set Up services, our company
                smoothly established its presence in the UAE. Highly
                recommended!
              </p>
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                Sarah
              </p>
              <p className="text-gray-500 dark:text-gray-400">Business Owner</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Najm Barea’s manpower solutions for the construction industry
                were outstanding. Their skilled workforce helped us complete
                projects on time.
              </p>
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                David
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Senior Developer
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Homi;
