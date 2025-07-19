import { useState, useEffect } from "react";

export const Input = ({ label, name, className, children,  ...props})=>{
  return(
    <label htmlFor={name}>
      {label}: <br />
      <input autoComplete="off" type="text" className={`input-effects ${className}`} {...props} name={name} id={name}/>
      {children}
    </label>
  )
}

export const PushError = ({error, time=3000})=>{
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(()=>{
      setShow(false);
    }, time)    
    return () => {
      clearTimeout(timer);
    };
  }, [time]);

  return (
    <div className={show ? "push-error" : "push-error hidden"}>{error}</div>
  )
}