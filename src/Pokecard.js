import './Pokecard.css';

const POKE_API =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const Pokecard = ({ id, name, type, exp }) => {
  let imgSrc = `${POKE_API}${id}.png`;

  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title">{name}</h1>
      <img src={imgSrc} alt="" />
      <div className="Pokecard-data"> TYPE: {type}</div>
      <div className="Pokecard-data"> EXP: {exp}</div>
    </div>
  );
};

export default Pokecard;
