import FeatureSection from "../DraggableComponents/FeatureSections";
import HeroSections from "../DraggableComponents/HeroSections";
import Avatars from "../DraggableComponents/Avatars";
import CTAsection from "../DraggableComponents/CTAsection";
import Dashboard from "../DraggableComponents/Dashboard";
import DesscriptionLists from "../DraggableComponents/DescriptionLists";
import DropDowns from "../DraggableComponents/DropDowns";
import InputGroups from "../DraggableComponents/InputGroups";
import Modals from "../DraggableComponents/Modals";
import Navbars from "../DraggableComponents/Navbars";
import PageHeadings from "../DraggableComponents/PageHeadings";
import Pagination from "../DraggableComponents/Pagination";
import Registration from "../DraggableComponents/Registration";
import Widetables from "../DraggableComponents/WideTables";

export let initialData2 = {
  tasks: {
    "task-1": { id: "task-1", content: FeatureSection() },
    "task-2": { id: "task-2", content: HeroSections() },
    "task-3": { id: "task-3", content: Avatars() },
    "task-4": { id: "task-4", content: CTAsection() },
    "task-5": { id: "task-5", content: Dashboard() },
    "task-6": { id: "task-6", content: DesscriptionLists() },
    "task-7": { id: "task-7", content: DropDowns() },
    "task-8": { id: "task-8", content: InputGroups() },
    "task-9": { id: "task-9", content: Modals() },
    "task-10": { id: "task-10", content: Navbars() },
    "task-11": { id: "task-11", content: PageHeadings() },
    "task-12": { id: "task-12", content: Pagination() },
    "task-13": { id: "task-13", content: Registration() },
    "task-14": { id: "task-14", content: Widetables() },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Draggable Components",
      taskIds: ["task-1", "task-2",]
      // taskIds: ["task-1", "task-2", "task-3", "task-4"]
    },
    "column-2": {
      id: "column-2",
      title: "CANVAS",
      taskIds: []
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: []
    }
  },
  columnOrder: ["column-1", "column-2", "column-3"]
};
export const initialData1 = {
  columns: [
    {
      id: "column-1",
      title: "DRAGGABLE COMPONENTS",
      rules: "",
      taskIds: ["task-1", "task-2"],
      rows: [
        {
          id: "1",
          title: "Card one",
          user: "",
          description: "This is card one"
        },
        {
          id: "2",
          title: "card Two",
          user: "",
          description: "This is card two"
        },
        // {
        //   id: "3",
        //   title: "Card three",
        //   user: "",
        //   description: "This is card three"
        // },
        // {
        //   id: "4",
        //   title: "Card three",
        //   user: "",
        //   description: "This is card three"
        // },
        // {
        //   id: "5",
        //   title: "Card three",
        //   user: "",
        //   description: "This is card three"
        // },
        // {
        //   id: "5",
        //   title: "Card three",
        //   user: "",
        //   description: "This is card three"
        // },
        // {
        //   id: "7",
        //   title: "Card three",
        //   user: "",
        //   description: "This is card three"
        // },
      ]
    },
    {
      id: "column-2",
      title: "Canvas",
      rules: "",
      taskIds: [],
      rows: []
    },
    // {
    //   id: "column-3",
    //   title: "Completed",
    //   rules: "",
    //   rows: []
    // },
    // {
    //   id: "column-4",
    //   title: "In Review",
    //   rules: "",
    //   rows: []
    // },
    // {
    //   id: "column-5",
    //   title: "Done",
    //   rules: "",
    //   rows: []
    // }
  ],
  // columnOrder: ["column-1", "column-2", "column-3", "column-4", "column-5"]
  columnOrder: ["column-1", "column-2"]
};
const data = [
  {
    id: "1",
    title: "",
    rule: "",
    rows: [
      {
        id: "1",
        name: "",
        description: ""
      },
      {
        id: "2",
        name: "",
        description: ""
      }
    ]
  }
];

// export default initialData;
