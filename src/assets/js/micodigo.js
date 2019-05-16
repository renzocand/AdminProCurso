// let salirHover = document.querySelector("salirHover");

$('#salirHover').hover(
    function(){ $(this).addClass('active') },
    function(){ $(this).removeClass('active') }
)