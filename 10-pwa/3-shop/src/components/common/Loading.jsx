const Loading = () => {
  return (
    <>
      {false && (
        <div className="fixed top-0 right-0 w-screen h-screen bg-gray-100/50 z-50 flex justify-center items-center">
          <p className="text-center text-4xl font-bold">Loading...</p>
        </div>
      )}
    </>
  );
};

export default Loading;
