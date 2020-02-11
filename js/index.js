const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


const newNav = document.querySelectorAll('nav a')
newNav[0].textContent=siteContent['nav']['nav-item-1']
newNav[1].textContent=siteContent['nav']['nav-item-2']
newNav[2].textContent=siteContent['nav']['nav-item-3']
newNav[3].textContent=siteContent['nav']['nav-item-4']
newNav[4].textContent=siteContent['nav']['nav-item-5']
newNav[5].textContent=siteContent['nav']['nav-item-6']



 
let newElement = document.createElement("br");
let h1Name = document.querySelector("h1");

h1Name.innerHTML = "Dom" + "<br>" + "Is" + "<br>" + "Is Awesome";

let newbutton = document.querySelector("button");
newbutton.textContent = "Get Started";

let picture = document.getElementById("cta-img");
picture.setAttribute('src', siteContent["cta"]["img-src"]);

const newh4 = document.querySelectorAll('h4');
newh4[0].textContent=siteContent['main-content']['features-h4']
newh4[1].textContent=siteContent['main-content']['about-h4']
newh4[2].textContent=siteContent['main-content']['services-h4']
newh4[3].textContent=siteContent['main-content']['product-h4']
newh4[4].textContent=siteContent['main-content']['vision-h4']
newh4[5].textContent=siteContent['contact']['contact-h4']


const newP = document.querySelectorAll('p');
newP[0].textContent=siteContent['main-content']['features-content']
newP[1].textContent=siteContent['main-content']['about-content']
newP[2].textContent=siteContent['main-content']['services-content']
newP[3].textContent=siteContent['main-content']['product-content']
newP[4].textContent=siteContent['main-content']['vision-content']
newP[5].textContent=siteContent['contact']['address']
newP[6].textContent=siteContent['contact']['phone']
newP[7].textContent=siteContent['contact']['email']
newP[8].textContent=siteContent['footer']['copyright']

let newpicture = document.getElementById("middle-img");
newpicture.setAttribute("src", siteContent["main-content"]["middle-img-src"])

let newNavi = document.querySelectorAll("a");
newNavi.forEach(tag => {
  tag.style.color = "green";
});

let nav = document.querySelector("nav");

let newThing = document.createElement("a");
newThing.setAttribute("src", "#")
newThing.textContent = "Things";
nav.append(newThing);

let ball = document.createElement("a")
ball.setAttribute("src", "#")
ball.textContent = "Ball";
nav.prepend(ball)








