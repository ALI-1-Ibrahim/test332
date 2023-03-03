// $(document).ready(function() {

    
//     var readURL = function(input) {
//         if (input.files && input.files[0]) {
//             var reader = new FileReader();

//             reader.onload = function (e) {
//                 $('.profile-pic').attr('src', e.target.result);
//                 // var x = e.target.result;
//                 // console.log(x);
//                 // document.cookie = "pic="+x+"; expires=Thu, 18 Dec 2024 12:00:00 UTC;path=/";
//             }
    
//             reader.readAsDataURL(input.files[0]);
//             // console.log(reader.readAsDataURL(input.files[0]));
//         }
//     }
    
//     $(".file-upload").on('change', function(){
//         readURL(this);
//         console.log(readURL(this).result);
//     });
    
//     $(".upload-button").on('click', function() {
//        $(".file-upload").click();

//     });
// });

                // const pic = document.cookie
                // .split('; ')
                // .find((row) => row.startsWith('pic='))
                // ?.split('=')[1];

                // if (pic == null) {
                //     $('.profile-pic').attr('src', "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg");
                // }
                // else {
                //     $('.profile-pic').attr('src', e.target.result);
                // }
                // console.log(e.target.result);
                // document.cookie = "pic="+e.target.result+"; expires=Thu, 18 Dec 2024 12:00:00 UTC;path=/";
          
    

const fileInput = document.getElementById('select-image');
const uploadbutton = document.getElementById('upload-button');
const profilepic = document.getElementById("profile-pic");
uploadbutton.addEventListener('click',function(){
    fileInput.click();
})
// Lister to the change event on the <input> element
fileInput.addEventListener('change', (event) => {
    // Get the selected image file
    const imageFile = event.target.files[0];

    if (imageFile) {
        const reader = new FileReader();

        // Convert the image file to a string
        reader.readAsDataURL(imageFile);

        // FileReader will emit the load event when the data URL is ready
        // Access the string using result property inside the callback function
        reader.addEventListener('load', () => {
            // Get the data URL string
            // console.log(reader.result);
            profilepic.src = reader.result;
            localStorage.setItem("pic", reader.result);
            window.location.reload();
                        // document.cookie = "pic="+reader.result+"; expires=Thu, 18 Dec 2024 12:00:00 UTC;path=/";
        });
    }
});