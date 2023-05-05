import { Grid, Typography } from "@material-ui/core";
import GameCard from "./GameCard";

function GameList({ games }) {
  if (!games.length) {
    return <Typography variant="h4">Loading...</Typography>;
  }

  return (
    <Grid container spacing={3}>
      {games.map((game) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={game.id}>
          <GameCard game={game} />
        </Grid>
      ))}
    </Grid>
  );
}

export default GameList;
