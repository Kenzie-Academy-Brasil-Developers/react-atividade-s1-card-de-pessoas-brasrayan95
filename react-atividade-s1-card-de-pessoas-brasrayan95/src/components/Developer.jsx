import "./style.css";

function Developer(prop) {
  return (
    <div className="devCard">
      <p>Dev: {prop.name}</p>
      <p>Idade: {prop.age}</p>
      <p>País: {prop.country}</p>
    </div>
  );
}

export default Developer;
