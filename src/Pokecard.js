import './Pokecard.css';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let toThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

const Pokecard = ({ id, name, type, exp }) => {
  let imgSrc = `${POKE_API}${toThree(id)}.png`;

  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title">{name}</h1>
      <div className="Pokecard-image">
        <img src={imgSrc} alt="" />
      </div>
      <div className="Pokecard-data"> TYPE: {type}</div>
      <div className="Pokecard-data"> EXP: {exp}</div>
    </div>
  );
};

export default Pokecard;
