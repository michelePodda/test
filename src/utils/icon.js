// import Artificer from "../images/iconsClassColored/Artificer.png";
import Barbarian from "../images/iconsClassColored/barbarian.png";
import Bard from "../images/iconsClassColored/bard.png";
import Cleric from "../images/iconsClassColored/cleric.png";
import Druid from "../images/iconsClassColored/druid.png";
import Fighter from "../images/iconsClassColored/fighter.png";
import Monk from "../images/iconsClassColored/monk.png";
import Paladin from "../images/iconsClassColored/paladin.png";
import Ranger from "../images/iconsClassColored/ranger.png";
import Rogue from "../images/iconsClassColored/rogue.png";
import Sorcerer from "../images/iconsClassColored/sorcerer.png";
import Warlock from "../images/iconsClassColored/warlock.png";
import Wizard from "../images/iconsClassColored/wizard.png";

const icon = ({ classe }) => {
  let icon = "";
  switch (classe) {
    // case "Artefice":
    //   icon = Artificer;
    //   break;
    case "Barbaro":
      icon = Barbarian;
      break;
    case "Bardo":
      icon = Bard;
      break;
    case "Chierico":
      icon = Cleric;
      break;
    case "Druido":
      icon = Druid;
      break;
    case "Guerriero":
      icon = Fighter;
      break;
    case "Monaco":
      icon = Monk;
      break;
    case "Paladino":
      icon = Paladin;
      break;
    case "Ranger":
      icon = Ranger;
      break;
    case "Ladro":
      icon = Rogue;
      break;
    case "Mago":
      icon = Wizard;
      break;
    case "Warlock":
      icon = Warlock;
      break;
    case "Stregone":
      icon = Sorcerer;
      break;
    default:
      icon = "";
  }
  return (
    <>
      <img id="iconClass" src={icon} alt={classe} style={{ width: "30px" }} />
    </>
  );
};
export default icon;
