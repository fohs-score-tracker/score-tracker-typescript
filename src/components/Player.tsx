interface IProps {
  name: string;
}

export default function Player( props:IProps ) {
  const {name} = props;
  return (
    <div className="flex grid w-96 shadow-l outline-3 outline-black  bg-gray-100">
      <h3>{name}</h3>
      <br/>
      <slot> Made  Out of  shots </slot>

    </div>
  );
}
