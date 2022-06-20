const list =require('./list.mjs').default;

var add = ["../img/jpg/img06.jpg","REf Sepcial",2000,"Descripción especial"];
console.log('Nuevo Dato:');
console.log(add);

/*
console.log('consulta nuevo campo:');
list.listUpdate(add);
list.items.push(add);
console.log(list.items);

console.log('consulta listShow');
list.listShow();
*/

document.getElementById("Upload").onclick = function() {getInputValue()};
function getInputValue() 
{   info.push(document.getElementById("linkImg").value);
    info.push(document.getElementById("reference").value);
    info.push(document.getElementById("price").value);
    info.push(document.getElementById("descript").value);
    console.log('inside getInputValue');
    console.log(info);

    document.getElementById("linkImg").value='';
    document.getElementById("reference").value='';
    document.getElementById("price").value='';
    document.getElementById("descript").value='';
    items.push(info);
    console.log('After upload info into items');
    console.log(items);
    return false;
}

