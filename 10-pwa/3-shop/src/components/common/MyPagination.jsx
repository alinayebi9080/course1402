const Pagination = ({ totalPage, setSelectedPage, selectedPage }) => {
  return (
    <div className="flex items-center justify-center my-2.5">
      {[...new Array(totalPage)].map((_, index) => (
        <button
          className={`p-2 rounded ${
            selectedPage === index && "bg-rose-600 text-white"
          }`}
          onClick={() => setSelectedPage(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
