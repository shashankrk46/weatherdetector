const ui=new UI();



// init weather object

const climate=new Climate();

climate.getWeather()
.then(results=>{
   console.log(results);
   ui.paint(results);
})
.catch(err=>{console.log(err)})
