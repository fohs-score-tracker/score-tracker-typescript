interface IProps {
  player: { name: string };
}

export default function Player({ player }: IProps) {
  return (
    <div>
      <h4>This is a player:</h4>
      <h3>{player.name}</h3>
    </div>
  );
}
