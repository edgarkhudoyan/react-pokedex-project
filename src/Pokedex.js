import './Pokedex.css';
import Pokecard from './Pokecard';

const Pokedex = ({ pokemon, exp, isWinner }) => {
  let title;
  if (isWinner) {
    title = <h1 className="Pokedex-winner">Winning Hand!</h1>;
  } else {
    title = <h1 className="Pokedex-loser">Losing Hand!</h1>;
  }

  return (
    <div className="Pokedex">
      {title}

      <h4>Total Experience: {exp}</h4>
      <div className="Pokedex-cards">
        {pokemon.map((p) => (
          <Pokecard
            name={p.name}
            id={p.id}
            type={p.id}
            exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
