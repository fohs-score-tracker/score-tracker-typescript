import { IApiCall } from "../api";

interface IProps {
  apiCall: IApiCall;
  gameName: string;
  id: Number;
  onDelete: (id: Number) => void;
}

export default function Game(props: IProps) {
  const { apiCall, gameName, id, onDelete } = props;

  return (
    <div className="flex w-96 shadow-l outline-3 outline-black   bg-gray-100 ">
      <div className="m-10 content-center ">
        <h2 className="text-xl"> {gameName} </h2>
        <slot> shots out of missed </slot>
        <br />
        <div className="grid grid-flow-row grid-rows-1  ">
          <div className="grid-cols-1 grid-flow-col space-x-2 place-content-center">
            <button
              className="btn bg-red-500 text-white"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
            <button
              className="btn bg-blue-600 text-white"
              onClick={() => {
                console.log(id);
              }}
            >
              {" "}
              Edit Game{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
