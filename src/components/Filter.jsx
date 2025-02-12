const Filter = () => {
  return (
    <div className="bg-gray-50">
      <div className="container w-11/12 md:w-10/12 mx-auto my-10">
        <div className="w-full px-6 bg-white rounded-md flex items-center h-16">
          <p className="text-[16px] md:text-[18px] font-semibold font-[--Roboto Condensed] text-center md:text-left">
            4 items found for category Entertainment
          </p>
        </div>
      </div>
      <div className="my-10 container w-11/12 md:w-10/12 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 md:gap-4">
            <label className="text-black text-[16px] md:text-[18px]" htmlFor="select">
              Sort By View:
            </label>
            <select
              className="bg-white px-3 py-2 rounded-md text-gray-500 w-full md:w-auto"
              name="select"
              id="select"
            >
              <option value="default">Default</option>
            </select>
          </div>
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            <button className="text-[16px] md:text-[18px] px-4 py-2 border border-blue-500 text-blue-500 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white w-full md:w-auto">
              Today’s Pick
            </button>
            <button className="text-[16px] md:text-[18px] px-4 py-2 border border-blue-500 text-blue-500 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white w-full md:w-auto">
              Trending
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
