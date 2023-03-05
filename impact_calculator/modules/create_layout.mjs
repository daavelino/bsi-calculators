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
      form_domain.setAttribute("title",tmp["tooltip"]);
      form.appendChild(form_domain);

      // form input elements:
      let input_data = tmp["form_input"];
      for (let j = 0; j < input_data.length; j++) {
        // labels:
	let tmp = input_data[j];

        let label = document.createElement("label");
        label.setAttribute("for", "fname");
        label.innerHTML = tmp["label"];
        form.appendChild(label);

        // input:
        let input = document.createElement("input");
        input.setAttribute("title", tmp["tooltip"]);
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

    let output_div = document.createElement("div");
    output_div.setAttribute("id","output");
    main_div.appendChild(output_div);

    let hline = document.createElement("hr");
    output_div.append(hline);

    let output_form = document.createElement("form");
    output_div.appendChild(output_form);

    
    let label = document.createElement("label");
    label.innerHTML = settings["output"]["label"];
    output_form.appendChild(label);

    let output = document.createElement("output");
    output.setAttribute("id","impact_result");
    output_form.appendChild(output);

    output_form.appendChild(linebreak);

    label = document.createElement("label");
    label.innerHTML = settings["output"]["label2"];
    output_form.appendChild(label);

    output = document.createElement("output");
    output.setAttribute("id","protection_level");
    output_form.appendChild(output);




    // placing html elements properly:
    let div = document.getElementById(pholder);
  });

}

export {create_layout};
