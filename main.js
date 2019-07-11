$(document).ready(() => {

    $('#add').click(function() {
            var val1 = Number($("#num_1").val())
            var val2 = Number($("#num_2").val())

            $("#answer").html(val1 + val2) 
        
    })

    $('#subtract').click(function() {
        var val1 = Number($("#num_1").val())
        var val2 = Number($("#num_2").val())

        $("#answer").html(val1 - val2) 
    
})

    $('#divide').click(function() {
        var val1 = Number($("#num_1").val())
        var val2 = Number($("#num_2").val())

    $("#answer").html(val1 / val2) 

})

    $('#multiply').click(function() {
    var val1 = Number($("#num_1").val())
    var val2 = Number($("#num_2").val())

    $("#answer").html(val1 * val2) 

})




})
















// $("#myform").on('submit', function(e){
//     e.preventDefault() 

//     var val1 = Number($("#num_1").val())
//     var val2 = Number($("#num_2").val())

   
//         $("#answer").html(val1 + val2) 
    

    
// })

