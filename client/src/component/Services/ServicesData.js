import consultancy from "./concrete-consultancy.jpg";
import concreteMix from "./concrete mix.jpg";
import training from "./training.jpg";
import testing from "./testing1.jpg";
import durability from "./Durability.jpg";
import evaluation from "./Evaluation.jpg";
const ServicesData = [
  {
    img: consultancy,
    title: "Concrete Consultancy",
    body: [
      "Concrete performance specification development for specific project requirements",
      "Selection of raw materials, evaluation –specially for high strength and high durability concrete (HPC)",
      "Concrete placement advice",
      "Investigation of concrete defects and problems and recommendation of remedial measures",
      "Interaction with various agencies on concrete related matters",
    ],
  },
  {
    img: concreteMix,
    title: "Concrete Mix Design",
    body: [
      "Concrete Mix design for all requirements",
      "Grades up to M150",
      "High early strength",
      "Mass concrete – temperature control",
      "Concrete for marine environment",
      "Self Compacting Concrete",
      "Controlled Low Strength Mixes ( CLSM)",
      "Pervious concrete",
      "Use of appropriate cementitious systems for cost and performance",
      "Use of micro fine materials for cost and performance efficiency",
      "Mix optimization on a continuous basis",
      "Concrete mix trouble shooting in execution",
    ],
  },
  {
    img: training,
    title: "Technical Training",
    body: [
      "E Cube offers training in concrete technology for",
      "Engineers",
      "Supervisors",
      "Technicians",
      "Tailor made programmes",
      "Programmes at clients site",
    ],
  },
  {
    img: testing,
    title: "Non Destructive Testing",
    body: ["Schmidt rebound hammer", "UPV Measurement", "Core extraction & testing"],
  },
  { img: durability, title: "Concrete Durability Testing", body: [] },
  { img: evaluation, title: "Evaluation And Applicaiton", body: [] },
];
export default ServicesData;
