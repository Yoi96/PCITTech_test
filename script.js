const itemsDiv = document.getElementById('items');
const cablesDiv = document.getElementById('cables');
const computer_systems = document.getElementById('computer_systems');
const computer_monitors = document.getElementById('computer_monitors');
const computer = document.getElementById('computer');
const electronics = document.getElementById('electronics');
const networking = document.getElementById('networking');
const office = document.getElementById('office');
const pvc = document.getElementById('pvc');
const power = document.getElementById('power');
const printers = document.getElementById('printers');
const ssm = document.getElementById('ssm');
const shd = document.getElementById('shd');
const learn_more1 = document.querySelectorAll('#learn_more1');

learn_more1.forEach(button => {
  button.addEventListener('click', function() {

    

    if (cablesDiv.style.display === 'none' || cablesDiv.style.display === '') {

       itemsDiv.style.display = 'none'; 
       cablesDiv.style.display = 'block'; 
       computer_systems.style.display = 'none'; 
       computer_monitors.style.display = 'none'; 
       computer.style.display ='none'; 
       electronics.style.display = 'none'; 
       networking.style.display ='none'; 
       office.style.display = 'none'; 
       pvc.style.display = 'none';
       power .style.display = 'none';
       printers.style.display = 'none';
       ssm.style.display = 'none';
      shd.style.display =  'none'; 
       
      
    } else {

      itemsDiv.style.display = 'grid'; 
      cablesDiv.style.display = 'none';
      computer_systems.style.display = 'none'; 
      computer_monitors.style.display = 'none'; 
      computer.style.display ='none'; 
      electronics.style.display = 'none'; 
      networking.style.display ='none'; 
      office.style.display = 'none'; 
      pvc.style.display = 'none';
      power .style.display = 'none';
      printers.style.display = 'none';
      ssm.style.display = 'none';
      shd.style.display =  'none'; 
    }
  });
});

 

const learn_more2 = document.querySelectorAll('#learn_more2');

learn_more2.forEach(button => {
  button.addEventListener('click', function() {


    if (computer_systems.style.display === 'none' || computer_systems.style.display === '') {

       itemsDiv.style.display = 'none'; 
       cablesDiv.style.display = 'none'; 
       computer_systems.style.display = 'block'; 
       computer_monitors.style.display = 'none'; 
       computer.style.display ='none'; 
       electronics.style.display = 'none'; 
       networking.style.display ='none'; 
       office.style.display = 'none'; 
       pvc.style.display = 'none';
       power .style.display = 'none';
       printers.style.display = 'none';
       ssm.style.display = 'none';
      shd.style.display =  'none'; 
       
      
    } else {

      itemsDiv.style.display = 'grid'; 
      cablesDiv.style.display = 'none';
      computer_systems.style.display = 'none'; 
      computer_monitors.style.display = 'none'; 
      computer.style.display ='none'; 
      electronics.style.display = 'none'; 
      networking.style.display ='none'; 
      office.style.display = 'none'; 
      pvc.style.display = 'none';
      power .style.display = 'none';
      printers.style.display = 'none';
      ssm.style.display = 'none';
      shd.style.display =  'none'; 
    }
  });
});

const learn_more3 = document.querySelectorAll('#learn_more3');

learn_more3.forEach(button => {
  button.addEventListener('click', function() {


    if ( computer_monitors.style.display === 'none' ||  computer_monitors.style.display === '') {

       itemsDiv.style.display = 'none'; 
       cablesDiv.style.display = 'none'; 
       computer_systems.style.display = 'none'; 
       computer_monitors.style.display = 'block'; 
       computer.style.display ='none'; 
       electronics.style.display = 'none'; 
       networking.style.display ='none'; 
       office.style.display = 'none'; 
       pvc.style.display = 'none';
       power .style.display = 'none';
       printers.style.display = 'none';
       ssm.style.display = 'none';
      shd.style.display =  'none'; 
       
      
    } else {

      itemsDiv.style.display = 'grid'; 
      cablesDiv.style.display = 'none';
      computer_systems.style.display = 'none'; 
      computer_monitors.style.display = 'none'; 
      computer.style.display ='none'; 
      electronics.style.display = 'none'; 
      networking.style.display ='none'; 
      office.style.display = 'none'; 
      pvc.style.display = 'none';
      power .style.display = 'none';
      printers.style.display = 'none';
      ssm.style.display = 'none';
      shd.style.display =  'none'; 
    }
  });
});


const learn_more4 = document.querySelectorAll('#learn_more4');

learn_more4.forEach(button => {
  button.addEventListener('click', function() {


    if ( computer.style.display === 'none' ||  computer.style.display === '') {

       itemsDiv.style.display = 'none'; 
       cablesDiv.style.display = 'none'; 
       computer_systems.style.display = 'none'; 
       computer_monitors.style.display = 'none'; 
       computer.style.display ='block';  
       electronics.style.display = 'none'; 
       networking.style.display ='none'; 
       office.style.display = 'none'; 
       pvc.style.display = 'none';
       power .style.display = 'none';
       printers.style.display = 'none';
       ssm.style.display = 'none';
      shd.style.display =  'none'; 
       
      
    } else {

      itemsDiv.style.display = 'grid'; 
      cablesDiv.style.display = 'none';
      computer_systems.style.display = 'none'; 
      computer_monitors.style.display = 'none'; 
      computer.style.display ='none'; 
      electronics.style.display = 'none'; 
      networking.style.display ='none'; 
      office.style.display = 'none'; 
      pvc.style.display = 'none';
      power .style.display = 'none';
      printers.style.display = 'none';
      ssm.style.display = 'none';
      shd.style.display =  'none'; 
    }
  });
});

const learn_more5 = document.querySelectorAll('#learn_more5');

learn_more5.forEach(button => {
  button.addEventListener('click', function() {


    if ( electronics.style.display === 'none' ||  electronics.style.display === '') {

       itemsDiv.style.display = 'none'; 
       cablesDiv.style.display = 'none'; 
       computer_systems.style.display = 'none'; 
       computer_monitors.style.display = 'none'; 
       computer.style.display ='none';  
       electronics.style.display = 'block';
       networking.style.display ='none'; 
       office.style.display = 'none'; 
       pvc.style.display = 'none';
       power .style.display = 'none';
       printers.style.display = 'none';
       ssm.style.display = 'none';
      shd.style.display =  'none'; 
       
      
    } else {

      itemsDiv.style.display = 'grid'; 
      cablesDiv.style.display = 'none';
      computer_systems.style.display = 'none'; 
      computer_monitors.style.display = 'none'; 
      computer.style.display ='none'; 
      electronics.style.display = 'none'; 
      networking.style.display ='none'; 
      office.style.display = 'none'; 
      pvc.style.display = 'none';
      power .style.display = 'none';
      printers.style.display = 'none';
      ssm.style.display = 'none';
      shd.style.display =  'none'; 
    }
  });
});

const learn_more6 = document.querySelectorAll('#learn_more6');

learn_more6.forEach(button => {
  button.addEventListener('click', function() {


    if ( networking.style.display === 'none' ||  networking.style.display === '') {

       itemsDiv.style.display = 'none'; 
       cablesDiv.style.display = 'none'; 
       computer_systems.style.display = 'none'; 
       computer_monitors.style.display = 'none'; 
       computer.style.display ='none';  
       electronics.style.display = 'none';  
       networking.style.display ='block';
       office.style.display = 'none'; 
       pvc.style.display = 'none';
       power .style.display = 'none';
       printers.style.display = 'none';
       ssm.style.display = 'none';
      shd.style.display =  'none'; 
       
      
    } else {

      itemsDiv.style.display = 'grid'; 
      cablesDiv.style.display = 'none';
      computer_systems.style.display = 'none'; 
      computer_monitors.style.display = 'none'; 
      computer.style.display ='none'; 
      electronics.style.display = 'none'; 
      networking.style.display ='none'; 
      office.style.display = 'none'; 
      pvc.style.display = 'none';
      power .style.display = 'none';
      printers.style.display = 'none';
      ssm.style.display = 'none';
      shd.style.display =  'none'; 
    }
  });
});

const learn_more7 = document.querySelectorAll('#learn_more7');

learn_more7.forEach(button => {
  button.addEventListener('click', function() {


    if ( office.style.display === 'none' ||  office.style.display === '') {

       itemsDiv.style.display = 'none'; 
       cablesDiv.style.display = 'none'; 
       computer_systems.style.display = 'none'; 
       computer_monitors.style.display = 'none'; 
       computer.style.display ='none';  
       electronics.style.display = 'none';  
       networking.style.display ='none';  
       office.style.display = 'block';
       pvc.style.display = 'none';
       power .style.display = 'none';
       printers.style.display = 'none';
       ssm.style.display = 'none';
      shd.style.display =  'none'; 
       
      
    } else {

      itemsDiv.style.display = 'grid'; 
      cablesDiv.style.display = 'none';
      computer_systems.style.display = 'none'; 
      computer_monitors.style.display = 'none'; 
      computer.style.display ='none'; 
      electronics.style.display = 'none'; 
      networking.style.display ='none'; 
      office.style.display = 'none'; 
      pvc.style.display = 'none';
      power .style.display = 'none';
      printers.style.display = 'none';
      ssm.style.display = 'none';
      shd.style.display =  'none'; 
    }
  });
});

const learn_more8 = document.querySelectorAll('#learn_more8');

learn_more8.forEach(button => {
  button.addEventListener('click', function() {


    if ( pvc.style.display === 'none' ||  pvc.style.display === '') {

       itemsDiv.style.display = 'none'; 
       cablesDiv.style.display = 'none'; 
       computer_systems.style.display = 'none'; 
       computer_monitors.style.display = 'none'; 
       computer.style.display ='none';  
       electronics.style.display = 'none';  
       networking.style.display ='none';  
       office.style.display = 'none';  
       pvc.style.display ='block';
       power .style.display = 'none';
       printers.style.display = 'none';
       ssm.style.display = 'none';
       shd.style.display =  'none'; 
       
      
    } else {

      itemsDiv.style.display = 'grid'; 
      cablesDiv.style.display = 'none';
      computer_systems.style.display = 'none'; 
      computer_monitors.style.display = 'none'; 
      computer.style.display ='none'; 
      electronics.style.display = 'none'; 
      networking.style.display ='none'; 
      office.style.display = 'none'; 
      pvc.style.display = 'none';
      power .style.display = 'none';
      printers.style.display = 'none';
      ssm.style.display = 'none';
      shd.style.display =  'none'; 
    }
  });
});

const learn_more9 = document.querySelectorAll('#learn_more9');

learn_more9.forEach(button => {
  button.addEventListener('click', function() {


    if (power.style.display === 'none' ||  power.style.display === '') {

       itemsDiv.style.display = 'none'; 
       cablesDiv.style.display = 'none'; 
       computer_systems.style.display = 'none'; 
       computer_monitors.style.display = 'none'; 
       computer.style.display ='none';  
       electronics.style.display = 'none';  
       networking.style.display ='none';  
       office.style.display = 'none';  
       pvc.style.display ='none';  
       power .style.display = 'block';
       printers.style.display = 'none';
       ssm.style.display = 'none';
      shd.style.display =  'none'; 
       
      
    } else {

      itemsDiv.style.display = 'grid'; 
      cablesDiv.style.display = 'none';
      computer_systems.style.display = 'none'; 
      computer_monitors.style.display = 'none'; 
      computer.style.display ='none'; 
      electronics.style.display = 'none'; 
      networking.style.display ='none'; 
      office.style.display = 'none'; 
      pvc.style.display = 'none';
      power .style.display = 'none';
      printers.style.display = 'none';
      ssm.style.display = 'none';
      shd.style.display =  'none'; 
    }
  });
});



const learn_more10 = document.querySelectorAll('#learn_more10');

learn_more10.forEach(button => {
  button.addEventListener('click', function() {


    if (printers.style.display === 'none' || printers.style.display === '') {

       itemsDiv.style.display = 'none'; 
       cablesDiv.style.display = 'none'; 
       computer_systems.style.display = 'none'; 
       computer_monitors.style.display = 'none'; 
       computer.style.display ='none';  
       electronics.style.display = 'none';  
       networking.style.display ='none';  
       office.style.display = 'none';  
       pvc.style.display ='none';  
       power .style.display = 'none';  
       printers.style.display = 'block';
       ssm.style.display = 'none';
      shd.style.display =  'none'; 
       
      
    } else {

      itemsDiv.style.display = 'grid'; 
      cablesDiv.style.display = 'none';
      computer_systems.style.display = 'none'; 
      computer_monitors.style.display = 'none'; 
      computer.style.display ='none'; 
      electronics.style.display = 'none'; 
      networking.style.display ='none'; 
      office.style.display = 'none'; 
      pvc.style.display = 'none';
      power .style.display = 'none';
      printers.style.display = 'none';
      ssm.style.display = 'none';
      shd.style.display =  'none'; 
    }
  });
});


const learn_more11 = document.querySelectorAll('#learn_more11');

learn_more11.forEach(button => {
  button.addEventListener('click', function() {


    if (ssm.style.display === 'none' || ssm.style.display === '') {

       itemsDiv.style.display = 'none'; 
       cablesDiv.style.display = 'none'; 
       computer_systems.style.display = 'none'; 
       computer_monitors.style.display = 'none'; 
       computer.style.display ='none';  
       electronics.style.display = 'none';  
       networking.style.display ='none';  
       office.style.display = 'none';  
       pvc.style.display ='none';  
       power .style.display = 'none';  
       printers.style.display = 'none';  
       ssm.style.display = 'block';
       shd.style.display =  'none'; 
       
      
    } else {

      itemsDiv.style.display = 'grid'; 
      cablesDiv.style.display = 'none';
      computer_systems.style.display = 'none'; 
      computer_monitors.style.display = 'none'; 
      computer.style.display ='none'; 
      electronics.style.display = 'none'; 
      networking.style.display ='none'; 
      office.style.display = 'none'; 
      pvc.style.display = 'none';
      power .style.display = 'none';
      printers.style.display = 'none';
      ssm.style.display = 'none';
      shd.style.display =  'none'; 
    }
  });
});

const learn_more12 = document.querySelectorAll('#learn_more12');

learn_more12.forEach(button => {
  button.addEventListener('click', function() {


    if (ssm.style.display === 'none' || ssm.style.display === '') {

       itemsDiv.style.display = 'none'; 
       cablesDiv.style.display = 'none'; 
       computer_systems.style.display = 'none'; 
       computer_monitors.style.display = 'none'; 
       computer.style.display ='none';  
       electronics.style.display = 'none';  
       networking.style.display ='none';  
       office.style.display = 'none';  
       pvc.style.display ='none';  
       power .style.display = 'none';  
       printers.style.display = 'none';  
       ssm.style.display = 'none';
       shd.style.display = 'block';
       
      
    } else {

      itemsDiv.style.display = 'grid'; 
      cablesDiv.style.display = 'none';
      computer_systems.style.display = 'none'; 
      computer_monitors.style.display = 'none'; 
      computer.style.display ='none'; 
      electronics.style.display = 'none'; 
      networking.style.display ='none'; 
      office.style.display = 'none'; 
      pvc.style.display = 'none';
      power .style.display = 'none';
      printers.style.display = 'none';
      ssm.style.display = 'none';
      shd.style.display =  'none'; 
    }
  });
});

 
const return_buttons = document.querySelectorAll('#return');


return_buttons.forEach(button => {
  button.addEventListener('click', function() {

    if (computer_systems.style.display === 'none' || itemsDiv .style.display === '') {

       itemsDiv.style.display = 'grid';
       cablesDiv.style.display = 'none';
       computer_systems.style.display = 'none'; 
       computer_monitors.style.display = 'none'; 
       computer.style.display ='none'; 
       electronics.style.display = 'none'; 
       networking.style.display ='none'; 
       office.style.display = 'none'; 
       pvc.style.display = 'none';
       power .style.display = 'none';
       printers.style.display = 'none';
       ssm.style.display = 'none';
       shd.style.display =  'none'; 
         
      
    } else {

      itemsDiv.style.display = 'grid';
      cablesDiv.style.display = 'none'; 
      computer_systems.style.display = 'none'; 
      computer_monitors.style.display = 'none'; 
      computer.style.display ='none'; 
      electronics.style.display = 'none'; 
      networking.style.display ='none'; 
      office.style.display = 'none'; 
      pvc.style.display = 'none';
      power .style.display = 'none';
      printers.style.display = 'none';
      ssm.style.display = 'none';
      shd.style.display =  'none'; 
    }
  });
});


 