import { useState, useEffect } from "react";

export const Input = ({
  label,
  name,
  className,
  children,
  onChange,
  ...props
}) => {
  return (
    <label>
      {label}: <br />
      <input
        autoComplete="off"
        type="text"
        className={`input-effects ${className}`}
        onChange={onChange}
        {...props}
        name={name}
      />
      {children}
    </label>
  );
};

export const Select = ({ label, name, className, children, ...props }) => {
  return (
    <label>
      {label}: <br />
      <select className={`input-effects ${className}`} {...props} name={name}>
        <option value="">Selecciona una Opción</option>
        {children}
      </select>
    </label>
  );
};

export const TextArea = ({ label, name, className, children, ...props }) => {
  return (
    <label>
      {label}: <br />
      <textarea
        className={`input-effects ${className}`}
        {...props}
        name={name}
      />
      {children}
    </label>
  );
};

export const PushError = ({ error, time = 3000 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, time);
    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  return (
    <div className={show ? "push-error" : "push-error hidden"}>{error}</div>
  );
};
