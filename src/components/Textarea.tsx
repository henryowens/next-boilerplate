import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const classes =
  "bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500";
const Textarea: React.FC<TextareaProps> = ({ className, ...props }) => (
  <textarea className={`${classes} ${className}`} {...props} />
);

export default Textarea;
