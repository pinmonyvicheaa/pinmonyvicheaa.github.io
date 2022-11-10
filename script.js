function typename(){
    const typed = new Typed('#typed', {
    strings: ['Pin Monyvichea ;)'],
    typeSpeed: 200
      });
}

setTimeout(function(){typename();}, 1500);


function sendMail(){

    document.querySelector(".contact-btn").textContent = 'Sending...';

    var params = {
        name: document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
    };
    
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
