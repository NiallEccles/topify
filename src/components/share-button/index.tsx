import "./style.css";
import Mask from "../../assets/icon_mask.svg?component";
import ArrowLink from "../../assets/m3_arrow_linkout.svg?component";

interface props {
  text: string;
}

function ShareButton(props: props) {
  return (
    <button className="share-button">
        <Mask className="mask" />
        <ArrowLink className="icon" />
      {/* <span className="mask">
        <span className="icon"></span>
      </span> */}
    </button>
  );
}

export default ShareButton;
