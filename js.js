const buttons = document.querySelectorAll('#learn_more1');

buttons.forEach(button => {
  button.addEventListener('click', function() {

    const computer = document.getElementById('computer');
    const itemsDiv = document.getElementById('items');
    const cablesDiv = document.getElementById('cables');
    const computer_monitorsDiv = document.getElementById('computer_monitors');
    const computer_monitors = document.getElementById('computer_monitors');
    

    if (cablesDiv.style.display === 'none' || cablesDiv.style.display === '') {
      cablesDiv.style.display = 'block'; 
       itemsDiv.style.display = 'none'; 
       computer_systems.style.display = 'none'; 
        computer_monitors.style.display = 'none'; 
        computer.style.display = 'none'; 
      
    } else {
      cablesDiv.style.display = 'none';  
      itemsDiv.style.display = 'grid'; 
       computer_monitors.style.display = 'none'; 
       computer_systems.style.display = 'none'; 
       computer.style.display = 'none'; 
    }
  });
});
 

const learn_more2 = document.querySelectorAll('#learn_more2');

learn_more2.forEach(button => {
  button.addEventListener('click', function() {

    const computer = document.getElementById('computer');
    const itemsDiv = document.getElementById('items');
    const cablesDiv = document.getElementById('cables');
    const computer_monitorsDiv = document.getElementById('computer_monitors');
    const computer_monitors = document.getElementById('computer_monitors');
    

    if (computer_systems.style.display === 'none' || computer_systems.style.display === '') {
      computer_systems.style.display = 'block'; 
       itemsDiv.style.display = 'none'; 
       cablesDiv.style.display = 'none'; 
        computer_monitors.style.display = 'none'; 
        computer.style.display = 'none'; 
       
      
    } else {
      computer_systems.style.display = 'none';  
      itemsDiv.style.display = 'grid'; 
      cablesDiv.style.display = 'none'; 
       computer_monitors.style.display = 'none'; 
       computer.style.display = 'none'; 
    }
  });
});


const learn_more3 = document.querySelectorAll('#learn_more3');

learn_more3.forEach(button => {
  button.addEventListener('click', function() {

    const computer = document.getElementById('computer');
    const itemsDiv = document.getElementById('items');
    const cablesDiv = document.getElementById('cables');
    const computer_monitorsDiv = document.getElementById('computer_monitors');
    const computer_monitors = document.getElementById('computer_monitors');
    

    if (computer_monitors.style.display === 'none' || computer_monitors.style.display === '') {
       computer_monitors.style.display = 'block'; 
      computer_systems.style.display = 'none'; 
       itemsDiv.style.display = 'none'; 
       cablesDiv.style.display = 'none'; 
       computer.style.display = 'none'; 
       
      
    } else {
      computer_systems.style.display = 'none';  
      itemsDiv.style.display = 'grid'; 
      cablesDiv.style.display = 'none'; 
      computer_monitors.style.display = 'none'; 
      computer.style.display = 'none'; 
    }
  });
});

const learn_more4 = document.querySelectorAll('#learn_more4');

learn_more4.forEach(button => {
  button.addEventListener('click', function() {

    const computer = document.getElementById('computer');
    const itemsDiv = document.getElementById('items');
    const cablesDiv = document.getElementById('cables');
    const computer_monitorsDiv = document.getElementById('computer_monitors');
    const computer_monitors = document.getElementById('computer_monitors');
    

    if (computer.style.display === 'none' || computer.style.display === '') {
       computer.style.display = 'block'; 
        computer_monitors.style.display = 'none'; 
      computer_systems.style.display = 'none'; 
       itemsDiv.style.display = 'none'; 
       cablesDiv.style.display = 'none'; 
       
      
    } else {
      computer_systems.style.display = 'none';  
      itemsDiv.style.display = 'grid'; 
      cablesDiv.style.display = 'none'; 
      computer_monitors.style.display = 'none'; 
      computer.style.display = 'none'; 

    }
  });
});






<!----learn_more_buttons-------->

<!----return_buttons-------->

const return_buttons = document.querySelectorAll('#return1');


return_buttons.forEach(button => {
  button.addEventListener('click', function() {

   const computer = document.getElementById('computer');
    const itemsDiv = document.getElementById('items');
    const cablesDiv = document.getElementById('cables');
    const computer_monitorsDiv = document.getElementById('computer_monitors');
    const computer_monitors = document.getElementById('computer_monitors');
    

    if (itemsDiv.style.display === 'none' || itemsDiv .style.display === '') {
       itemsDiv.style.display = 'grid'; 
       cablesDiv.style.display = 'none'; 
       computer_monitors.style.display = 'none'; 
       computer_systems.style.display = 'none'; 
       computer.style.display = 'none'; 
         
      
    } else {
      itemsDiv.style.display = 'none';  
      cablesDiv.style.display = 'block'; 
      computer_monitors.style.display = 'none'; 
      computer_systems.style.display = 'none'; 
      computer.style.display = 'none'; 
    }
  });
});

 

const return_buttons2 = document.querySelectorAll('#return2');


return_buttons2.forEach(button => {
  button.addEventListener('click', function() {

  const computer = document.getElementById('computer');
    const itemsDiv = document.getElementById('items');
    const cablesDiv = document.getElementById('cables');
    const computer_monitorsDiv = document.getElementById('computer_monitors');
    const computer_monitors = document.getElementById('computer_monitors');
    

    if (computer_systems.style.display === 'none' || itemsDiv .style.display === '') {
       itemsDiv.style.display = 'none'; 
       computer_systems.style.display = 'block'; 
       computer_monitors.style.display = 'none'; 
       cablesDiv.style.display = 'none'; 
       computer.style.display = 'none'; 
         
      
    } else {
      itemsDiv.style.display = 'grid';  
      computer_systems.style.display = 'none'; 
      computer_monitors.style.display = 'none'; 
      cablesDiv.style.display = 'none'; 
      computer.style.display = 'none'; 
    }
  });
});



const return_buttons3 = document.querySelectorAll('#return3');


return_buttons3.forEach(button => {
  button.addEventListener('click', function() {

  const computer = document.getElementById('computer');
    const itemsDiv = document.getElementById('items');
    const cablesDiv = document.getElementById('cables');
    const computer_monitorsDiv = document.getElementById('computer_monitors');
    const computer_monitors = document.getElementById('computer_monitors');
    

    if (computer_monitors.style.display === 'none' || itemsDiv .style.display === '') {
       itemsDiv.style.display = 'none'; 
       computer_systems.style.display = 'none'; 
       computer_monitors.style.display = 'block'; 
       cablesDiv.style.display = 'none'; 
       computer.style.display = 'none'; 
         
      
    } else {
      itemsDiv.style.display = 'grid';  
      computer_monitors.style.display = 'none'; 
      computer_systems.style.display = 'none'; 
      cablesDiv.style.display = 'none'; 
      computer.style.display = 'none'; 
    }
  });
});



const return_buttons4 = document.querySelectorAll('#return4');

return_buttons4.forEach(button => {
  button.addEventListener('click', function() {
    
  const computer = document.getElementById('computer');
    const itemsDiv = document.getElementById('items');
    const cablesDiv = document.getElementById('cables');
    const computer_monitorsDiv = document.getElementById('computer_monitors');
    const computer_monitors = document.getElementById('computer_monitors');
    

    if (computer.style.display === 'none' || itemsDiv.style.display === '') {
       itemsDiv.style.display = 'none'; 
       computer_systems.style.display = 'none'; 
       computer_monitors.style.display = 'none'; 
       computer.style.display = 'block'; 
       cablesDiv.style.display = 'none'; 
         
      
    } else {
      itemsDiv.style.display = 'grid';  
      computer_monitors.style.display = 'none'; 
      computer_systems.style.display = 'none'; 
      cablesDiv.style.display = 'none'; 
      computer.style.display = 'none'; 
    }
  });
});
