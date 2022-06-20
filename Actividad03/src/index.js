
import {items} from "./list.mjs";
const elements = document.querySelector('.cards');

console.log(items[0]);
var info=["/img/jpg/img03.jpg","Tarjeta03",40000,"descripcion3"];
items.push(info);

/*--------------------------------------------------------- add cards */

document.getElementById("Upload").onclick = function() {getInputValue()};

function getInputValue()
{   var info=["/img/jpg/img06.jpg","Tarjeta04",40000,"descripcion3"];


}



/*-------------------------------------------------------- deploy cards*/

function deployCard ([img,cardTitle,price,descr])
{   let code =
    `
    <div class="col s1 m3 l4">
        <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src=${img}>
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">${cardTitle}<i class="material-icons right">más info</i></span>
                <p><a href="#">Precio: $ ${price}</a></p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">${cardTitle}<i class="material-icons right">cerrar</i></span>
                <p>${descr}</p>
            </div>
        </div>
    </div>
    `;
    elements.innerHTML += code;
}
items.forEach(item=>deployCard(item));



