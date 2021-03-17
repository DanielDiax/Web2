let names = ["Pedro", "Pablo", "Jacinto", "Jose", "Juan", "Enrique"];
let cards = document.getElementById("cards");

const removeElement = (id) => {
  let element = document.getElementById(`name${id}`);
  element.remove();
}


for (let i = 0; i < names.length; i++) {
  let template = `<div id="name${i}" class="col-12 col-sm-12 col-md-6 col-lg-3" onClick="removeElement(${i})">
                    <div class="card">
                      <div class="card-body">
                        ${names[i]}
                      </div>
                    </div>
                  </div>`
  cards.innerHTML += template;
}


const addElement = () => {
  const id = prompt("ingrese id")
  const name = prompt("Ingrese nombre")
  const cards = document.getElementById("cards");
  let element = document.createElement('div');
  //element.setAttribute("id", "25");
  //element.setAttribute("class", "col-12 col-sm-12 col-md-6 col-lg-3")
    let template = `<div id="name${id}" class="col-12 col-sm-12 col-md-6 col-lg-3" onClick="removeElement()">
                        <div class="card">
                          <div class="card-body">
                            ${name}
                          </div>
                        </div>
                    </div>`
  cards.innerHTML += template;
  //cards.appendChild(element);
}
