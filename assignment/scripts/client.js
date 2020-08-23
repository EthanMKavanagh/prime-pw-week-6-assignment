$( document ).ready( readyNow );

let garage = [];
const maxGarage = 3;

/*
Do not change newCar for base mode!
*/
function newCar( yearInput, makeInput, modelInput, priceInput ){
  console.log( 'in newCar:', yearInput, makeInput, modelInput, priceInput );
  const newCarObject = {
    year: yearInput,
    make: makeInput,
    model: modelInput,
    price: priceInput,
  } // end newCarObject
  garage.push( newCarObject );
  return true;
} // end newCar

function readyNow(){
  $( '#addCarButton' ).on( 'click', addCar );
} // end readyNow

function addCar(){
  let year = $( '#yearInput' ).val();
  let make = $( '#makeInput' ).val();
  let model = $( '#modelInput' ).val();
  let price = $( '#priceInput' ).val();
  newCar( year, make, model, price );
  $( '#yearInput' ).val( '' );
  $( '#makeInput' ).val( '' );
  $( '#modelInput' ).val( '' );
  $( '#priceInput' ).val( '' );

  displayCars();
  carExpense();
} // end addCar


function displayCars(){
  console.log( 'in displayCars' );
  let el = $( '#carsOut' );
  el.empty();

  for( newCarObject of garage ){
    el.append( `<li>` + newCarObject.year + ` - ` + newCarObject.make + ` - ` + newCarObject.model + ` - ` + `$` + newCarObject.price + `</li>` );
  } // end for

} // end displayCars


function carExpense(){
  let totalPrice = 0;
  for( let i = 0; i < garage.length; i++ ){
    totalPrice += Number( garage[ i ].price );
  } // end for
  console.log( 'totalPrice:', totalPrice );
  let el = $( '#carCost' );
  el.empty();
  el.append( totalPrice );
} // end carExpenses
