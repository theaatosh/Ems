const employees= [
      {
        "id": 1,
        "name":"aatosh1",
        "email": "employee1@example.com",
        "password": "123",
        "taskCounts":{
            "active":2,
              "newTask":1,
              "completed":1,
              "failed":0,
        },
        "tasks": [
          {
            "status": {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
            },
            "title": "Complete report",
            "description": "Finish the quarterly financial report.",
            "date": "2024-10-25",
            "category": "Finance"
          },
          {
            "status": {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
            },
            "title": "Team meeting",
            "description": "Discuss project timelines with the team.",
            "date": "2024-10-22",
            "category": "Management"
          },
          {
            "status": {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false
            },
            "title": "Prepare presentation",
            "description": "Create slides for the client meeting.",
            "date": "2024-10-30",
            "category": "Marketing"
          }
        ]
      },
      {
        "id": 2,
        "name":"aatosh2",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts":{
            "active":2,
              "newTask":1,
              "completed":1,
              "failed":0,
        },
        "tasks": [
          {
            "status": {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
            },
            "title": "Update website",
            "description": "Refresh the homepage with the latest products.",
            "date": "2024-10-26",
            "category": "IT"
          },
          {
            "status": {
              "active": false,
              "newTask": false,
              "completed": false,
              "failed": true
            },
            "title": "Customer feedback analysis",
            "description": "Analyze recent feedback for product improvements.",
            "date": "2024-10-20",
            "category": "Customer Service"
          }
        ]
      },
      {
        "id": 3,
        "name":"aatosh3",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts":{
          "active":3,
            "newTask":2,
            "completed":1,
            "failed":0,
      },
        "tasks": [
          {
            "status": {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
            },
            "title": "Social media campaign",
            "description": "Design and schedule posts for next month.",
            "date": "2024-10-27",
            "category": "Marketing"
          }
        ]
      },
      {
        "id": 4,
        "name":"aatosh4",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts":{
          "active":2,
            "newTask":1,
            "completed":1,
            "failed":0,
      },
        "tasks": [
          {
            "status": {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false
            },
            "title": "Inventory check",
            "description": "Verify stock levels for end-of-month reporting.",
            "date": "2024-10-19",
            "category": "Logistics"
          }
        ]
      },
      {
        "id": 5,
        "name":"aatosh5",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts":{
          "active":2,
            "newTask":1,
            "completed":1,
            "failed":0,
      },
        "tasks": [
          {
            "status": {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false
            },
            "title": "Employee training",
            "description": "Organize training sessions for new hires.",
            "date": "2024-10-29",
            "category": "HR"
          }
        ]
      }
    ]


    const admin=[ {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ]
  
export const setLocalStorage=()=>{
    localStorage.setItem('employee',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

}

export const getLocalStorage=()=>{
  const employees=JSON.parse(localStorage.getItem('employee'));
  const admin=JSON.parse(localStorage.getItem('admin'));

  return{employees,admin}

}