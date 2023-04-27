const AddForm = ({ setFirstName, handleAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border p-2 m-2"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <button className="bg-purple-200 p-2 rounded" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddForm;
