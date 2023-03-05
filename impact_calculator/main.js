import {create_layout} from './modules/create_layout.mjs';

const settings = {
  "html_layout": {
    "div_id": "impact_pholder"
  },

  "html_form": [
    {
      "domain": "Administrative domain", 
      "domain_size":"h4",
      "tooltip": "Impairment of task performance.",
      "form_input": [
        {
          "label":"Number of affected employees: ",
	  "tooltip":"Employees impaired due to the incident.",
          "type":"number",
          "id":"employees_num",
          "min":0,
          "value":1
        },
        {
          "label":"Average salary (Euro/month): ",
	  "tooltip":"Average salary of the affected employees",
          "type":"number",
          "id":"average_salary",
          "min":0,
          "value":3500
        },
        {
          "label":"Return over Investment rate (%): ",
	  "tooltip":"Return rate over salary paid.",
          "type":"number",
          "id":"employee_roi",
          "min":0,
          "value":20
        },
        {
          "label":"Average operational cost (Euro/month): ",
	  "tooltip":"The average cost to enable the employee's activities (e.g. computer, office rent, energy, etc..).",
          "type":"number",
          "id":"operational_cost",
          "min":0,
          "value":300
        },
      ]
    },
    {
      "domain": "Legal/contractual domain",
      "tooltip":"Legal or contractual fees.",
      "domain_size":"h4",
      "form_input": [
        {
          "label":"Total legal/contractual cost (Euro/month): ",
          "tooltip": "The sum of all legal/contractual costs (e.g. legal fines, SLA breaking costs, etc..)",
          "type":"number",
          "id":"legal_cost",
          "min":0,
          "value":5000
        }
      ]
    },
    {
      "domain": "Business domain",
      "domain_size":"h4",
      "tooltip": "Negative internal and external impact.",
      "form_input": [
        {
          "label":"Estimated raw Brand impact (Euro): ",
	  "tooltip":"",
          "type":"number",
          "id":"brand_value",
          "min":0,
          "value":10000
        },
        {
          "label":"Image/reputation impact (%): ",
	  "tooltip":"",
          "type":"range",
          "id":"image_impact",
          "min":0,
          "value":5
        },
        {
          "label":"Missed opportunities impact (%): ",
	  "tooltip":"",
          "type":"range",
          "id":"opportunities_impact",
          "min":0,
          "value":5
        },
        {
          "label":"Missing competitive advantage impact (%): ",
	  "tooltip":"",
          "type":"range",
          "id":"competitive_impact",
          "min":0,
          "value":5
        },
      ]
    }
  ],
  "output": {
    "label": "Financial impact (estimated): ",
    "label_size": "h3"
  }
};

create_layout(settings);
