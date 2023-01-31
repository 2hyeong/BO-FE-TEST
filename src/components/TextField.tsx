import { forwardRef } from "react";

interface ITextField {
  className: string;
}

const TextField = forwardRef<HTMLInputElement, ITextField>(
  ({ className }, ref) => {
    return <input type="text" className={className} ref={ref} />;
  }
);

export default TextField;
