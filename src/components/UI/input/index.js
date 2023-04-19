import {useState, useCallback, useEffect, memo} from "react";
import debounce from "lodash.debounce";

function Input({callback, type = "text", name = "", propsValue = ""}) {
  const [value, setValue] = useState(propsValue);

  const changeThrottle = useCallback(
    debounce(value => callback(value), 600),
    [callback]
  )

  const onChange = useCallback(event => {
    setValue(event.target.value);
    changeThrottle(event.target.value);
  }, [setValue, changeThrottle]);

  useEffect(() => {
    setValue(propsValue);
  }, [propsValue]);

  return (  
    <input 
      type={type}
      name={name} 
      value={value} 
      onChange={onChange} 
      placeholder="Введите логин пользователя" 
      className="text-gray-700 bg-gray-50 p-2 w-full border-2 rounded-lg border-yellow-400"/>
  );
}

export default memo(Input);