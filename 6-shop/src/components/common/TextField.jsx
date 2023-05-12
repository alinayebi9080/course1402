const TextField = ({ name, label, formik, type = "text" }) => {
  return (
    <div className="my-2">
      <div className="flex justify-between items-center">
        <label>{label}</label>
        <input
          placeholder={label}
          type={type}
          name={name}
          className="border rounded p-2"
          {...formik.getFieldProps(name)}
        />
      </div>
      {formik.errors[name] && formik.touched[name] && (
        <p className="text-rose-500">{formik.errors[name]}</p>
      )}
    </div>
  );
};

export default TextField;
