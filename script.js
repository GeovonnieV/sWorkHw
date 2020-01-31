$(document).ready(function () {
    //vars 
    var color;
    // var currentHour = moment().format('h a')
    var currentHour = moment().hours();
    console.log(currentHour)
    var hour = 9
    console.log(hour)
    //for loop for the time blocks..........uses 9 because there are going to be 9 time blocks 
    for (let index = 0; index < 9; index++) {
        console.log('hour', hour)
        //if else for the color of the blocks depending on time 
        if (hour < currentHour) {
            color = "grey"
        } else if (hour === currentHour) {
            color = "green"
        } else {
            color = "orange"
        }



        var form = $("<form>")
        form.attr("style", "background-color: " + color)
        //row thats inside form tag.... used for boostrap 
        var row = $("<div>")
        row.attr("class", "row")
        //this is 1 out of the 3 columns in the row 
        var hourColumn = $("<div>")
        hourColumn.attr("class", "col-sm-2")
        // 2 of 3 colums in row 
        var inputColumn = $("<div>")
        inputColumn.attr("class", "col-sm-8")
        var input = $('<input>')
        input.attr({
            type: 'text',
            class: 'form-control',
            placeholder: 'add event',
            id: "input-" + hour


        })
        //3 of 3 columns in the row 
        var buttonColumn = $("<div>")
        buttonColumn.attr("class", "col-sm-2")
        var button = $("<button>")
        button.attr({
            type: 'button',
            class: 'saveBtn',
            'data-HR': hour

        })
        button.text('save')
        //we need to put the button inside the button div
        buttonColumn.append(button)
        //put the input in the input div 
        inputColumn.append(input)
        console.log('hour', hour)
        //?
        if (hour >= 12) {
            if (hour === 12) {
                hourColumn.text("12:00PM")
            } else {
                hourColumn.text(hour - 12 + ":00PM")
            }
            // console.log(hour + ":00PM")
        } else {
            // console.log(hour + ":00 AM")
            hourColumn.text(hour + ":00AM")
        }
        

        //main container 
        var container = $(".container")
        //row goes in form
        form.append(row)
        //columns go in row 
        row.append(hourColumn, inputColumn, buttonColumn)
        // row.append(hourColumn, inputColumn, buttonColumn)
        // form that has row and columns in it goes into the conatiner 
        container.append(form)


        //for loop ends 



        //saves input to local storage 
        var inputValue = localStorage.getItem("hour-"  + hour)
        console.log(inputValue)
        
        input.attr('value', inputValue)


        hour++;
        //ok fr 
    }
    
    //gives the button a purpose 

    //$(document).on('click', '#btn-' + hour, function(){
   $('.saveBtn').on('click', function () {
   console.log(this)
    var grab = $(this).attr('data-hr')
    console.log(grab)
    var grabIn = $('#input-' + grab).val()
    console.log(grabIn)
        localStorage.setItem('hour-' + grab, grabIn)

    })
    

})

//current day for header 
var headDate = moment().format('MMMM Do YYYY, h:mm a');
$('#currentDay').text(headDate)



/* troubles
times are off
only one color
we need to have a specific id for each time block for the btn class to work
*/

