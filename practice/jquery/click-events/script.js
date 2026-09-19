// clicking the button swaps the message and restyles the page
$("button").click(function () {
  $("div").text("ALHAMDULILLAH!");
  $("body").css({
    background: "purple",
    color: "white",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    height: "95vh",
    "font-size": "40px",
    transition: "0.5s",
    "letter-spacing": "4px",
  });
  $("#btn").css("display", "none");
});

/* jQuery selector cheat sheet (notes from class):
   $(this)                    - current element
   $("p")                     - element selector
   $("#test")                 - id selector
   $(".test")                 - class selector
   $("*")                     - universal selector
   $("p.intro")               - <p> with class="intro"
   $("p:first")               - first <p> element
   $("ul li:first-child")     - first <li> of every <ul>
   $("[href]")                - elements with an href attribute
   $("a[target='_blank']")    - <a> with target="_blank"
   $(":button")                - all buttons and input[type=button]
   $("tr:even") / $("tr:odd") - alternating table rows
*/
