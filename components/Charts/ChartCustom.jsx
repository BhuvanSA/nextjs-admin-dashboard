import { useState } from "react"; // Import the useState hook
const ReactApexChart = import("react-apexcharts");

const Page = () => {
  // Define a state variable to store the selected semester
  const [selectedSem, setSelectedSem] = useState("Sem");
  const options = ["AI", "DS"];

  // Define a function to handle the change of the semester option
  const handleSemChange = (e) => {
    // Get the value of the option that was selected
    const value = e.target.value;
    // Set the selectedSem state to the value
    setSelectedSem(value);
  };

  return (
    <div className="col-span-12 rounded-2xl border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">
                {/* {props["oneDataName"]} */}
                jaime
              </p>
              <p className="text-sm font-medium">1 - 3 Sem</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-secondary">
                {/* {props["twoDataName"]} */}
                lannister
              </p>
              <p className="text-sm font-medium">1 - 3 Sem</p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            {/* Use a dropdown menu or a radio button group to display the semester options */}
            {/* Uncomment one of the following options and comment out the other */}

            {/* Option 1: Dropdown menu */}
            {/* Use tailwind classes to style the dropdown menu */}
            {/* Use the selectedSem state as the value prop and the handleSemChange function as the onChange prop */}
            {/* Add more options as needed */}
            <select
              className="rounded bg-white py-1 px-3 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-card dark:bg-boxdark dark:text-white dark:hover:bg-boxdark"
              value={selectedSem}
              onChange={handleSemChange}
            >
              <option value="Sem">Sem</option>
              <option value="Sem 1">Sem 1</option>
              <option value="Sem 2">Sem 2</option>
              <option value="Sem 3">Sem 3</option>
            </select>

            {/* Option 2: Radio button group */}
            {/* Use tailwind classes to style the radio buttons and labels */}
            {/* Use the selectedSem state as the checked prop and the handleSemChange function as the onChange prop */}
            {/* Add more options as needed */}
            {/* <div className="flex flex-row gap-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="sem"
                  value="Sem"
                  checked={selectedSem === "Sem"}
                  onChange={handleSemChange}
                />
                <span className="ml-2 text-xs font-medium text-black dark:text-white">Sem</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="sem"
                  value="Sem 1"
                  checked={selectedSem === "Sem 1"}
                  onChange={handleSemChange}
                />
                <span className="ml-2 text-xs font-medium text-black dark:text-white">Sem 1</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="sem"
                  value="Sem 2"
                  checked={selectedSem === "Sem 2"}
                  onChange={handleSemChange}
                />
                <span className="ml-2 text-xs font-medium text-black dark:text-white">Sem 2</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="sem"
                  value="Sem 3"
                  checked={selectedSem === "Sem 3"}
                  onChange={handleSemChange}
                />
                <span className="ml-2 text-xs font-medium text-black dark:text-white">Sem 3</span>
              </label>
            </div> */}
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5 h-[355px] w-[105%]">
          <ReactApexChart
            options={options}
            // series={state.series}
            type="area"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
