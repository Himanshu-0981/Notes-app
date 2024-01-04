
type InputProps = {
  type: string;
  name: string;
  value: string
  placeholder: string;
  className?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ type, name, value, placeholder, className, handleChange }: InputProps) {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        className={`${className} border border-black focus:outline-none px-1 py-2 `}
        onChange={handleChange}
      />
    </>
  );
}
