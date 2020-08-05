export function getDifYear(year) {
  return new Date().getFullYear() - year;
}

export function calcBrand(brand) {
  let inc;
  switch (brand) {
    case "european":
      inc = 1.3;
      break;
    case "american":
      inc = 1.15;
      break;
    case "asian":
      inc = 1.05;
      break;
    default:
      break;
  }
  return inc;
}


export function getPlan(plan){
    return (plan === 'basic' ? 1.20 : 1.50);
}