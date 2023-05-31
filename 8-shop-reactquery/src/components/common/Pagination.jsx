import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <div className="my-8">
      <ReactPaginate
        previousLabel={"قبلی"}
        nextLabel={"بعدی"}
        breakLabel={".."}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        breakClassName={"px-4 mx-2 py-1 rounded-md "}
        containerClassName={
          "flex items-center justify-center border-gray-500 px-2 mx-2 py-1 rounded-md "
        }
        previousClassName={"px-2 mx-2 py-2 rounded-md font-bold"}
        previousLinkClassName={
          "border-gray-400 text-black px-2 mx-2 border-l-2 "
        }
        nextClassName="px-2 mx-2 py-2  rounded-md font-bold"
        nextLinkClassName={"border-r-2 border-gray-400 text-black px-2 mx-2  "}
        renderOnZeroPageCount={false}
        pageLinkClassName={" border-gray-500  px-4 mx-2 py-1 rounded-md "}
        activeLinkClassName="bg-slate-800 text-white rounded"
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Pagination;
