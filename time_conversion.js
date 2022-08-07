//time conversion
function timeConversion(s) {
  // Write your code here
  //get AM or PM from s
  //AM --> 12AM  => 00 / 
  //PM --> 12 > _ => +12 / 12 => 12
  const amOrPm = s.chatAt(8);
  let hour = s.slice(0,2);
  let militaryHour = "";

  if(amOrPm === "A") {
    if(hour === "12") {
      militaryHour = "00";
    }else {
      militaryHour = hour;
    }
  }else {
    if(hour === "12"){
      militaryHour = hour;
    }else {
      militaryHour = parseInt(hour) + 12
    }
  }
  return militaryHour.toString() + s.slice(2,8)
}