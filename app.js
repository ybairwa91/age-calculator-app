const btn = document.getElementById("btn");

let flag;
const findAge = function () {
  flag = 1;
  const dayDob = Number(document.getElementById("blankOne").value);
  const monthDob = Number(document.getElementById("blankTwo").value);
  const yearDob = Number(document.getElementById("blankThree").value);

  if (dayDob === isNaN || monthDob === isNaN || yearDob === isNaN) {
    flag = 0;
  }
  if (
    dayDob === Number(" ") ||
    monthDob === Number(" ") ||
    yearDob === Number(" ")
  ) {
    flag = 0;
  }

  if (dayDob > 31 || monthDob > 12 || yearDob > 2023) {
    flag = 0;
  }
  if (yearDob % 400 === 0) {
    //concept of feb 29 in leapyearDob
    if (monthDob === 2) {
      if (dayDob === 29) {
        flag = 0;
      }
    }
  }

  //showing error when dayDobs are wrong in alternate monthDobs
  if (
    monthDob === 2 ||
    monthDob === 4 ||
    monthDob === 6 ||
    monthDob === 9 ||
    monthDob === 11
  ) {
    if (dayDob === 31) {
      flag = 0;
    }
  }
  //when feb is 30
  if (monthDob === 2) {
    if (dayDob === 30) {
      flag = 0;
    }
  }

  //now change -- into values

  if (flag === 1) {
    const dob = new Date(yearDob, monthDob - 1, dayDob);
    let dobYear = dob.getFullYear();
    let dobMonth = dob.getMonth();
    let dobDate = dob.getDate();
    console.log(dobYear, dobMonth, dobDate);
    const current = new Date();
    let currentYear = current.getFullYear();
    let currentMonth = current.getMonth();
    let currentDate = current.getDate();

    console.log(currentYear, currentMonth, currentDate);

    let ageYear = currentYear - dobYear;
    console.log(ageYear);
    let ageMonth = currentMonth - dobMonth;
    console.log(ageMonth);
    let ageDate = currentDate - dobDate;
    console.log(ageDate);

    let yearSpace = document.getElementById("yearValue");
    let monthSpace = document.getElementById("monthValue");
    let dateSpace = document.getElementById("dateValue");

    yearSpace.innerHTML = ageYear;
    monthSpace.innerHTML = ageMonth;
    dateSpace.innerHTML = ageDate;
  } else {
    document.getElementById("errorYear").innerHTML = "must contain valid Year";
    document.getElementById("errorDay").innerHTML = "must contain valid Day";
    document.getElementById("errorMonth").innerHTML =
      "must contain valid Month";

    document.getElementById("blankOne").style.border =
      "1px solid hsl(0, 100%, 67%)";
    document.getElementById("blankTwo").style.border =
      "1px solid hsl(0, 100%, 67%)";
    document.getElementById("blankThree").style.border =
      "1px solid hsl(0, 100%, 67%)";
  }
};

btn.addEventListener("click", findAge);
