type ButtonProps = {
  name: string;
};

export default function Button(props: ButtonProps) {
  return (
    <button className="bg-primaryGradient px-10 py-2 font-semibold rounded-lg">
        {props.name}
    </button>
  );
}