const TextField = ({ label, formik, type = "text" }) => {
  return (
    <div className="my-2">
      <div className="flex justify-between items-center">
        <label>{label}</label>
        <input
          placeholder={label}
          type={type}
          name={label}
          className="border rounded p-2"
          {...formik.getFieldProps(label)}
        />
      </div>
      {formik.errors[label] && formik.touched[label] && (
        <p className="text-rose-500">{formik.errors[label]}</p>
      )}
    </div>
  );
};

export default TextField;
