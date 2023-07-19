interface Props {
  label: string;
  placeholder: string;
  type: string;
}

const TextField = ({ label, type, placeholder }: Props) => {
  return (
    <label htmlFor="name" className="flex flex-col gap-1 text-[1.4rem]">
      <p className="pl-[0.4rem]">{label}</p>
      <input
        type={type}
        placeholder={placeholder}
        className="p-[0.8rem] text-[1.4rem] focus:outline-[#A3D9F8] border rounded-[0.8rem] border-[#D5DBE1]"
      />
    </label>
  );
};

export default TextField;
