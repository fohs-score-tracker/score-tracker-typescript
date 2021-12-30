interface IState {}

interface IProps {
  type?: string;
  className?: string;
}

export default function Alert(props: IProps) {
  return (
    <div
      className={`alert alert-dismissible d-flex align-items-center alert-${props.type} ${props.className}`}
    >
      <slot>Something went wrong</slot>
      <button type="button" className="btn-close btn" data-bs-dismiss="alert" />
    </div>
  );
}
