function commentForm() {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const textarea = document.createElement("textarea");
  const btn = document.createElement("button");

  input.placeholder = "Enter name";
  textarea.placeholder = "Enter message";
  btn.innerHTML = "Sent";

  const body = document.querySelector("body");

  form.onsubmit = event => {
    event.preventDefault();
    const p = document.createElement("p");
    // console.log(textarea.value);
    // console.log(textarea.input);
    // body.appendChild(p);
    p.innerHTML = `${textarea.value} <br /> <b> ${input.value}</b>`;
    body.appendChild(p);
  };
  form.appendChild(input);
  form.appendChild(textarea);
  form.appendChild(btn);
  body.appendChild(form);
}
export { commentForm };
