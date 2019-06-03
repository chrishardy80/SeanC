$(document).ready(function() {


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
var mainContent = document.querySelector("#maincontent");

var imageStyle = getComputedStyle(bImage);
var headerStyle = getComputedStyle(vHeader);
var titleStyle = getComputedStyle(title);
var bImageStyle = getComputedStyle(bImage);
var aboutStyle = getComputedStyle(about);
var closerStyle = getComputedStyle(closer);
var paragraphStyle = getComputedStyle(paragraphs);
var copyrightStyle = getComputedStyle(copyright);
var linksStyle = getComputedStyle(links);
var mainContentStyle = getComputedStyle(mainContent);

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
var mainContentHeight = mainContentStyle.height;

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
var mainContentHeightValue = mainContentHeight.slice(0, -2);

if($(window).width()>990)
{
 //window.addEventListener('load', function() {

fade.style.width =  (parseFloat(imageWidthValue)*1.2) + "px";
filler.style.width = imageMargin;
title.style.width = (parseFloat(headerWidthValue) - parseFloat(titleMarginValue) - parseFloat(imageWidthValue) - parseFloat(imageMarginValue)) + "px" ;
about.style.width = (headerWidthValue - titleMarginValue - imageWidthValue - imageMarginValue - aboutMarginValue) + "px" ;
links.style.height = ($(window).height()*0.0852) + "px";

var aboutArea = (parseFloat(headerWidthValue) - parseFloat(titleMarginValue) - parseFloat(imageWidthValue) - parseFloat(imageMarginValue) - parseFloat(aboutMarginValue))*($(window).height() - parseFloat(headerHeightValue) - parseFloat(aboutMarginTopValue) - parseFloat(aboutMarginBottomValue) - parseFloat(closerHeightValue));
copyright.style.marginRight = (parseFloat(imageWidthValue) + parseFloat(imageMarginValue) + 30) + "px";
about.style.height = ($(window).height() - parseFloat(headerHeightValue) - parseFloat(aboutMarginTopValue) - parseFloat(aboutMarginBottomValue) - parseFloat(closerHeightValue)) + "px";
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

if (titleWidthValue > 500)
  {
    title.style.fontSize = "100px";
  }
else
  {
    title.style.fontSize = (titleWidthValue*0.175) + "px";
  }

//});
}
else {
  about.style.width = 48 + "%";
  title.style.fontSize = "180px";
  title.style.width = 100 + "%";
  links.style.position = "fixed";
  links.style.bottom = parseFloat(copyrightHeightValue)*2 + "px";
  about.style.marginTop = mainContentHeightValue - bImageHeightValue;
  mainContent.style.height = ($(window).height() - headerHeightValue-copyrightHeightValue-40) + "px";
  bImage.style.height = ($(window).height() - headerHeightValue - copyrightHeightValue - 20) + "px";
  bImage.style.marginBottom = parseFloat(copyrightHeightValue) + "px";
  console.log(copyrightHeightValue + "px");
}





  function inViewport($el) {
    var elW = $el.outerWidth(),
        W   = $(window).width(),
        r   = $el[0].getBoundingClientRect(), l=r.left, r=r.right;
    return Math.max(0, l>0? Math.min(elW, W-l) : Math.min(r, W));

  }



$(window).on("scroll resize", function(){

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
  var mainContent = document.querySelector("#maincontent");

  var imageStyle = getComputedStyle(bImage);
  var headerStyle = getComputedStyle(vHeader);
  var titleStyle = getComputedStyle(title);
  var bImageStyle = getComputedStyle(bImage);
  var aboutStyle = getComputedStyle(about);
  var closerStyle = getComputedStyle(closer);
  var paragraphStyle = getComputedStyle(paragraphs);
  var copyrightStyle = getComputedStyle(copyright);
  var linksStyle = getComputedStyle(links);
  var mainContentStyle = getComputedStyle(mainContent);

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
  var mainContentHeight = mainContentStyle.height;

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
  var mainContentHeightValue = mainContentHeight.slice(0, -2);

  if($(window).width()>990)
  {
   //window.addEventListener('load', function() {

  fade.style.width =  (parseFloat(imageWidthValue)*1.2) + "px";
  filler.style.width = imageMargin;
  title.style.width = (parseFloat(headerWidthValue) - parseFloat(titleMarginValue) - parseFloat(imageWidthValue) - parseFloat(imageMarginValue)) + "px" ;
  about.style.width = (headerWidthValue - titleMarginValue - imageWidthValue - imageMarginValue - aboutMarginValue) + "px" ;
  links.style.height = ($(window).height()*0.0852) + "px";

  var aboutArea = (parseFloat(headerWidthValue) - parseFloat(titleMarginValue) - parseFloat(imageWidthValue) - parseFloat(imageMarginValue) - parseFloat(aboutMarginValue))*($(window).height() - parseFloat(headerHeightValue) - parseFloat(aboutMarginTopValue) - parseFloat(aboutMarginBottomValue) - parseFloat(closerHeightValue));
  copyright.style.marginRight = (parseFloat(imageWidthValue) + parseFloat(imageMarginValue) + 30) + "px";
  about.style.height = ($(window).height() - parseFloat(headerHeightValue) - parseFloat(aboutMarginTopValue) - parseFloat(aboutMarginBottomValue) - parseFloat(closerHeightValue)) + "px";
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

  if (titleWidthValue > 500)
    {
      title.style.fontSize = "100px";
    }
  else
    {
      title.style.fontSize = (titleWidthValue*0.175) + "px";
    }

  //});
  }
  else {
    about.style.width = 48 + "%";
    title.style.fontSize = "180px";
    title.style.width = 100 + "%";
    links.style.position = "fixed";
    links.style.bottom = parseFloat(copyrightHeightValue)*2 + "px";
    about.style.marginTop = mainContentHeightValue - bImageHeightValue;
    mainContent.style.height = ($(window).height() - headerHeightValue-copyrightHeightValue-40) + "px";
    bImage.style.height = ($(window).height() - headerHeightValue - copyrightHeightValue - 20) + "px";
    bImage.style.marginBottom = parseFloat(copyrightHeightValue) + "px";
    console.log(copyrightHeightValue + "px");
  }


  });




});
