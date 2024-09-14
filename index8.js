function Tipcalculation(billamt,tippercent){
  let tip=billamt*(tippercent/100);
  return tip,
  console.log(tip);
}

Tipcalculation(100,5);