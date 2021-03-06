// JAVASCRIPT
$(document).ready( function() {

  // Icon set
  const icons = [
      {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
      },
      {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
      },
      {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
      {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
      {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
      {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
      },
  ];

  // arrey di colori
  const color = ["blue","orange","purple"];

  // riferimenti html
  const container = $(".icons");

  // richiamo funzione type
  const type = types(icons);

  // assegnazione colore al type
  const colorType = icons.map((obj) =>{

    // index dell'array type
    const indexType = type.indexOf(obj.type);

     // spred
     return {
       ...obj,
       color : color[indexType],
     };
  });

  colorType.forEach((obj) => {

     // destrutturiamo per prendere quello che ci serve e trasferirlo in html
    const {family,prefix,name,color} = obj;

    // creazione html da stampare
    const html =
      `<div class="box">
        <i class="${family} ${prefix}${name}"
        style="color: ${color}"></i>
        <h3>${name}</h3>
       </div>`

     // stampa dell'html creato
    container.append(html);

  });


});//fine documento

// funzioni
function types(icons){

  // array vuoto per i types
  const types = [];

  // ciclo su array per la condizione types
  icons.forEach((obj) => {

    if (! types.includes(obj.type) ) {
        types.push(obj.type);
    }

  });

  return types;
}
