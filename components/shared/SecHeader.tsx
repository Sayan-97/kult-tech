type HeadersProps = {
  title: string;
  des?: string;
};

export default function SecHeader(props: HeadersProps) {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-[2.5rem] font-bold leading-tight">{props.title}</h2>
      <p className="text-textDarkGrey">{props.des}</p>
    </div>
  );
}
