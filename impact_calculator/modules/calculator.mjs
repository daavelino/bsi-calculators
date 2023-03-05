function calculate() {

  var protection_level = 50000; // hourly
  var employees_num = parseInt(document.getElementById("employees_num").value);
  var average_salary = parseInt(document.getElementById("average_salary").value);
  var roi_rate = parseInt(document.getElementById("employee_roi").value);
  var operational_cost = parseInt(document.getElementById("operational_cost").value);
  var legal_cost = parseInt(document.getElementById("legal_cost").value);
  var brand_value = parseInt(document.getElementById("brand_value").value);
  var image_impact = parseInt(document.getElementById("image_impact").value);
  var opportunities_impact = parseInt(document.getElementById("opportunities_impact").value);
  var competitive_impact = parseInt(document.getElementById("competitive_impact").value);

  var impact = document.getElementById("impact_result");

  // multiplicative factor to compute the true cost (approximate):
  average_salary = average_salary * 1.5;


  var result = employees_num*((1 + roi_rate)*average_salary + operational_cost)
               + legal_cost
               + brand_value * (1 + image_impact / 100)
               + brand_value * (1 + opportunities_impact/ 100)
               + brand_value * (1 + competitive_impact / 100);


  let result_daily = result / 30;
  let result_hourly = result_daily / 24;
 

  let tmp = document.getElementById("protection_level");
  if (result_hourly < protection_level) {
    tmp.innerHTML = "Intern or Unkritisch";
  } else {
    tmp.innerHTML = "Vertraulich oder Kritisch";
  }

  result_hourly = new Intl.NumberFormat(
    'de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(result_hourly);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat 

  impact.innerHTML = result_hourly + "/hour";

}

export {calculate};
