$( document ).ready( readyNow );

let garage = [];


/*
Do not change newCar for base mode!
*/
function newCar( yearInput, makeInput, modelInput ){
  console.log( 'in newCar:', yearInput, makeInput, modelInput );
  const newCarObject = {
    year: yearInput,
    make: makeInput,
    model: modelInput,
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
  newCar( year, make, model );
  $( '#yearInput' ).val( '' );
  $( '#makeInput' ).val( '' );
  $( '#modelInput' ).val( '' );

  displayCars();

} // end addCar


function displayCars(){
  console.log( 'in displayCars' );
  let el = $( '#carsOut' );
  el.empty();

  for( newCarObject of garage ){
    el.append( `<li>` + newCarObject.year + ` - ` + newCarObject.make + ` - ` + newCarObject.model + `</li>` );
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
