// I choose to work with jQuery, since  jQuery is part of JavaScript

$(document).ready(function(){

// First lets link our global header and footer to our for pages
// for that, we work with the id="header" for the global header and the id="footer" for the global footer
// with that, the 4 pages will have the same header and footer

    $(function(){
        $("#header").load("header.html"); // global header
        $("#footer").load("footer.html"); // global footer
    });

// For the Home page, I will make a function so when the user hover over the gif image then it changes the image

    var originalImageSrc = $("#Gifimage").attr("src"); // the original image is the GIF

   $("#Gifimage").hover(
     function() {
      // Mouse over - Change image source to the new image
      $(this).attr("src", "./img/TalkBoyChange.jpg"); // This is the image that will change
     },
     function() {
       // Mouse out - Revert the image source back to the original image
       $(this).attr("src", originalImageSrc);
     }
   );

// For the About  page, I will make 4 functions so when the user hover over the subtitle it changes the color from black to another

    $("#tored").hover(   // this changes the first subtitle color from black to red
        function() {
            // Mouse over - Change font color to red
            $(this).css("color", "red");
        },
        function() {
            // Mouse out - Revert the font color back to the initial color
            $(this).css("color", "black");
        }
    );

    $("#togreen").hover(  // this changes the second subtitle color from black to green
      function() {
        // Mouse over - Change font color to green
      $(this).css("color", "green");
     },
      function() {
      // Mouse out - Revert the font color back to the initial color
      $(this).css("color", "black");
     }
   );

    $("#toblue").hover(   // this changes the third subtitle color from black to blue
        function() {
            // Mouse over - Change font color to blue
            $(this).css("color", "blue");
        },
        function() {
            // Mouse out - Revert the font color back to the initial color
            $(this).css("color", "black");
        }
    );

    $("#towhite").hover(   // this changes the forth subtitle color from black to white
        function() {
            // Mouse over - Change font color to white
            $(this).css("color", "white");
        },
        function() {
            // Mouse out - Revert the font color back to the initial color
            $(this).css("color", "black");
        }
    );


// For the Product page, I will make a function so the user click a button to change the images

    var currentImageIndex = 1; // in the product.html the image inserted is Talkboy_1.jpg
    var totalImages = 6;  // there are 6 images

      $("#changeButton").click(function() {
      currentImageIndex = (currentImageIndex % totalImages) + 1; // This makes sure that the index loops back to 1 after reaching 6
      $("#mainImage").attr("src", "./img/Talkboy_" + currentImageIndex + ".jpg");
    });

// And, I will make a function so when the user hover over the price it changes to red color

    $("#tored2").hover(   // this changes price color from black to red
        function() {
            // Mouse over - Change font color to red
            $(this).css("color", "red");
        },
        function() {
            // Mouse out - Revert the font color back to the initial color
            $(this).css("color", "black");
        }
    );
});


