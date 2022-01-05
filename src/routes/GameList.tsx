import { FormEvent, useEffect, useState } from "react";
import { IApiCall } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import GameListDisplay from "../components/GameListDisplay";
import Modal from "../components/Modal";
import { IGameCreate, IGameResult, IPlayerResult } from "../schemiaTypes";

interface IProps {
  apiCall: IApiCall;
}

export default function GameList(props: IProps) {
  const { apiCall } = props;
  const [games, setGames] = useState([]);
  const [openAddTeamModal, setOpenAddTeamModal] = useState(false);
  const [newTeamName, setNewTeamName] = useState("");
  const [newOtherTeamName, setNewOtherTeamName] = useState("");
  useEffect(() => {
    const data = getGames();
    async function getGames() {
      const res = await apiCall("/games");
      const gameData = await res.json();
      setGames(gameData);
    }
  }, []);

  async function deleteGame(id: Number) {
    setGames(games.filter((game: IGameResult) => game.id !== id));

    const res = await apiCall(`/games/${id}`, {
      method: "DELETE",
    });
  }

  async function createGame(event: FormEvent) {
    event.preventDefault();
    const UserData = await apiCall("/users/me").then((res) => res.json());
    const playerData = await apiCall("/players").then((res) => res.json());
    const players = playerData.filter(
      (player: IPlayerResult) => player.user.id === UserData.id
    );
    const player_id = players.map((player: IPlayerResult) => player.id);

    const gameData: IGameCreate = {
      name: newTeamName,
      other_team: newOtherTeamName,
      user_id: UserData.id,
      player_ids: player_id,
    };

    const res = await apiCall("/games/new", {
      method: "POST",
      body: JSON.stringify(gameData),
    }).then((res) => res.json());

    setGames(games.concat(res));
  }

  return (
    <div className="h-full bg-gradient-to-r from-gray-100 to-gray-200">
      <h1 className="text-center text-7xl ">Your Games</h1>
      {games.length > 0 ? (
        <GameListDisplay
          games={games}
          onDelete={deleteGame}
          apiCall={apiCall}
        />
      ) : (
        <h2 className="text-center text-5xl">There are no games to display.</h2>
      )}

      <button
        className="btn bg-primary rounded-full"
        id="addPlayerBtn"
        onClick={() => {
          setOpenAddTeamModal(true);
        }}
      >
        <FontAwesomeIcon size="lg" icon={faPlus} color="white" />
      </button>

      <Modal
        onClose={() => {
          setOpenAddTeamModal(false);
        }}
        open={openAddTeamModal}
        title="Add Game"
      >
        <form onSubmit={createGame}>
          <label className="font-bold text-secondary block"> Game Name </label>
          <input
            type="text"
            className="input w-full"
            required
            value={newTeamName}
            onChange={(event) => setNewTeamName(event.target.value)}
          />

          <label className="font-bold text-secondary block mt-2">
            {" "}
            Other Team Name{" "}
          </label>
          <input
            type="text"
            className="input w-full"
            required
            value={newOtherTeamName}
            onChange={(event) => setNewOtherTeamName(event.target.value)}
          />
          <button
            className="btn bg-secondary text-white w-full mt-2 m-2"
            type="submit"
          >
            Add Game
          </button>
        </form>
      </Modal>
    </div>
  );
}
