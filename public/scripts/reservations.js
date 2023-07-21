$(document).ready(function(){

    var previousSeat;
    var previousTime;
    let room;
    let seatnum;
    let datereq;
    let timereq;
    let dateres;
    let timeres;

    let currRoom;
    let currSeatnum;
    let currDateReq;
    let currTimeReq;
    let currDateRes;
    let currTimeRes;

     // Checkbox change event listener
     $('#reservationContainer').on('change', '.form-check-input', function() {
      var value = $(this).val();
      var index = selectedValues.indexOf(value);

      // Add or remove the value from the selectedValues array
      if ($(this).prop('checked')) {
        if (index === -1) {
          selectedValues.push(value);
        }
      } else {
        if (index !== -1) {
          selectedValues.splice(index, 1);
        }
      }
    })

    function updateSelectedValues() {
      selectedValues = [];
      $('#reservationContainer').find('.form-check-input:checked').each(function() {
        selectedValues.push($(this).val());
      });
    }
    
    $('#reservationContainer').on('change', '.form-check-input', function() {
      updateSelectedValues();
    });
    
    $('#reservationContainer').on('click', '.edit-btn', function() {
      // Clear the selectedValues array before editing another table
      var selectedValues = [];
      

      // get the buttons

      let editBtns = $('.edit-btn');

      // Disable all other edit buttons
      editBtns.not(this).prop('disabled', true);

      let table = $(this).closest("table");
      let cancelBtn = table.find(".cancel-btn");
      let saveBtn = table.find(".save-btn");
      let deleteBtn = table.find(".delete-btn");
      
      // hide the edit and show the cancel and save buttons
      $(this).addClass("d-none");
      cancelBtn.removeClass("d-none");
      saveBtn.removeClass("d-none");
      deleteBtn.removeClass("d-none");

      // get the value elements
      room = table.find(".room-value");
      seatnum = table.find(".seatnum-value");
      datereq = table.find(".datereq-value");
      timereq = table.find(".timereq-value");
      dateres = table.find(".dateres-value");
      timeres = table.find(".timeres-value");

      // store their current value
      currRoom = room.text();
      currSeatnum = seatnum.text();
      currDateReq = datereq.text();
      currTimeReq = timereq.text();
      currDateRes = dateres.text();
      currTimeRes = timeres.text();
      previousSeat = seatnum.text();
      previousTime = timeres.text();
      // create forms
      // room
      /*
      room.html("");
      room_form = $("<select>");    
      var option1 = $('<option>').text('CL01').val('CL01');
      var option2 = $('<option>').text('CL02').val('CL02');
      var option3 = $('<option>').text('CL03').val('CL03');
      room_form.append(option1, option2, option3);
      room_form.addClass("room-form form-control");
      room_form.attr("cols", "13");
      room_form.attr("placeholder", `${currRoom}`);
      room_form.attr("value", `${currRoom}`);
      room.append(room_form);*/

      // seat num
      seatnum.html("");
      seatnum_form = $("<input>");
      seatnum_form.addClass("room-form form-control");
      seatnum_form.attr("type", "number");
      seatnum_form.attr("placeholder", `${currSeatnum}`);
      seatnum_form.attr("value", `${currSeatnum}`);
      seatnum_form.attr("min", "1");
      seatnum_form.attr("max", "48");
      seatnum.append(seatnum_form);

      // date request
      /*
      datereq.html("");
      datereq_form = $("<input>");
      datereq_form.attr("type", "datetime-local")
      datereq_form.addClass("room-form form-control");
      datereq_form.val(currDateReq);
      datereq.append(datereq_form);

      // time request
      timereq.html("");
      timereq_form = $("<input>");
      timereq_form.addClass("room-form form-control");
      timereq_form.attr("type", "text");
      timereq_form.attr("placeholder", `${currTimeReq}`);
      timereq_form.attr("value", `${currTimeReq}`);
      timereq.append(timereq_form);
      
      // date resereved
      dateres.html("");
      dateres_form = $("<input>");
      dateres_form.addClass("room-form form-control");
      dateres_form.attr("type", "date");
      dateres_form.val(currDateRes);
      dateres.append(dateres_form);*/

      // FIX THIS
      // time reserved
      /*timeres.html("");
      timeres_form = $("<select>");
      var op1 = $('<option>').text('09:00 to 09:30').val('09:00 to 09:30');
      var op2 = $('<option>').text('09:30 to 10:00').val('09:30 to 10:00');
      var op3 = $('<option>').text('10:00 to 10:30').val('10:00 to 10:30');
      var op4 = $('<option>').text('10:30 to 11:00').val('10:30 to 11:00');
      var op5 = $('<option>').text('11:00 to 11:30').val('11:00 to 11:30');
      var op6 = $('<option>').text('11:30 to 12:00').val('11:30 to 12:00');
      var op7 = $('<option>').text('12:00 to 12:30').val('12:00 to 12:30');
      var op8 = $('<option>').text('12:30 to 13:00').val('12:30 to 13:00');
      var op9 = $('<option>').text('13:00 to 13:30').val('13:00 to 13:30');
      var op10 = $('<option>').text('13:30 to 14:00').val('13:30 to 14:00');
      var op11 = $('<option>').text('14:00 to 14:30').val('14:00 to 14:30');
      var op12 = $('<option>').text('14:30 to 15:00').val('14:30 to 15:00');
      var op13 = $('<option>').text('15:00 to 15:30').val('15:00 to 15:30');
      var op14 = $('<option>').text('15:30 to 16:00').val('15:30 to 16:00');
      var op15 = $('<option>').text('16:00 to 16:30').val('16:00 to 16:30');
      var op16 = $('<option>').text('16:30 to 17:00').val('16:30 to 17:00');
      timeres_form.append(op1, op2, op3, op4, op5, op6, op7, op8, op9, op10, op11, op12, op13, op14, op15, op16);
      timeres_form.addClass("room-form form-control");
      timeres_form.attr("placeholder", `${currTimeRes}`);
      timeres.append(timeres_form);*/

      var container = $('<div>')//.addClass('container row');
      var timeContainer = $('<div>')//.addClass('container time-container col-md-3 me-1 text-white mx-auto');
      var title = $('<div>')//.addClass('title');
      var titleText = $('<p>')//.addClass('text-white fs-2 text-center custom-font').text('Select Time');
      title.append(titleText);
      timeContainer.append(title);

      var timeSlots = [
        { value: '09:00 to 09:30', id: '09:00', label: '09:00 to 09:30' },
        { value: '09:30 to 10:00', id: '09:30', label: '09:30 to 10:00' },
        { value: '10:00 to 10:30', id: '10:00', label: '10:00 to 10:30' },
        { value: '10:30 to 11:00', id: '10:30', label: '10:30 to 11:00' },
        { value: '11:00 to 11:30', id: '11:00', label: '11:00 to 11:30' },
        { value: '11:30 to 12:00', id: '11:30', label: '11:30 to 12:00' },
        { value: '12:00 to 12:30', id: '12:00', label: '12:00 to 12:30' },
        { value: '12:30 to 13:30', id: '12:30', label: '12:30 to 13:00' },
        { value: '13:00 to 13:30', id: '13:00', label: '13:00 to 13:30' },
        { value: '13:30 to 14:00', id: '13:30', label: '13:30 to 14:00' },
        { value: '14:00 to 14:30', id: '14:00', label: '14:00 to 14:30' },
        { value: '14:30 to 15:00', id: '14:30', label: '14:30 to 15:00' },
        { value: '15:00 to 15:30', id: '15:00', label: '15:00 to 15:30' },
        { value: '15:30 to 16:00', id: '15:30', label: '15:30 to 16:00' }
      ];

      $.each(timeSlots, function(index, slot) {
        var formCheck = $('<div>').addClass('form-check mx-auto');
        var input = $('<input>').addClass('form-check-input').attr({
          type: 'checkbox',
          value: slot.value,
          id: slot.id
        });
        var label = $('<label>').addClass('form-check-label').attr('for', slot.id).text(slot.label);
        formCheck.append(input, label);
        timeContainer.append(formCheck);
      });

          // Create a set to store the values in currTimeRes array
      let currTimeSet = new Set(currTimeRes.split(', '));

      // Iterate over each checkbox and check it if the value is in currTimeSet
      timeContainer.find('.form-check-input').each(function() {
        let value = $(this).val();
        if (currTimeSet.has(value)) {
          $(this).prop('checked', true);
        }
      });

      container.append(timeContainer);
      let prevTime = timeres.text();
      let prevTimeArray = prevTime.split(/,/);
      timeres.append(container);

      

      // Create a set to store the values in prevTimeArray
      let prevTimeSet = new Set(prevTimeArray);

      // Iterate over each checkbox and check it if the value is in prevTimeSet
      timeContainer.find('.form-check-input').each(function() {
        let value = $(this).val();
        if (prevTimeSet.has(value)) {
          $(this).prop('checked', true);
        }
      });
      updateSelectedValues();
    }) 

    $('#reservationContainer').on('click', '.cancel-btn', function() {
        // Find the closest table element
        let table = $(this).closest('table');
    
        // Find the buttons within the table
        let editBtn = table.find(".edit-btn");
        let saveBtn = table.find(".save-btn");
        let deleteBtn = table.find(".delete-btn");
    
        // Enable all other edit buttons
        $('.edit-btn').not(editBtn).prop('disabled', false);
      
        // Perform the desired operations within the specific table
        $(this).addClass("d-none");
        editBtn.removeClass("d-none");
        saveBtn.addClass("d-none");
        deleteBtn.addClass("d-none")
      
        // get the value elements
        //let room = table.find(".room-value");
        let seatnum = table.find(".seatnum-value");
        //let datereq = table.find(".datereq-value");
        //let timereq = table.find(".timereq-value");
        //let dateres = table.find(".dateres-value");
        let timeres = table.find(".timeres-value");
      
        //room.html(`${currRoom}`);
        seatnum.html(`${currSeatnum}`);
        //datereq.html(`${currDateReq}`);
        //timereq.html(`${currTimeReq}`);
        //dateres.html(`${currDateRes}`);
        timeres.html(`${currTimeRes}`);
      });
      


    $('#reservationContainer').on('click', '.save-btn', function () {
      // Store a reference to the table element
      var table = $(this).closest('table');
      $.ajax({
        url: '/getReservations',
        method: 'POST',
        success: function(response) {
          // Handle the data received from the server
          const cl01Array = response.cl01Array;
          const cl02Array = response.cl02Array;
          const cl03Array = response.cl03Array;
          // Use the arrays as needed

          let roomUsed;
          if(currRoom == 'CL01'){
            roomUsed = cl01Array
          } else if(currRoom == 'CL02'){
            roomUsed = cl02Array
          } else if(currRoom == 'CL03'){
            roomUsed = cl03Array
          }
          
          let currSeatnum = seatnum_form.val();
          currTimeRes = selectedValues.join(', ');
          let found = false;

          console.log(currTimeRes);
          let timeRes = currTimeRes.split(/,/);
          
          for(res of roomUsed){
            if(currDateRes == res.date && currSeatnum == res.seatSelected){
              let timeData = res.time.split(/,/);

              for(time of timeRes){
                console.log(timeRes);
                
                for(data of timeData){
                  console.log(time + " : " + timeData);
                  if(time == data){
                    found = true;
                  }
                }
              }
            }
          }

          console.log("found: " + found);

          
          if(found == true){
            alert('seat and given time already occupied');
          } else {          
            //let currDateReq = datereq_form.val();
            //let currTimeReq = timereq_form.val();
            // Create an empty array to store the selected values
            // Print the selected values
          
            // Find the specific elements within the table and update their content
            // room = table.find(".room-value");;
            let seatnum = table.find(".seatnum-value");
            //let datereq = table.find(".datereq-value");
            //let timereq = table.find(".timereq-value");
            //let dateres = table.find(".dateres-value");
            let timeres = table.find(".timeres-value");
          
            //room.html(`${currRoom}`);
            seatnum.html(`${currSeatnum}`);
            //datereq.html(`${currDateReq}`);
            //timereq.html(`${currTimeReq}`);
            //dateres.html(`${currDateRes}`);
            timeres.html(`${currTimeRes}`);
            // CLOSE THE EDIT
            // Find the closest table element
          
            // Find the buttons within the table
            
            let editBtn = table.find(".edit-btn");
            let cancelBtn = table.find(".cancel-btn");
            let deleteBtn = table.find(".delete-btn");
            let saveBtn = table.find(".save-btn");

            // Enable all other edit buttons
            $('.edit-btn').not(editBtn).prop('disabled', false);
          
            // Perform the desired operations within the specific table
            saveBtn.addClass("d-none");
            editBtn.removeClass("d-none");
            cancelBtn.addClass("d-none");
            deleteBtn.addClass("d-none");


            let formData = [];
            formData.push({name: "roomName", value: currRoom});
            formData.push({name: "date", value: currDateRes});
            formData.push({name: "newTimeRes", value: currTimeRes})
            formData.push({name: "newSeatNum", value: currSeatnum});
            formData.push({name: "prevSeat", value: previousSeat});
            formData.push({name: "prevTime", value: previousTime});
            $.ajax({
              type: 'POST',
              url: '/update-reservation',
              data: formData,
              success: function (response) {
                // Handle the success response from the server
              },
              error: function (error) {
                // Handle the error response from the server
              }
            });
          


          
            // Find the specific form elements within the table and update their content
          }
        }
      })
    });

    $('#reservationContainer').on('click', '.delete-btn', function() {
      let div = $(this).closest("div");
      div.remove();
  
      // Find the closest table element
      let table = $(this).closest('table');
  
      // Find the edit button within the table
      let editBtn = table.find('.edit-btn');
  
      // Enable the edit button
      $('.edit-btn').not(editBtn).prop('disabled', false);
  });
})