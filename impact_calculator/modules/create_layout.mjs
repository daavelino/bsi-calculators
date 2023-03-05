function create_layout(settings) {

  // getting the placeholder from the main.js file:
  let pholder = settings["html_layout"]["div_id"];  

  // getting form data from the main.js file:
  let html_form = settings["html_form"];

  // creating the html structure:
  document.addEventListener("DOMContentLoaded", () => {

    let main_div = document.getElementById(pholder);
    // creating the input form:
    let form = document.createElement("form");
    form.setAttribute("oninput","calculator()");
    main_div.appendChild(form);

    for (let i = 0; i < html_form.length; i++) {
      let tmp = html_form[i];

      // form header:
      let form_domain = document.createElement(tmp["domain_size"]);
      form_domain.innerText = tmp["domain"];
      form.appendChild(form_domain);

      // form input elements:
      let input_data = tmp["form_input"];
      for (let j = 0; j < input_data.length; j++) {
        // labels:
	let tmp = input_data[j];

        let label = document.createElement("label");
        label.setAttribute("for", "fname");
        label.innerText = tmp["label"];
        form.appendChild(label);

        // input:
        let input = document.createElement("input");
        input.setAttribute("type", tmp["type"]);
        input.setAttribute("id", tmp["id"]);
        input.setAttribute("min", tmp["min"]);
        input.setAttribute("value", tmp["value"]);
        form.appendChild(input);

        let linebreak = document.createElement("br"); 
        form.appendChild(linebreak);
      }
    }

    // output:
    let linebreak = document.createElement("br"); 
    let tmp = settings["output"];

    let output = document.createElement("div");
    output.setAttribute("id","output");

    let label = document.createElement(tmp["label_size"]);
    label.innerText = tmp["label"];
    output.append(label);

    let result = document.createElement("div");
    result.setAttribute("id", "impact_result");
    output.appendChild(result);
    output.appendChild(linebreak);

    tmp = document.createElement("div");
    tmp.setAttribute("id", "protection_level");
    output.appendChild(tmp);
    output.appendChild(linebreak);

    main_div.appendChild(output);

    // placing html elements properly:
    let div = document.getElementById(pholder);
  });

}

export {create_layout};
