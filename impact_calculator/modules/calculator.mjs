function calculate() {

  var protection_level = 50000; 
  var employees_num = parseInt(document.getElementById("employees_num").value);
  var average_salary = parseInt(document.getElementById("average_salary").value);
  var benefit_rate = parseInt(document.getElementById("employee_roi").value);
  var operational_cost = parseInt(document.getElementById("operational_cost").value);
  var legal_cost = parseInt(document.getElementById("legal_cost").value);
  var brand_value = parseInt(document.getElementById("brand_value").value);
  var image_impact = parseInt(document.getElementById("image_impact").value);
  var opportunities_impact = parseInt(document.getElementById("opportunities_impact").value);
  var competitive_impact = parseInt(document.getElementById("competitive_impact").value);

  var impact = document.getElementById("impact_result");
  var impact_label = impact.innerText;

  var result = employees_num*((1 + benefit_rate)*average_salary + operational_cost)
               + legal_cost
               + brand_value * image_impact / 100
               + brand_value * opportunities_impact/ 100
               + brand_value * competitive_impact / 100;

  let tmp = document.getElementById("protection_level");
  
  if (result < protection_level) {
    tmp.innerHTML = "Schutzbedarfskategorie: " + "<b>Intern or Unkritisch</b>";
  } else {
    tmp.innerHTML = "Schutzbedarfskategorie: " + "<b>Vertraulich oder Kritisch</b>";
  }

  let result_daily = result / 30;
  let result_hourly = result_daily / 24;
  result = new Intl.NumberFormat(
    'de-DE', {
      style: 'currency', 
      currency: 'EUR' 
    }).format(result);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat 
  result_hourly = new Intl.NumberFormat(
    'de-DE', {
      style: 'currency',
      currency: 'EUR'
    }).format(result_hourly);
  impact.innerHTML = "<b>Financial impact:</b> " + result + "/month (<b>" + result_hourly + "/hour</b>)";

}

export {calculate};
