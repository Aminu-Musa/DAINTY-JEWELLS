$(document).ready(()=>{

// ============== NAVIGATION==================
$("#create_acct_btn").click(()=>{
    location.assign('/Pages/sign_up.html')
})

$("#shop").click(()=>{
    location.assign('/Pages/shop.html')
})

$(".fa-user").click(()=>{
    location.assign('/Pages/login.html')
})

$('#header__img img').mouseover (()=> {
        $("#header__img img").addClass("cursor");
        
      })

$('#header__img img').click (()=> {
        $("#header__img img").addClass("cursor");
        location.assign('/index.html')
      })
 
      
// ======================MENU INTERACTION==================
$('.fa-angle-down').click(()=>{
    $('#account__dropdown__menu').toggle(200)
})

$('#last__Chance__Mega__Menu').click(()=>{

    $('#mega__menu').fadeToggle('mega__menu')
})

// PRODUCT PAGE TO PRODUCT DETAIL PAGE
$('.product__img').click(function(){
    location.assign('/Pages/single.html')

})


// SINGLE PRODUCT PAGE
$('.thumbnail').click(function (){

    $(this).each(function() {
        $(this).addClass('thumbnail_active')
    })


})


// API SECTION

 
})