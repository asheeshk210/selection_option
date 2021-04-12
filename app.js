function state(s1, s2) {
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  s2.innerHTML = "";



  //  ---------------------for Madhya Pradesh------------------
  if (s1.value == "Madhya Pradesh") {
    var optionArray = ["Please choose district", "Indore", "Jabalpur", "Bhopal", "Satana"];

  }
  //  -------------------for Maharashtra--------------------- 
  if (s1.value == "Maharashtra") {
    var optionArray = ["Please choose district", "Pune", "Kolhapur", "Bhandra", "Nasik"];

  }

  //  ---------------------for Gujarat------------------
  if (s1.value == "Gujarat") {
    var optionArray = ["Please choose district", "Ahamdabad", "Amreli", "Aravali", "Dwarka"];

  }
  //  ---------------------for Uttar Pradesh------------------
  if (s1.value == "Uttar Pradesh") {
    var optionArray = ["Please choose district", "Agara", "Aligarh", "Bareilly", "Lucknow"];

  }
  //  ---------------------for Uttrakhand------------------
  if (s1.value == "Uttrakhand") {
    var optionArray = ["Please choose district", "Dehradun", "Haridwar", "Chamoli", "Rudraprayag"];

  }
  for (var option in optionArray) {
    var pair = optionArray[option];
    var newOption = document.createElement("option");
    newOption.innerHTML = pair;
    s2.add(newOption);
  }

}

// ***************************************************district function********************
// ***************************************************district function********************


function district(m1, m2) {
  var m1 = document.getElementById(m1);
  var m2 = document.getElementById(m2);
  m2.innerHTML = "";

  //-----------------------madhya pradesh------------------------------------
  //  ---------------------for Indore------------------------------------------
  if (m1.value == "Indore") {
    var optionArrays = ["Please choose city", "Manpur", "Palda", "Sanwer", "Sinhasa"];
  }
  //  ---------------------for jabalpur------------------
  if (m1.value == "Jabalpur") {
    var optionArrays = ["Please choose city", "Barela", "Panagar", "Majholi", "Gwarighat"];
  }
  //  ---------------------for bhopal------------------
  if (m1.value == "Bhopal") {
    var optionArrays = ["Please choose city", "Kikwari ", "Rewa", "Murwara", "Khandwa"];
  }
  //  ---------------------for satana------------------
  if (m1.value == "Satana") {
    var optionArrays = ["Please choose city", "Morena", "Bhind", "Chhindwara", "Shivpuri"];
  }

  //----------------------for maharashtra--------------------------------------------
  //  ---------------------for Pune------------------------------------------

  if (m1.value == "Pune") {
    var optionArrays = ["Please choose city", "Nagpur", "Thane", "Aurangabad", "Solapur"];
  }
  //  ---------------------for Kolhapur------------------------------------------
  if (m1.value == "Kolhapur") {
    var optionArrays = ["Please choose city", "Amaravati", "Latur", "Nanded", "sangli"];
  }
  //  ---------------------for Bhandra------------------------------------------
  if (m1.value == "Bhandra") {
    var optionArrays = ["Please choose city", "Panvel", "Satara", "Yavatmal", "Gondia"];
  }
  //  ---------------------for Nasik------------------------------------------
  if (m1.value == "Nasik") {
    var optionArrays = ["Please choose city", "Osmanabad", "Wardha", "Beed", "Jalgaon"];
  }

  //----------------------for gujrat--------------------------------------------
  //  ---------------------for Ahamdabad------------------------------------------
  if (m1.value == "Ahamdabad") {
    var optionArrays = ["Please choose city", "Navsari", "Rajkot", "Vadodara", "Surat"];
  }
  //  ---------------------for Amreli------------------------------------------
  if (m1.value == "Amreli") {
    var optionArrays = ["Please choose city", "Bhavnagar", "Latur", "Nanded", "sangli"];
  }
  //  ---------------------for Aravali------------------------------------------
  if (m1.value == "Aravali") {
    var optionArrays = ["Please choose city", "Jamnagar", "Gandhinagar", "Bharuch", "Bhuj"];
  }
  //  ---------------------for Dwarka------------------------------------------
  if (m1.value == "Dwarka") {
    var optionArrays = ["Please choose city", "Porbandar", "Palanpur", "Gondal", "Jetpur"];
  }

  //----------------------for up--------------------------------------------
  //  ---------------------for Agara------------------------------------------

  if (m1.value == "Agara") {
    var optionArrays = ["Please choose city", "	Ghaziabad", "	Meerut", "Varanasi", "Prayagraj"];
  }
  //  ---------------------for Aligarh------------------------------------------
  if (m1.value == "Aligarh") {
    var optionArrays = ["Please choose city", "Moradabad", "	Saharanpur", "Gorakhpur", "Faizabad"];
  }
  //  ---------------------for Bareilly------------------------------------------
  if (m1.value == "Bareilly") {
    var optionArrays = ["Please choose city", "	Firozabad", "Jhansi", "	Muzaffarnagar", "	Budaun"];
  }
  //  ---------------------for Lucknow------------------------------------------
  if (m1.value == "Lucknow") {
    var optionArrays = ["Please choose city", "Rampur", "Shahjahanpur", "Hapur", "	Amroha"];
  }

  //----------------------for uk--------------------------------------------
  //  ---------------------for Dehradun------------------------------------------

  if (m1.value == "Dehradun") {
    var optionArrays = ["Please choose city", "Ramnagar", "Jaspur", "Pithoragarh", "Nainital"];
  }
  //  ---------------------for Haridwar------------------------------------------
  if (m1.value == "Haridwar") {
    var optionArrays = ["Please choose city", "Almora", "Mussoorie", "Sitarganj", "Uttarkashi"];
  }
  //  ---------------------for Chamoli------------------------------------------
  if (m1.value == "Chamoli") {
    var optionArrays = ["Please choose city", "Tehri", "Gopeshwar ", "Tanakpur", "Bageshwar"];
  }
  //  ---------------------for Rudraprayag------------------------------------------
  if (m1.value == "Rudraprayag") {
    var optionArrays = ["Please choose city", "Doiwala", "Barkot", "Dharchula", "Didihat"];
  }
  for (var option in optionArrays) {
    var pairs = optionArrays[option];
    var newOptions = document.createElement("option");
    newOptions.innerHTML = pairs;
    m2.add(newOptions);
  }


}
//***************************************************************make button enable
function forButton() {
  var b = document.getElementById("sub");
  b.disabled = false;
}

function result() {
  var a = document.getElementById('slt1');
  var b = document.getElementById('slt2');
  var c = document.getElementById('slt3');
  // alert("You successfully registered your address is : \n your state is:"+a.value+"\n your district is : "+b.value+"\n your city is : "+c.value);  

  document.getElementById("x").innerHTML = "your state is :" + a.value;
  document.getElementById("y").innerHTML = "your district is :" + b.value;
  document.getElementById("z").innerHTML = "your city is :" + c.value;

}

function reset(){
  
  window.location.reload();
}
