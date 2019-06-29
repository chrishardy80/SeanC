$(document).ready(function() {

  if ($(window).height()<$(window).width()){
    $("#desktop").show();
    $("#mobile").hide();


    $("#backgroundimage").show();

    $("#mobilebackgroundimage").hide();
    if($(window).width()<990) {
      $("#about, #copyright").css("font-family", "Rokkitt");
      $("#title").css({"font-size":"60px",
                       "padding-left":"3vw"});
      $("#about, #links").css("margin-left", "2vw");
      $("#backgroundimage").css("margin-right", "2vw");
      $("#links").css("margin-bottom", "10px");
      $("#title, #fade, #filler, header").css("height","70px");
      $("#copyright").css({"font-size":"12px",
                           "margin-bottom":"0"});
      $("#about").css(
                       "font-size","16px");
      $("#links").css("height", "40px");
      $("#aboutcontainer").css("width", $(window).width() - $("#backgroundimage").css("width").slice(0, -2) - ($("#backgroundimage").css("margin-right").slice(0, -2)*2) + "px");
    }
    else {
      $("#about").css("font-family", "JMH Typewriter");
      $("#title, #fade, #filler, header").css("height","16vh");
      $("#title").css("padding-left", "7vw");
      $("#about, #links").css("margin-left", "7vw");
      $("#backgroundimage").css("margin-right", "7vw");
      $("#links").css("height", "70px");
      $("#aboutcontainer").css("width", $(window).width() - $("#backgroundimage").css("width").slice(0, -2) - ($("#backgroundimage").css("margin-right").slice(0, -2)*1.5) + "px");
      if ($("#title").css("width").slice(0, -2)>500)
        {

          $("#title").css("font-size", "100px");
        }
      else
        {
          $("#title").css("font-size", ($("#title").css("width").slice(0, -2)*0.175)+"px");
        }
    }
    $("#casarotto").css("width", $("#casarotto").css("height").slice(0, -2)*1.5 + "px");
    $("#wme").css("width", $("#wme").css("height"));
    $("#fade").css("width", ($("#backgroundimage").css("width").slice(0, -2)*1.2)+"px");

    console.log("value: "+$("#title").css("width"));
    console.log(($("#title").css("padding-left").slice(0, -2))*2);
    console.log($("#backgroundimage").css("width").slice(0, -2));
    console.log($("#backgroundimage").css("margin-right").slice(0, -2));
  }
  else {
    $("#desktop").hide();
    $("#backgroundimage").hide();
    $("#mobile").show();
    $("#mobilebackgroundimage").show();
    if(($(window).height()-$("#mobiletitle").css("height").slice(0, -2)-$("#mobilecopyright").css("height").slice(0, -2))/2.7> $(".One").css("height").slice(0, -2)) {
      $(".Two").show();
      $(".Two").css("width", "70%");
      $("#arrows").hide();

    }
    else {
     $(".Two").hide();
     $("#arrows").show();
     $(".Two").css("width", "100%");
    }
  }
console.log(($(window).height()-$("#mobiletitle").css("height").slice(0, -2)-$("#mobilecopyright").css("height").slice(0, -2))/2);
var fade = document.querySelector("#fade");
var title = document.querySelector("#title");
var filler = document.querySelector("#filler");
var bImage = document.querySelector("#backgroundimage");
var vHeader = document.querySelector("header");
var about = document.querySelector("#about");
var closer = document.querySelector("#closer");
var paragraphs = document.querySelector(".mainparagraphs")
var copyright = document.querySelector("#copyright");
var links = document.querySelector("#links");
var desktop = document.querySelector("#desktop");

var imageStyle = getComputedStyle(bImage);
var headerStyle = getComputedStyle(vHeader);
var titleStyle = getComputedStyle(title);
var bImageStyle = getComputedStyle(bImage);
var aboutStyle = getComputedStyle(about);
var closerStyle = getComputedStyle(closer);
var paragraphStyle = getComputedStyle(paragraphs);
var copyrightStyle = getComputedStyle(copyright);
var linksStyle = getComputedStyle(links);
var desktopStyle = getComputedStyle(desktop);

var imageWidth = imageStyle.width;
var headerWidth = headerStyle.width;
var headerHeight = headerStyle.height;
var bImageHeight = bImageStyle.height;
var imageMargin = imageStyle.marginRight;
var titleMargin = titleStyle.paddingLeft;
var titleWidth = titleStyle.width;
var aboutMargin = aboutStyle.marginRight;
var aboutMarginTop = aboutStyle.marginTop;
var aboutMarginBottom = aboutStyle.marginBottom;
var aboutFontSize = aboutStyle.fontSize;
var aboutHeight = aboutStyle.height;
var closerHeight = closerStyle.height;
var paragraphsHeight = paragraphStyle.height;
var copyrightHeight = copyrightStyle.height;
var linksHeight = linksStyle.height;
var desktopHeight = desktopStyle.height;

var imageWidthValue = imageWidth.slice(0, -2);
var imageMarginValue = imageMargin.slice(0, -2);
var headerWidthValue = headerWidth.slice(0, -2);
var headerHeightValue = headerHeight.slice(0, -2);
var bImageHeightValue = bImageHeight.slice(0, -2);
var titleMarginValue = titleMargin.slice(0, -2);
var titleWidthValue = titleWidth.slice(0, -2);
var aboutMarginValue = aboutMargin.slice(0, -2);
var aboutMarginTopValue = aboutMarginTop.slice(0, -2);
var aboutMarginBottomValue = aboutMarginBottom.slice(0, -2);
var aboutFontSizeValue = aboutFontSize.slice(0, -2);
var aboutHeightValue = aboutHeight.slice(0, -2);
var closerHeightValue = closerHeight.slice(0, -2);
var paragraphsHeightValue = paragraphsHeight.slice(0, -2);
var copyrightHeightValue = copyrightHeight.slice(0, -2);
var linksHeightValue = linksHeight.slice(0, -2);
var desktopHeightValue = desktopHeight.slice(0, -2);

//mobile

var mobilemaincontent = document.querySelector("#mobilemaincontent");
var mobilebackgroundimage = document.querySelector("#mobilebackgroundimage");
var mobilecopyright = document.querySelector("#mobilecopyright");
var mobileabout = document.querySelector("#mobileabout");
var mobiletitle = document.querySelector("#mobiletitle");
var rightarrow = document.querySelector(".rightarrow");
var leftarrow = document.querySelector(".leftarrow");

var mobilemaincontentStyle = getComputedStyle(mobilemaincontent);
var mobilebackgroundimageStyle = getComputedStyle(mobilebackgroundimage);
var mobilecopyrightStyle = getComputedStyle(mobilecopyright);
var mobileaboutStyle = getComputedStyle(mobileabout);
var mobiletitleStyle = getComputedStyle(mobiletitle);

var mobilemaincontentHeight = mobilemaincontentStyle.height;
var mobilemaincontentWidth = mobilemaincontentStyle.width;
var mobilebackgroundimageHeight = mobilebackgroundimageStyle.height;
var mobilebackgroundimageWidth = mobilebackgroundimageStyle.width;
var mobilecopyrightHeight = mobilecopyrightStyle.height;
var mobileaboutHeight = mobileaboutStyle.height;
var mobiletitleHeight = mobiletitleStyle.height;

var mobilemaincontentHeightValue = mobilemaincontentHeight.slice(0, -2);
var mobilemaincontentWidthValue = mobilemaincontentWidth.slice(0, -2);
var mobilebackgroundimageHeightValue = mobilebackgroundimageHeight.slice(0, -2);
var mobilebackgroundimageWidthValue = mobilebackgroundimageWidth.slice(0, -2);
var mobilecopyrightHeightValue = mobilecopyrightHeight.slice(0, -2);
var mobileaboutHeightValue = mobileaboutHeight.slice(0, -2);
var mobiletitleHeightValue = mobiletitleHeight.slice(0, -2);




filler.style.width = imageMargin;
title.style.width = (parseFloat(headerWidthValue) - parseFloat(titleMarginValue) - parseFloat(imageWidthValue) - parseFloat(imageMarginValue)) + "px" ;
//if ($(window).width()>990) {
//about.style.width = (headerWidthValue - titleMarginValue - imageWidthValue - imageMarginValue - aboutMarginValue) + "px" ;
//}
//else {
//about.style.width = (headerWidthValue - titleMarginValue - (imageWidthValue*0.77) - imageMarginValue - aboutMarginValue) + "px" ;
//}

var aboutArea = (parseFloat(headerWidthValue) - parseFloat(titleMarginValue) - parseFloat(imageWidthValue) - parseFloat(imageMarginValue) - parseFloat(aboutMarginValue))*($(window).height() - parseFloat(headerHeightValue) - parseFloat(aboutMarginTopValue) - parseFloat(aboutMarginBottomValue) - parseFloat(closerHeightValue));
copyright.style.marginRight = (parseFloat(imageWidthValue) + parseFloat(imageMarginValue) + 30) + "px";
//about.style.height = ($(window).height() - parseFloat(headerHeightValue) - parseFloat(aboutMarginTopValue) - parseFloat(aboutMarginBottomValue) - parseFloat(closerHeightValue)) + "px";
if (aboutArea < 291800)
{
  if (Math.floor(aboutArea*0.00007) > 14)
  {
  about.style.fontSize = (Math.floor(aboutArea*0.00007)) + "px";
  }
  else {
    about.style.fontSize = "14px";
  }
}
else
{
  about.style.fontSize = "20px";
}



//mobile

mobileabout.style.marginTop = (mobilemaincontentHeightValue - mobilecopyrightHeightValue - mobilebackgroundimageHeightValue + 20) + "px";
mobileabout.style.width = (mobilemaincontentWidthValue - (mobilebackgroundimageWidthValue*0.75) - 24) + "px";
rightarrow.style.top = (mobilemaincontentHeightValue - mobilecopyrightHeightValue - mobilebackgroundimageHeightValue + mobiletitleHeightValue + 20) + "px";
leftarrow.style.top = (mobilemaincontentHeightValue - mobilecopyrightHeightValue - mobilebackgroundimageHeightValue + mobiletitleHeightValue + 20) + "px";




  function inViewport($el) {
    var elW = $el.outerWidth(),
        W   = $(window).width(),
        r   = $el[0].getBoundingClientRect(), l=r.left, r=r.right;
    return Math.max(0, l>0? Math.min(elW, W-l) : Math.min(r, W));

  }



$(window).on("scroll resize", function(){

  if ($(window).height()<$(window).width()){
    $("#desktop").show();
    $("#backgroundimage").show();
    $("#mobile").hide();
    $("#mobilebackgroundimage").hide();
    if($(window).width()<990) {
      $("#about, #copyright").css("font-family", "Rokkitt");
      $("#title").css({"font-size":"60px",
                       "padding-left":"3vw"});
      $("#about, #links").css("margin-left", "2vw");
      $("#backgroundimage").css("margin-right", "2vw");
      $("#links").css("margin-bottom", "10px");
      $("#title, #fade, #filler, header").css("height","70px");
      $("#copyright").css({"font-size":"12px",
                           "margin-bottom":"0"});
      $("#about").css(
                       "font-size","16px");
      $("#links").css("height", "40px");
      $("#aboutcontainer").css("width", $(window).width() - $("#backgroundimage").css("width").slice(0, -2) - ($("#backgroundimage").css("margin-right").slice(0, -2)*2) + "px");
    }
    else {
      $("#about").css("font-family", "JMH Typewriter");
      $("#title, #fade, #filler, header").css("height","16vh");
      $("#title").css("padding-left", "7vw");
      $("#about, #links").css("margin-left", "7vw");
      $("#backgroundimage").css("margin-right", "7vw");
      $("#links").css("height", "70px");
      $("#aboutcontainer").css("width", $(window).width() - $("#backgroundimage").css("width").slice(0, -2) - ($("#backgroundimage").css("margin-right").slice(0, -2)*1.5) + "px");
      if ($("#title").css("width").slice(0, -2)>500)
        {

          $("#title").css("font-size", "100px");
        }
      else
        {
          $("#title").css("font-size", ($("#title").css("width").slice(0, -2)*0.175)+"px");
        }
    }
    $("#casarotto").css("width", $("#casarotto").css("height").slice(0, -2)*1.5 + "px");
    $("#wme").css("width", $("#wme").css("height"));
    $("#fade").css("width", ($("#backgroundimage").css("width").slice(0, -2)*1.2)+"px");

    console.log("value: "+$("#title").css("width"));
    console.log(($("#title").css("padding-left").slice(0, -2))*2);
    console.log($("#backgroundimage").css("width").slice(0, -2));
    console.log($("#backgroundimage").css("margin-right").slice(0, -2));
  }
  else {
    $("#desktop").hide();
    $("#backgroundimage").hide();
    $("#mobile").show();
    $("#mobilebackgroundimage").show();
    if(($(window).height()-$("#mobiletitle").css("height").slice(0, -2)-$("#mobilecopyright").css("height").slice(0, -2))/2.7> $(".One").css("height").slice(0, -2)) {
      $(".Two").show();
      $(".Two").css("width", "70%");
      $("#arrows").hide();

    }
    else {
     $(".Two").hide();
     $("#arrows").show();
     $(".Two").css("width", "100%");
    }
  }

  var fade = document.querySelector("#fade");
  var title = document.querySelector("#title");
  var filler = document.querySelector("#filler");
  var bImage = document.querySelector("#backgroundimage");
  var vHeader = document.querySelector("header");
  var about = document.querySelector("#about");
  var closer = document.querySelector("#closer");
  var paragraphs = document.querySelector(".mainparagraphs")
  var copyright = document.querySelector("#copyright");
  var links = document.querySelector("#links");
  var desktop = document.querySelector("#desktop");

  var imageStyle = getComputedStyle(bImage);
  var headerStyle = getComputedStyle(vHeader);
  var titleStyle = getComputedStyle(title);
  var bImageStyle = getComputedStyle(bImage);
  var aboutStyle = getComputedStyle(about);
  var closerStyle = getComputedStyle(closer);
  var paragraphStyle = getComputedStyle(paragraphs);
  var copyrightStyle = getComputedStyle(copyright);
  var linksStyle = getComputedStyle(links);
  var desktopStyle = getComputedStyle(desktop);

  var imageWidth = imageStyle.width;
  var headerWidth = headerStyle.width;
  var headerHeight = headerStyle.height;
  var bImageHeight = bImageStyle.height;
  var imageMargin = imageStyle.marginRight;
  var titleMargin = titleStyle.paddingLeft;
  var titleWidth = titleStyle.width;
  var aboutMargin = aboutStyle.marginRight;
  var aboutMarginTop = aboutStyle.marginTop;
  var aboutMarginBottom = aboutStyle.marginBottom;
  var aboutFontSize = aboutStyle.fontSize;
  var aboutHeight = aboutStyle.height;
  var closerHeight = closerStyle.height;
  var paragraphsHeight = paragraphStyle.height;
  var copyrightHeight = copyrightStyle.height;
  var linksHeight = linksStyle.height;
  var desktopHeight = desktopStyle.height;

  var imageWidthValue = imageWidth.slice(0, -2);
  var imageMarginValue = imageMargin.slice(0, -2);
  var headerWidthValue = headerWidth.slice(0, -2);
  var headerHeightValue = headerHeight.slice(0, -2);
  var bImageHeightValue = bImageHeight.slice(0, -2);
  var titleMarginValue = titleMargin.slice(0, -2);
  var titleWidthValue = titleWidth.slice(0, -2);
  var aboutMarginValue = aboutMargin.slice(0, -2);
  var aboutMarginTopValue = aboutMarginTop.slice(0, -2);
  var aboutMarginBottomValue = aboutMarginBottom.slice(0, -2);
  var aboutFontSizeValue = aboutFontSize.slice(0, -2);
  var aboutHeightValue = aboutHeight.slice(0, -2);
  var closerHeightValue = closerHeight.slice(0, -2);
  var paragraphsHeightValue = paragraphsHeight.slice(0, -2);
  var copyrightHeightValue = copyrightHeight.slice(0, -2);
  var linksHeightValue = linksHeight.slice(0, -2);
  var desktopHeightValue = desktopHeight.slice(0, -2);

  //mobile

  var mobilemaincontent = document.querySelector("#mobilemaincontent");
  var mobilebackgroundimage = document.querySelector("#mobilebackgroundimage");
  var mobilecopyright = document.querySelector("#mobilecopyright");
  var mobileabout = document.querySelector("#mobileabout");
  var mobiletitle = document.querySelector("#mobiletitle");
  var rightarrow = document.querySelector(".rightarrow");
  var leftarrow = document.querySelector(".leftarrow");

  var mobilemaincontentStyle = getComputedStyle(mobilemaincontent);
  var mobilebackgroundimageStyle = getComputedStyle(mobilebackgroundimage);
  var mobilecopyrightStyle = getComputedStyle(mobilecopyright);
  var mobileaboutStyle = getComputedStyle(mobileabout);
  var mobiletitleStyle = getComputedStyle(mobiletitle);

  var mobilemaincontentHeight = mobilemaincontentStyle.height;
  var mobilemaincontentWidth = mobilemaincontentStyle.width;
  var mobilebackgroundimageHeight = mobilebackgroundimageStyle.height;
  var mobilebackgroundimageWidth = mobilebackgroundimageStyle.width;
  var mobilecopyrightHeight = mobilecopyrightStyle.height;
  var mobileaboutHeight = mobileaboutStyle.height;
  var mobiletitleHeight = mobiletitleStyle.height;

  var mobilemaincontentHeightValue = mobilemaincontentHeight.slice(0, -2);
  var mobilemaincontentWidthValue = mobilemaincontentWidth.slice(0, -2);
  var mobilebackgroundimageHeightValue = mobilebackgroundimageHeight.slice(0, -2);
  var mobilebackgroundimageWidthValue = mobilebackgroundimageWidth.slice(0, -2);
  var mobilecopyrightHeightValue = mobilecopyrightHeight.slice(0, -2);
  var mobileaboutHeightValue = mobileaboutHeight.slice(0, -2);
  var mobiletitleHeightValue = mobiletitleHeight.slice(0, -2);

  fade.style.width =  (parseFloat(imageWidthValue)*1.2) + "px";
  filler.style.width = imageMargin;
  title.style.width = (parseFloat(headerWidthValue) - parseFloat(titleMarginValue) - parseFloat(imageWidthValue) - parseFloat(imageMarginValue)) + "px" ;



  var aboutArea = (parseFloat(headerWidthValue) - parseFloat(titleMarginValue) - parseFloat(imageWidthValue) - parseFloat(imageMarginValue) - parseFloat(aboutMarginValue))*($(window).height() - parseFloat(headerHeightValue) - parseFloat(aboutMarginTopValue) - parseFloat(aboutMarginBottomValue) - parseFloat(closerHeightValue));
  copyright.style.marginRight = (parseFloat(imageWidthValue) + parseFloat(imageMarginValue) + 30) + "px";
  //about.style.height = ($(window).height() - parseFloat(headerHeightValue) - parseFloat(aboutMarginTopValue) - parseFloat(aboutMarginBottomValue) - parseFloat(closerHeightValue)) + "px";
  if (aboutArea < 291800)
  {
    if (Math.floor(aboutArea*0.00007) > 14)
    {
    about.style.fontSize = (Math.floor(aboutArea*0.00007)) + "px";
    }
    else {
      about.style.fontSize = "14px";
    }
  }
  else
  {
    about.style.fontSize = "20px";
  }



    //mobile

    mobileabout.style.marginTop = (mobilemaincontentHeightValue - mobilecopyrightHeightValue - mobilebackgroundimageHeightValue + 20) + "px";
    mobileabout.style.width = (mobilemaincontentWidthValue - (mobilebackgroundimageWidthValue*0.75) - 24) + "px";
    rightarrow.style.top = (mobilemaincontentHeightValue - mobilecopyrightHeightValue - mobilebackgroundimageHeightValue + mobiletitleHeightValue + 20) + "px";
    leftarrow.style.top = (mobilemaincontentHeightValue - mobilecopyrightHeightValue - mobilebackgroundimageHeightValue + mobiletitleHeightValue + 20) + "px";




  });




});
