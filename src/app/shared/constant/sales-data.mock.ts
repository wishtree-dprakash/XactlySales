export const SalesData = [
  {
    "status": "warning",
    "position": "Sales VP",
    "name": "Ram San",
    "state": 'Delhi',
    "empID": "EP-001",
    "children": [
      {
        "state": "North America",
        "status": "critical",
        "name": "Mohan San",
        "empID": "EP-0013",
        "position": "Sales Manager",
        "children": [
          {
            "state": "Canada",
            "status": "normal",
            "name": "Tim Cook",
            "empID": "EP-0048",
            "position": "Sales Lead",
            "children": [{
              "name": "Mark Wood",
              "empID": "EP-0019",
              "state": "Toronto",
              "status": "normal",
              "position": "Sales Representative"
            },
            {
              "name": "Mark Cross",
              "empID": "EP-0029",
              "state": "Vancouver",
              "status": "warning",
              "position": "Sales Representative"
            }
            ]
          },
          {
            "state": "Canada",
            "status": "critical",
            "name": "Brett Lee",
            "empID": "EP-0148",
            "position": "Sales Lead",
            "children": [{
              "name": "Mark Wood",
              "empID": "EP-0019",
              "state": "Toronto",
              "status": "normal",
              "position": "Sales Representative"
            },
            {
              "name": "Mark Cross",
              "empID": "EP-0029",
              "state": "Vancouver",
              "status": "normal",
              "position": "Sales Representative"
            }
            ]
          }

        ],
      },
      {
        "state": "North America",
        "status": "normal",
        "name": "Rohit S",
        "empID": "EP-0015",
        "position": "Sales Manager",
        "children": [{
          "state": "Canada",
          "status": "normal",
          "name": "Ana Mick",
          "empID": "EP-0048",
          "position": "Sales Lead",
          "children": [{
            "name": "Mark Wood",
            "empID": "EP-0019",
            "state": "Toronto",
            "status": "normal",
            "position": "Sales Representative"
          },
          {
            "name": "Mark Cross",
            "empID": "EP-0029",
            "state": "Vancouver",
            "status": "normal",
            "position": "Sales Representative"
          }
          ]
        }
        ],
      },
      {
        "state": "North America",
        "status": "warning",
        "name": "Ankit S",
        "empID": "EP-00131",
        "position": "Sales Manager",
        "children": [{
          "state": "Canada",
          "status": "normal",
          "name": "Ana Mick",
          "empID": "EP-0048",
          "position": "Sales Lead",
          "children": [{
            "name": "Mark Wood",
            "empID": "EP-0019",
            "state": "Toronto",
            "status": "normal",
            "position": "Sales Representative"
          },
          {
            "name": "Mark Cross",
            "empID": "EP-0029",
            "state": "Vancouver",
            "status": "normal",
            "position": "Sales Representative"
          }
          ]
        }
        ],
      }
    ]
  }
]
