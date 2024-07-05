import "./styles.css";

function Button({ buttonName = "Get" }) {
  // const nameButton = "Get";

  // return <button className="button-component">{nameButton} button</button>;
  return <button className="button-component">{buttonName}</button>;
}

export default Button;
