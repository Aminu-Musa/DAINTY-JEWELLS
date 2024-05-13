$(document).ready(function () {


    // CREATING NEW PRODUCT
    // =====================================================================================
    $('#createProduct_btn').on('click', function (e) {
        e.preventDefault()
        let form_data = new FormData()
        form_data.append("name", $('#product_name').val().trim())
        form_data.append("category", $("select").val())
        form_data.append("price", Number($('#product_price').val()))
        form_data.append("quantity", Number($('#product_quantity').val()))
        form_data.append("image", $('#product_image')[0].files[0])
        form_data.append("description", $('textarea').val())
        
        $.ajax({
            method: 'post',
            url: 'http://159.65.21.42:9000/create/product',
            contentType:false,
            processData:false,
            data: form_data,
            success: function (data) {
                // let created_product = data
                alert('PRODUCT CREATED SUCCESSFULY')
            },
            error: function () { alert('FAILED TO CREATE PRODUCT') }
        })
    })
  


// GETTING NEW PRODUCT
// =================================================================================================
$.ajax({
    method: 'GET',
    url: 'http://159.65.21.42:9000/products',
    // contentType:false,
    // processData:false,
    success: function (newProduct){
        console.log('Getting product successful')
        for (let i = 0; i < newProduct.length; i++) {
                
            if (newProduct[i].category == 'dainty_DRESSES') {

               let productOn_admin = 
               `<div class="created__product">
               <div class="product__img"> 
                   <img src="http://159.65.21.42:9000${newProduct[i].image}" alt="">
               </div>

               <div class="product___dscp">
                   <h1 class="product___title">${newProduct[i].name}</h1>
                   <p>${newProduct[i].description}</p>
                   <p class="product__price">₦ ${newProduct[i].price}</p>

                 <div class="action_btn flex sbw">
                   <div class="product__edit_btn">Edit</div>
                   <div class="product__delete_btn">Delete</div>
                 </div>

               </div>
           </div>`
            
           $('.created__product__list__container').append(productOn_admin)
       }
           
          }
    },

    error: function (){
        console.log('Getting product failed')
    }
})




    // CREATING NEW USER
    // =====================================================================================
    $('#createNewUser_btn').on('click', function (e) {
        e.preventDefault()

        let New_user_Info = {
            name: $('#user_name').val(),
            phone: parseInt($('#user_phoneNumber').val()),
            email: $('#user_email').val(),
            password: $('#user_password').val()
        }

        $.ajax({
            url: 'http://159.65.21.42:9000/register',
            method: 'post',
            data: New_user_Info,
            success: function (data) {
                alert('USER CREATED SUCCESSFULY')
            },
            error: function () {
                alert('request failed')
            }

        })

        // CREATE USER FUNCTION CALL 
    })

    // GET USERS FOR USERS PAGE
    // =====================================================================================
    $.ajax({
        url: 'http://159.65.21.42:9000/users',
        method: 'get',
        success: function (data) {
            for (let i = 0; i < data.length; i++) {
                let serial_number = i;
                serial_number += 1
                $('#serial_number').text()
                if (data) {
                    
                    let totalUser = data.length

                    $('#total__Users').text(totalUser)
                    let userData =
                        `<tr>
                            <td>${serial_number}</td>
                            <td>${data[i].name.toUpperCase()}</td>
                            <td>0${data[i].phone}</td>
                            <td>${data[i].email.toLowerCase()}</td>
                        </tr>`;

                    $('.userTable').append(userData)
                    // console.log(data[i]);
                }

            }
        },

        error: function () {
            alert('request failed')
        }
    })

})

// DOCUMENT READY CLOSE
