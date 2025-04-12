function typename(){
    const typed = new Typed('#typed', {
    strings: ['Pin Monyvichea ;)'],
    typeSpeed: 200
      });
}

setTimeout(function(){typename();}, 1500);

// -------------------------------------------------------------------------------

const bigSkillContainer = document.querySelector('.big-skills')

skillSet.filter(skill => skill.type === 1).map((si)=>{
    let skilli = `<div class="skilli reveal big-skill" >
                        <img src="./images/${si.name}.png">
                        <div class="abskill">
                            <p>${si.name}</p>
                            <div class="level">`;
                            for(let i = 0; i < si.level; i++) {
                                skilli+=`<i class="fa-solid fa-star"></i>`
                            };
                            for(let i = 0; i < 3 - si.level; i++) {
                                skilli+=`<i class="fa-regular fa-star"></i>`
                            };
                                
                    skilli+=`  </div>
                            </div>
                        </div>`

    bigSkillContainer.insertAdjacentHTML('beforeend', skilli);
})

const smallSkillContainer = document.querySelector('.small-skills')

skillSet.filter(skill => skill.type === 2).map((si)=>{
    let skilli = `<div class="skilli reveal small-skill" >
                        <img src="./images/${si.name}.png">
                        <div class="abskill">
                            <p>${si.name}</p>
                        </div>
                        </div>`

    smallSkillContainer.insertAdjacentHTML('beforeend', skilli);
})

// -------------------------------------------------------------------------------

const projectsGallery = document.querySelector('.gallery')

projects.map((project) =>{
    let card = `<div class="card hover:shadow-md">
                    <div class="pr-img">
                        <img src=${project.img}>
                    </div>
                    <div class="pr-title">
                        ${project.title}
                    </div>
                    <div class="pr-info cursor-default">
                        ${project.info} 
                    </div>
                    <div class="pr-stack">
                        <p>Stack: </p>
                        ${ project.stack.map((skill)=>{
                            return `<img src="./images/${skill}.png">`
                        }).join(' ')}
                    </div>
                    <div class="pr-view">
                        <a href=${project.previewLink} target="_blank"><i class="fa-solid fa-play"></i> Preview
                        </a>
                        <a href=${project.codeLink} target="_blank"><i class="fa-solid fa-code"></i> Code
                        </a>
                    </div>
                </div>`;

        let card2 = `<div class="container">
        <div class="content">
          <div class="left-section">
            <h6>${project.title}</h6>
            <p>${project.info}</p>
            <div class="stack">
            ${ project.stack.map((skill)=>{
                return `<img src="./images/${skill}.png">`
            }).join(' ')}
            </div>
          </div>
      
          <div class="right-section">
            <div class="links">
              <a href=${project.previewLink} class="preview" target="_blank"><i class="fa-solid fa-play"></i> Preview</a>
              <a href=${project.codeLink} class="code" target="_blank"><i class="fa-solid fa-code"></i> Code</a>
            </div>
            <img src="project-images/${project.img}" alt="" class="project-image">
          </div>
        </div>
      </div>`

    projectsGallery.insertAdjacentHTML('beforeend', card2)
})

// -------------------------------------------------------------------------------

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i=0; i<reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

// -------------------------------------------------------------------------------

function changeTheme(){
    document.body.classList.toggle("lightmode");
}

// -------------------------------------------------------------------------------

function sendMail(){
    
    var params = {
        name: document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    };
        
    if(params.name && params.email && params.message){
        document.querySelector(".contact-btn").textContent = 'Sending...';
        const serviceID = "service_vw3axyh";
        const templateID = "template_pp6qbsa";
        
        emailjs.send(serviceID,templateID,params).then(
            res =>{
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                document.querySelector(".contact-btn").textContent = 'Send';
                alert("Message Sent successfully. I'll get back to you ASAP ;)");
            }
        )
        .catch(err=>console.log(err));
    }

}