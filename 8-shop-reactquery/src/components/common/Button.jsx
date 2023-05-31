const Button = ({ label, formik }) => {
  return (
    <button
      disabled={!formik.isValid}
      className="bg-blue-500 text-white p-2 disabled:bg-gray-500"
      type="submit"
    >
      {label}
    </button>
  );
};

export default Button;
