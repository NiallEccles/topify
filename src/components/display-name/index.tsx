import "./style.css";

interface props {
  displayName?: string;
}

function DisplayName(props: props) {
  return <h2 className="display-name">{props.displayName}</h2>;
}

export default DisplayName;
