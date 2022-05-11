var div = document.getElementById("main");
main.href = "css/styles.css";
main.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

var Imagediv = document.createElement("div");
Imagediv.className = "Imagediv";
div.appendChild(Imagediv);

var img = document.createElement("img");
img.src = "profile.jpeg";
Imagediv.appendChild(img);

var Title = document.createElement("h3");

Title.appendChild(document.createTextNode("Dr. Katherine Tylor"));

Imagediv.appendChild(Title);

var paragraph = document.createElement("span");

paragraph.appendChild(document.createTextNode("Cardiologist"));

Imagediv.appendChild(paragraph);

var buttondiv = document.createElement("div");
buttondiv.className = "editbutton";
Imagediv.appendChild(buttondiv);

var button = document.createElement("button");
button.className = "profilebutton"

button.appendChild(document.createTextNode("Edit Profile"));

buttondiv.appendChild(button);


var icons = document.createElement("a");
icons.href = "#"
icons.className = "fa fa-facebook";
Imagediv.appendChild(icons)

var icons = document.createElement("a");
icons.href = "#"
icons.className = "fa fa-twitter";
Imagediv.appendChild(icons)

var icons = document.createElement("a");
icons.href = "#"
icons.className = "fa fa-instagram";
Imagediv.appendChild(icons)

var Contentdiv = document.createElement("div");
Contentdiv.className = "content";
div.appendChild(Contentdiv);


var Aboutdiv = document.createElement("div");
Aboutdiv.className = "about";
Contentdiv.appendChild(Aboutdiv);
var span = document.createElement("h2");

span.appendChild(document.createTextNode("About Me"));

Aboutdiv.appendChild(span);

var paragraph = document.createElement("p");

paragraph.appendChild(
  document.createTextNode(
    "Responsible physician with 9 years of experience maximizing patient wellness and facility profitability. Seeking to deliver healthcare excellence at Mercy Hospital. At CRMC, maintained 5-star healthygrades for 112 reviews and 85% patient success.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, sed.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel saepe laborum repudiandae veniam alias quasi?"
  )
);

Aboutdiv.appendChild(paragraph);

var Specialistdiv = document.createElement("div");
Specialistdiv.className = "specialities";
Contentdiv.appendChild(Specialistdiv);

var span = document.createElement("h2");

span.appendChild(document.createTextNode("Specialities"));
Specialistdiv.appendChild(span);

var list = document.createElement("li");

list.appendChild(
  document.createTextNode("Clinical and Interventional Cardiologist")
);

Specialistdiv.appendChild(list);

var list = document.createElement("li");

list.appendChild(document.createTextNode("Heart Specialist"));

Specialistdiv.appendChild(list);
var list = document.createElement("li");

list.appendChild(document.createTextNode("Cardiac Anesthesia"));

Specialistdiv.appendChild(list);
var list = document.createElement("li");

list.appendChild(document.createTextNode("Cardiac Surgeon"));

Specialistdiv.appendChild(list);

var Departmentdiv = document.createElement("div");
Departmentdiv.className = "department";
Contentdiv.appendChild(Departmentdiv);

var span = document.createElement("h2");

span.appendChild(document.createTextNode("Department"));
Departmentdiv.appendChild(span);

var list = document.createElement("li");

list.appendChild(document.createTextNode("Cardiology (Heart)"));

Departmentdiv.appendChild(list);

var Professionaldiv = document.createElement("div");
Professionaldiv.className = "professional";
Contentdiv.appendChild(Professionaldiv);

var span = document.createElement("h2");

span.appendChild(document.createTextNode("Professional Experience"));
Professionaldiv.appendChild(span);

var list = document.createElement("li");

list.appendChild(document.createTextNode("2014-2020"));
Professionaldiv.appendChild(list);
var paragraph = document.createElement("p");

paragraph.appendChild(
  document.createTextNode("Dhaka Medical College, Dhaka, Bangladesh")
);

Professionaldiv.appendChild(paragraph);

var skills = document.createElement("div");
skills.className = "skills";
Contentdiv.appendChild(skills);

var Educationaldiv = document.createElement("div");
Educationaldiv.className = "education";
skills.appendChild(Educationaldiv);

var span = document.createElement("h2");
span.className = "title";
span.appendChild(document.createTextNode("Education"));
Educationaldiv.appendChild(span);

var list = document.createElement("li");

list.appendChild(document.createTextNode("2014-2020"));
Educationaldiv.appendChild(list);
var paragraph = document.createElement("p");
paragraph.className = 'educationlist'


paragraph.appendChild(
  document.createTextNode("Dhaka Medical College, Dhaka, Bangladesh")
);

Educationaldiv.appendChild(paragraph);

var list = document.createElement("li");

list.appendChild(document.createTextNode("2014-2020"));
Educationaldiv.appendChild(list);
var paragraph = document.createElement("p");

paragraph.appendChild(
  document.createTextNode("Master of Science")
);

Educationaldiv.appendChild(paragraph);

var hobbiesdiv = document.createElement("div");
hobbiesdiv.className = "hobbies";
skills.appendChild(hobbiesdiv);

var span = document.createElement("h2");
span.className = "hobbiestitle";
span.appendChild(document.createTextNode("Hobbies"));
hobbiesdiv.appendChild(span);

var hobbieslist = document.createElement("li");

hobbieslist.appendChild(
  document.createTextNode("Travelling and Exploring")
);

hobbiesdiv.appendChild(hobbieslist);
var hobbieslist = document.createElement("li");

hobbieslist.appendChild(
  document.createTextNode("Food Hunt")
);

hobbiesdiv.appendChild(hobbieslist);
var hobbieslist = document.createElement("li");

hobbieslist.appendChild(
  document.createTextNode("Reading psycological books/blogs")
);

hobbiesdiv.appendChild(hobbieslist);
var hobbieslist = document.createElement("li");

hobbieslist.appendChild(
  document.createTextNode("Watching movies")
);

hobbiesdiv.appendChild(hobbieslist);
