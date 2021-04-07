var certificates = [
    {
        certificate: "Police Clearance",
        photo: "<img class='mx-auto d-block mt-4' style='border: 1px solid grey; width: 60%;' src='/images/clearance/police clearance.jpg' alt='police clearance'>",
        source: "https://ifranchise.ph/wp-content/uploads/2015/04/Police-Clearance-300x2051.jpg",
        steps: "<span class='clearance-step'>Step 1</span>  Before going to the Police Station, bring a ballpen, a cedula, a barangay clearance, a valid ID, and money for payment. <br><br>\
            <span class='clearance-step'>Step 2</span> Present the documents to the person in charge (photocopy of Barangay Clearance and Cedula). The in-charge will hand you a form to complete. <br><br>\
            <span class='clearance-step'>Step 3</span> Present your documents and pay 45 PHP to the cashier (125 PHP for a passport). <br><br>\
            <span class='clearance-step'>Step 4</span> Pay the 85php for the computer and processing fee. You will be given a number by the person in charge. Wait for your name to be called out after receiving the receipt. <br><br>\
            <span class='clearance-step'>Step 5</span> Then it's time to take pictures and fingerprints. Then they'll tell you to go outside and wait for the release. <br><br>\
            <span class='clearance-step'>Step 6</span> Numbers will be called out by an officer. When your number is called, sign and receive the Police Clearance. <br><br>\
        "
    },
    {
        certificate: "NBI Clearance",
        photo: "<img class='mx-auto d-block mt-4' style='border: 1px solid grey; width: 60%;' src='/images/clearance/nbi clearance.jpg' alt='police clearance'>",
        source: "https://i1.wp.com/governmentph.com/wp-content/uploads/2018/05/Sample-NBI-Clearance.jpg",
        steps: "<span class='clearance-step'>Step 1</span> Prepare the necessary requirements, and you will be assigned a number when you arrive.<br><br>\
            <span class='clearance-step'>Step 2</span> When your number is called, join the rest of the line. You will queue up at the Cashier and pay the appropriate amount based on your application's purpose.<br><br>\
            <span class='clearance-step'>Step 3</span> Obtain the receipt and proceed to the Encoding Counter, where the applicant's fingerprints (Biometric) will be photographed or imaged and scanned. Please pay attention to the details that are being encoded. <br><br>\
            <span class='clearance-step'>Step 4</span> Give the receipt to the Releasing Counter and wait for your name to be called, after which you will be able to obtain your NBI Clearance.<br><br>\
        "
    },
    {
        certificate: "Barangay Clearance",
        photo: "<img class='mx-auto d-block mt-4' style='border: 1px solid grey; width: 60%;' src='/images/clearance/brgy clearance.jpg' alt='police clearance'>",
        source: "https://imgv2-1-f.scribdassets.com/img/document/192696412/original/19a6c5efd2/1614316129?v=1",
        steps: "<span class='clearance-step'>Step 1</span> Simply go to your Barangay Hall and inquire about obtaining a Barangay Clearance.<br><br>\
            <span class='clearance-step'>Step 2</span> Proceed to the clearing desk to have your clearances processed.<br><br>\
            <span class='clearance-step'>Step 3</span> Give the form or paper to the Barangay Secretary, along with your identification documents. You must also pay the Barangay clearance fee.<br><br>\
            <span class='clearance-step'>Step 4</span> Keep an eye out for your Barangay Certificate. If you are the only one who requests it, the secretary will simply edit and print the document.<br><br>\
            <span class='clearance-step'>Step 5</span> Take the Barangay Clearance and double-check that the spelling is correct and that the purpose is stated correctly.<br><br>\
        "
    },
    {
        certificate: "Medical Certificate",
        photo: "<img class='mx-auto d-block mt-4' style='border: 1px solid grey; width: 60%;' src='/images/clearance/medical certificate.jpg' alt='police clearance'>",
        source: "https://imgv2-1-f.scribdassets.com/img/document/358610942/original/713b011539/1614235811?v=1",
        steps: "<span class='clearance-step'>Step 1</span> To get a certificate, go to the hospital, medical center, or private doctor's office where you want to get one.<br><br>\
            <span class='clearance-step'>Step 2</span> Let the receptionist know you'd like a certificate. You'll be given instructions on what to do next.<br><br>\
            <span class='clearance-step'>Step 3</span> A form will be handed to you, which you must complete.<br><br>\
            <span class='clearance-step'>Step 4</span> The doctor or a representative will examine you, question you, and inquire about your medical history, among other things.<br><br>\
            <span class='clearance-step'>Step 5</span> The doctor will prepare the certificate and sign it after the examination is completed.<br><br>\
        "
    }
]


var certificatesTitle = [
    certificates[0].certificate,
    certificates[1].certificate,
    certificates[2].certificate,
    certificates[3].certificate
]

for (i = 0; i < certificatesTitle.length; i++){
    document.getElementById("options-box").innerHTML +=
    "<li class='list-option'> <a class='text-center reflection-option' id='title-btn-"+i+"'>" + "&#9679;  " + certificatesTitle[i] + "</a></li>";
}


console.log(document.getElementById("title-btn-0").innerHTML);
console.log(document.getElementById("title-btn-1").innerHTML);
console.log(document.getElementById("title-btn-2").innerHTML);
console.log(document.getElementById("title-btn-3").innerHTML);

var police = document.getElementById("title-btn-0");
var nbi = document.getElementById("title-btn-1");
var brgy = document.getElementById("title-btn-2");
var medical = document.getElementById("title-btn-3");
var display = document.getElementById("articlebody");

police.addEventListener("click", policeClearance);
nbi.addEventListener("click", nbiClearance);
brgy.addEventListener("click", brgyClearance);
medical.addEventListener("click", medicalCertificate);

function policeClearance() {
    display.innerHTML =
    "<h1 class='text-center reflection-title' ><b>" + certificates[0].certificate + 
    "</b></h1>" + certificates[0].photo + 
    "<p class='text-center' style='font-size: 10px;'>Source: <u>"+certificates[0].source+"</u></p>"+
    "<h3 class='text-center  mt-5' style='font-size: 30px; font-weight: 600; margin-bottom: -10px;'>Steps in Getting "+ certificates[0].certificate + "</h3>" + 
    "<p class='text-justify pl-5 ref-content '>"+ certificates[0].steps + "</p>"; 
    document.getElementsByClassName("reflection-option")[0].classList.add("option-active");
    document.getElementsByClassName("reflection-option")[1].classList.remove("option-active");
    document.getElementsByClassName("reflection-option")[2].classList.remove("option-active");
    document.getElementsByClassName("reflection-option")[3].classList.remove("option-active");
    
}

function nbiClearance() {
    display.innerHTML =
    "<h1 class='text-center reflection-title' ><b>" + certificates[1].certificate + 
    "</b></h1>" + certificates[1].photo + 
    "<p class='text-center' style='font-size: 10px;'>Source: <u>"+certificates[1].source+"</u></p>"+
    "<h3 class='text-center  mt-5' style='font-size: 30px; font-weight: 600; margin-bottom: -10px;'>Steps in Getting "+ certificates[1].certificate + "</h3>" + 
    "<p class='text-justify pl-5 ref-content'>"+ certificates[1].steps + "</p>"; 
    document.getElementsByClassName("reflection-option")[1].classList.add("option-active");
    document.getElementsByClassName("reflection-option")[0].classList.remove("option-active");
    document.getElementsByClassName("reflection-option")[2].classList.remove("option-active");
    document.getElementsByClassName("reflection-option")[3].classList.remove("option-active");
}
function brgyClearance() {
    display.innerHTML =
    "<h1 class='text-center reflection-title' ><b>" + certificates[2].certificate + 
    "</b></h1>" + certificates[2].photo + 
    "<p class='text-center' style='font-size: 10px;'>Source: <u>"+certificates[2].source+"</u></p>"+
    "<h3 class='text-center  mt-5' style='font-size: 30px; font-weight: 600; margin-bottom: -10px;'>Steps in Getting "+ certificates[2].certificate + "</h3>" + 
    "<p class='text-justify pl-5 ref-content'>"+ certificates[2].steps + "</p>"; 
    document.getElementsByClassName("reflection-option")[2].classList.add("option-active");
    document.getElementsByClassName("reflection-option")[0].classList.remove("option-active");
    document.getElementsByClassName("reflection-option")[1].classList.remove("option-active");
    document.getElementsByClassName("reflection-option")[3].classList.remove("option-active"); 
}
function medicalCertificate() {
    display.innerHTML =
    "<h1 class='text-center reflection-title' ><b>" + certificates[3].certificate + 
    "</b></h1>" + certificates[3].photo + 
    "<p class='text-center' style='font-size: 10px;'>Source: <u>"+certificates[3].source+"</u></p>"+
    "<h3 class='text-center  mt-5' style='font-size: 30px; font-weight: 600; margin-bottom: -10px;'>Steps in Getting "+ certificates[3].certificate + "</h3>" + 
    "<p class='text-justify pl-5 ref-content'>"+ certificates[3].steps + "</p>"; 
    document.getElementsByClassName("reflection-option")[3].classList.add("option-active");
    document.getElementsByClassName("reflection-option")[0].classList.remove("option-active");
    document.getElementsByClassName("reflection-option")[1].classList.remove("option-active");
    document.getElementsByClassName("reflection-option")[2].classList.remove("option-active");
}
policeClearance();