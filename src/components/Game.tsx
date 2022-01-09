import { IApiCall } from "../api";
import { useNavigate } from "react-router";
import { ISession } from "../schemaTypes";

interface IProps {
  apiCall: IApiCall;
  gameName: string;
  id: number;
  onDelete: (id: number) => void;
  session: ISession;
  onGameIdChange: (s: number) => void;
}

export default function Game(props: IProps) {
  const { apiCall, gameName, id, onDelete, session, onGameIdChange } = props;
  const navigate = useNavigate();

  function viewGame() {
    onGameIdChange(id);
    const newSession = JSON.stringify({
      token: session.token,
      base: session.base,
      gameId: id,
    });
    sessionStorage.setItem("score-tracker-session", newSession);
    navigate("/gamescreen");
  }

  return (
    <div className="flex  justify-center shadow-lg rounded-xl bg-gray-100">
      <div className="m-10 content-center ">
        <h2 className="text-xl"> {gameName} </h2>
        <slot> shots out of missed </slot>
        <br />
        <div className="flex gap-3   ">
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
  );
}
