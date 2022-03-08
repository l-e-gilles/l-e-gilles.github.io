

 /*All pages: top navigation bar moves with scrolling */ 
window.onload = function() {
window.onscroll = function() {MovingNavBar()};


var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function MovingNavBar() {
    if (window.scrollY >= sticky) {
        console.log(sticky);
        navbar.classList.add("sticky");

    } else {
        console.log(sticky);
        navbar.classList.remove("sticky");
    }
}


  

}









/* Text contents to load  */
function loadText(index) {
    console.log("project index:" + index);
    var projects = [
        {
            "title": "Neurological Health Foundation<br>Prenatal Rater",
            "description": "The supplement industry is not regulated by the FDA, so their is no standard or quality regulation. The Neurological Health Foundation a not for profit organization conducted a study see how prenatal brands currently on the market compare to their recommended amounts.",
            "project": "Create a iOS and Android mobile app to summarize and report NHF's research findings",
            "team": "4 Classmates<br>Project Sponsor<br>Data Scientist",
            "duration": "6 months<br>Aug 2020 - Dec 2020<br><br>Updates<br>Jan 2022 - ",
            "tools": "Android Studio<br>Xcode<br>Autodesk Sketchbook<br>PowerPoint<br>Trello<br>Zoom",
            "contributions": "Team Lead<br>Created UX / UI mockups<br>Designed app icon<br>Coded key functionality<br>Published iOS App<br>Published Android App",
            "constraints": "Working remote due to pandemic<br>Limited team technical experiance<br>No design constraints",
            "goals": "1. Provide the overall rating (0-100%) for the 300+ prenatals, both alphabetical and sorted by rating score<br><br>2. Allow the ratings to be sorted by specific ingrediant amount<br><br>3. Give a detailed breakdown of supplement composition and how it compares to NHF's recommendation<br><br>4. Provide a summary of each vitamin and mineral and why its important<br><br>5. Comments for pre-existing complications<br><br>6. A link to NHF website for more information<br><br>7. A donantion link  to NHF's donation website page",
            "research": "With plenty of data and information given and no design constraint, it was a little intimidating at first to think about how to design the app. I knew that it would be easier to utilize Android/iOS standard UI components instead of designing our own.<br><br>As for color and font, I wanted to emulate a reputable scientific app. Since this app was an extension of NHF’s website it seemed logical to follow the same style. I didn’t want the app to seem unrelated, or have the user question if it’s the same organization.<br><br>Our sponsor wanted as much of the study research incorporated into the app as possible. This led to me having the idea to incorporate a common design element, the info icon. This allowed for the user to get more information without cluttering up the page."
        },
        {
            "title": "IBM<br>Social Media Measuring",
            "description": "Gaming and the e-sports industry is a ",
            "project": "Create a application prototype to solve a problem in the e-sports industry",
            "team": "6 Team Members<br>Project Sponsor<br>Design Thinking Coach",
            "duration": "6 Months<br>Aug 2021 - Jan 2022",
            "tools": "React<br>Carbon Components<br>Flask<br>Github<br>Visual Studio Code<br>PowerPoint<br>Mural",
            "contributions": "Initial UX/UI<br>High Fidelity Wireframe<br>Set up of Github Repo<br>Created intial Front End",
            "constraints": "Time<br>",
            "goals": "here",
            "research": "Knowing that the solution would be utilizing Carbon Components, and needs to look like an IBM product it helped narrowed down the UI design. The dark theme was chosen because of a lot of gamers prefer dark theme.The blue accent color was a nod to the League of Legends logo which was originally the solution was meant to be for."
        },
        {
            "title": "Portfolio Website",
            "description": "Having a portfolio website is essential nowadays to showcase one's skills and talents.",
            "project": "Create a website to showcase projects and resume",
            "team": "Me<br>Myself<br>& I",
            "duration": "2 Months<br><br>(working on it mainly on weekends)",
            "tools": "Figma<br>Procreate<br>HTML CSS JavaScript<br>Visual Studio Code<br>Github",
            "contributions": "Everything<br>",
            "constraints": "Needs to be a static website, otherwise won't work with Github Pages",
            "goals": "1. Utilize Figma to create Wireframes<br><br>2. Create graphic assets using Procreate<br><br>3. Assemble Stylguides and graphics<br><br>4. Deploy website to personal Github repo",
            "research": "After researching example portfolio websites, I found the content and style can vary greatly. To narrow in what I wanted my website to look like, I created a moodbord with example portfolios and any graphic elements I was drawn to while  researching."
        },
    ]
   
   
    document.getElementById("title").innerHTML = projects[index].title;
    document.getElementById("description").innerHTML = projects[index].description;
    document.getElementById("project").innerHTML = projects[index].project;
    document.getElementById("team").innerHTML = projects[index].team;
    document.getElementById("duration").innerHTML = projects[index].duration;
    document.getElementById("tools").innerHTML = projects[index].tools;
    document.getElementById("contribtuions").innerHTML = projects[index].contributions;
    document.getElementById("constraints").innerHTML = projects[index].constraints;
    document.getElementById("goals").innerHTML = projects[index].goals;
    document.getElementById("research").innerHTML = projects[index].research;

  }





  /*Fade in during scrolling */
  function FadeOnScroll() {
      $(document).ready(function() {
          $(window).scroll( function(){
              $('.hideme').each( function(i){
                  
                  var bottom_of_object = $(this).position().top + $(this).outerHeight();
                  var bottom_of_window = $(window).scrollTop() + $(window).height();
                  
                  if( bottom_of_window > bottom_of_object ){
                      
                      $(this).animate({'opacity':'1'},1000);
                          
                  }
                  
              }); 
          
          });
          
      });
  }
  



  var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
 
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  
}


