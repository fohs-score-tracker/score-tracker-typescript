import { IApiCall } from "../api";
import { useNavigate } from "react-router";
import { ISession } from "../schemiaTypes";

interface IProps {
  apiCall: IApiCall;
  gameName: string;
  id: Number;
  onDelete: (id: Number) => void;
  session: ISession;
}

export default function Game(props: IProps) {
  const { apiCall, gameName, id, onDelete, session} = props;
  const navigate = useNavigate();

  function viewGame() {
    const newSession = JSON.stringify({ token: session.token, base: session.base, gameId: id });
    sessionStorage.setItem("score-tracker-session", newSession);
    navigate("/gamescreen");
  }
  


  return (
    <div className="flex w-96 gap-20 shadow-l outline-3 outline-black   bg-gray-100 ">
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
                viewGame();                
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

