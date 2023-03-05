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
          "type":"number",
          "id":"employees_num",
          "min":0,
          "value":1
        },
        {
          "label":"Average salary (Euro/month): ",
          "type":"number",
          "id":"average_salary",
          "min":0,
          "value":3500
        },
        {
          "label":"Return over Investment rate (%): ",
          "type":"number",
          "id":"employee_roi",
          "min":0,
          "value":20
        },
        {
          "label":"Average operational cost (Euro/month): ",
          "type":"number",
          "id":"operational_cost",
          "min":0,
          "value":300
        },
      ]
    },
    {
      "domain": "Legal/contractual domain",
      "domain_size":"h4",
      "tooltip": "Violation of any law, regulation or contract.",
      "form_input": [
        {
          "label":"Total legal/contractual cost (Euro/month): ",
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
          "type":"number",
          "id":"brand_value",
          "min":0,
          "value":10000
        },
        {
          "label":"Image/reputation impact (%): ",
          "type":"range",
          "id":"image_impact",
          "min":0,
          "value":5
        },
        {
          "label":"Missed opportunities impact (%): ",
          "type":"range",
          "id":"opportunities_impact",
          "min":0,
          "value":5
        },
        {
          "label":"Missing competitive advantage impact (%): ",
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
