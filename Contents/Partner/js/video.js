//-----------------------------------------------------
//Redirects to homepage after 1 minute of not interaction
//-----------------------------------------------------

function redirect(){
    //window.location.href = "../../maincontents.htm";
}
var initial=setTimeout(redirect,60000);

$(document).click(function(event) {
    clearTimeout( initial );
    initial=setTimeout(redirect,60000);
});
//-----------------------------------------------------
var desc = new Array( );
desc['QA Consultants']="The Durham RTDS has worked in close partnership with QA Consultants to develop new capabilities for the quality assurance and validation of complex, multi variant automotive software systems.  Included in this were project proposals to AVIN’s Stream 2 project funding that was awarded and a multinational proposal involving a consortium of companies in the European Union.  The Durham RTDS has been actively engaged with QA Consultants in promoting, developing and presenting proposals to major automotive OEM’s.  The Durham RTDS team supported these efforts by sending key members to OEM locations in Michigan, Sweden and Italy to secure projects with them.";
desc['IBM']="IBM is working closely with ACE to develop a cognitive tunnel that will accelerate the development of new AV technologies.  By deploying AI in ACE, the wind tunnel and test chambers will be first to self-diagnose and optimize the testing parameters required for a given simulation scenario.  But this is just the start.  A new phase of work is being launched that will ingest, analyze and visualize all the data being collected by AV’s, smart city infrastructure and IOT devices to identify new opportunities to for technologies to make our communities and roadways even safer.";
desc['eCAMION']="The Durham RTDS team has partnered with eCAMION do design, install and commission their first off site deployment of an AV charging station.  Coupled with this the Durham team partnered with eCAMION to develop a successful project proposal to AVIN’s Stream 2 project funding stream for the development of an autonomous vehicle charging station.  Work has been initiated at the Durham RTDS to support this product development program";
desc['Gap Wireless']="Gap Wireless works with industry-recognized vendors to stock and distribute thousands of wireless infrastructure and Test & Measurement products, plus offers a suite of hardware and value-added services for the UAV (Drone) market. Gap Wireless customers include wireless Service Providers, Test & Measurement users, and the network implementation community across public and private sectors, spanning government & military, education & utilities, and telecom equipment installation.";
desc['Keysight Technologies']="Creating the world’s first indoor AV wireless environment for full scale climatic testing of integrated antenna and sensor systems.";
desc['SmartCone Technologies']="The Durham RTDS team partnered the SmartCone with the Town of Whitby to develop a project proposal involving Aurrigo that will result in the deployment of Autonomous Shuttles between the Whitby Go Station and the Whitby Innovation Accelerator.  This project is currently under review for AVIN Stream 2 project funding.  Two additional demonstration projects both on UOIT’s Campus and with the City of Oshawa are being developed with the SmartCone.";



$(document).ready(function(){

   $('a.btn-ok, #dialog-overlay, #dialog-box').click(function () {  
      //var video = document.getElementById("myVideo");  
      //video.pause(); 
      $('#dialog-overlay1, #dialog-box1').hide();   
      return false;
    });
});
function vidplay() {
       var video = document.getElementById("myVideo");
       var button = document.getElementById("playPause");
       if (video.paused) {
          video.play();
          //button.textContent = "||";
          button.src="images/pause.png";
       } else {
          video.pause();
          //button.textContent = ">";
          button.src="images/play.png";
       }
    }

function ShowPopup(src){

// get the screen height and width  
  var maskHeight = $(document).height();  
  var maskWidth = $(window).width();
  
  // calculate the values for center alignment
  var dialogTop =  '30%';//(maskHeight/3) - ($('#dialog-box').height());  
  var dialogLeft = (maskWidth/2) - ($('#dialog-box1').width()/2); 
  
  // assign values to the overlay and dialog box
  $('#dialog-overlay1').css({height:maskHeight, width:maskWidth}).show();
  $('#dialog-box1').css({top:dialogTop, left:dialogLeft}).show();
  $('#playPause').attr('src','images/play.png');
  $('#dialog-box1 #dialog-message h1').text(src);
  $('#dialog-box1 #dialog-message p').text(desc[src])
  //document.getElementById('myVideo').setAttribute('src', src);
    
    //document.getElementById('dialog-content1').innerHTML = '';
  
  }
function ShowPdfPopup(src){

// get the screen height and width
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();

    // calculate the values for center alignment
    var dialogTop =  '20%';//(maskHeight/3) - ($('#dialog-box').height());
    var dialogLeft = (maskWidth/2) - ($('#dialog-box').width()/2);

    // assign values to the overlay and dialog box
    $('#dialog-overlay').css({height:maskHeight, width:maskWidth}).show();
    $('#dialog-box').css({top:dialogTop, left:dialogLeft}).show();

    document.getElementById('dialog-box').innerHTML = '<a href="#" class="button">Close</a><div class="dialog-content"><span style="z-index: 2147483647;width:50px;height:50px;position:absolute;top:95px;right:30px;"></span><iframe src="'+src+'" toolbar="0" width="100%" height="1625" ></iframe></a>';
}