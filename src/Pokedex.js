import './Pokedex.css';
import Pokecard from './Pokecard';

const Pokedex = (props) => {
  return (
    <div className="Pokedex">
      <div className="Pokedex-cards">
        {props.pokemon.map((p) => (
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

Pokedex.defaultProps = {
  pokemon: [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
  ],
};

export default Pokedex;
