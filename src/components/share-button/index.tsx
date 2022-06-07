import "./style.css";
import Mask from "../../assets/icon_mask.svg?component";
import ArrowLink from "../../assets/m3_arrow_linkout.svg?component";

interface props {
  text: string;
  alignment: string;
}

function ShareButton(props: props) {
  return (
    <button className={`share-button ${props.alignment}`}>
        <Mask className="mask" />
        <ArrowLink className="icon" />
      {/* <span className="mask">
        <span className="icon"></span>
      </span> */}
    </button>
  );
}

export default ShareButton;
