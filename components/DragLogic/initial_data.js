export let initialData2 = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "watch my favourite show" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "Draggable Components",
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
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
      taskIds:["task-1","task-2"],
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
      taskIds:[],
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
