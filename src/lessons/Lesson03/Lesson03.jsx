import "./styles.css";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import Button from "../../components/Button/Button";
import { lionObj, zebraObj, hippoObj } from "./data";

function Lesson03() {
  return (
    <div className="lesson03-component">
      <Button buttonName="Clear" />
      <Button buttonName="Delete" />
      <Button />
      <AnimalCard
        animalName={lionObj.name}
        species={lionObj.species}
        role={lionObj.role}
        animalImg={lionObj.image}
        //animalData = {lionObj}
      />
      <AnimalCard
        animalName={zebraObj.name}
        species={zebraObj.species}
        role={zebraObj.role}
        animalImg={zebraObj.image}
      />
      <AnimalCard
        animalName={hippoObj.name}
        species={hippoObj.species}
        role={hippoObj.role}
        animalImg={hippoObj.image}
      />
    </div>
  );
}

export default Lesson03;
