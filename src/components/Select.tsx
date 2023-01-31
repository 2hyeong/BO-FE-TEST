import { FormEvent, useCallback, useState } from "react";

export interface IOption {
  value: string | number;
  label: string;
}

interface ISelect {
  defaultValue: string;
  callback?: (v) => void;
  options: IOption[];
  className?: string;
}

const Select = ({
  defaultValue,
  callback,
  options,
  className = "",
}: ISelect) => {
  const [selected, setSelected] = useState(defaultValue);

  const handleSelect = useCallback(
    (e: FormEvent<HTMLSelectElement>) => {
      setSelected(e.currentTarget.value);
      if (callback) callback(e.currentTarget.value);
    },
    [selected]
  );

  return (
    <select className={className} value={selected} onChange={handleSelect}>
      {options.map((option) => (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
