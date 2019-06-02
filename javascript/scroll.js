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
var aboutStyle = getComputedStyle(about);
var closerStyle = getComputedStyle(closer);
var paragraphStyle = getComputedStyle(paragraphs);
var copyrightStyle = getComputedStyle(copyright);
var linksStyle = getComputedStyle(links);
var mainContentStyle = getComputedStyle(mainContent);

var imageWidth = imageStyle.width;
var headerWidth = headerStyle.width;
var headerHeight = headerStyle.height;
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
var copyrightHeight = paragraphStyle.height;
var linksHeight = linksStyle.height;
var mainContentHeight = mainContentStyle.height;

var imageWidthValue = imageWidth.slice(0, -2);
var imageMarginValue = imageMargin.slice(0, -2);
var headerWidthValue = headerWidth.slice(0, -2);
var headerHeightValue = headerHeight.slice(0, -2);
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
 window.addEventListener('load', function() {

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

});
}
else {
  about.style.width = 45 + "%";
  title.style.fontSize = "180px";
  title.style.width = 100 + "%";
  links.style.position = "fixed";
  links.style.bottom = "40px";
  links.style.height = "380px";
  mainContent.style.height = ($(window).height() - headerHeightValue) + "px";
  bImage.style.height = ($(window).height() - headerHeightValue - copyrightHeightValue) + "px";
}





  function inViewport($el) {
    var elH = $el.outerHeight(),
        H   = $(window).height(),
        r   = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
    return Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H));

  }



$(window).on("scroll resize", function(){
  if($(window).width()>990)
  {
  var imageStyle = getComputedStyle(bImage);
  var headerStyle = getComputedStyle(vHeader);
  var titleStyle = getComputedStyle(title);
  var aboutStyle = getComputedStyle(about);
  var closerStyle = getComputedStyle(closer);
  var linksStyle = getComputedStyle(links);
  var mainContentStyle = getComputedStyle(mainContent);
  var copyrightStyle = getComputedStyle(copyright);

  var imageWidth = imageStyle.width;
  var headerWidth = headerStyle.width;
  var headerHeight = headerStyle.height;
  var imageMargin = imageStyle.marginRight;
  var titleMargin = titleStyle.paddingLeft;
  var titleWidth = titleStyle.width;
  var aboutMargin = aboutStyle.marginRight;
  var aboutMarginTop = aboutStyle.marginTop;
  var aboutMarginBottom = aboutStyle.marginBottom;
  var closerHeight = closerStyle.height;
  var linksHeight = linksStyle.height;
  var mainContentHeight = mainContent.height;
  var copyrightHeight = copyrightStyle.height;

  var imageWidthValue = imageWidth.slice(0, -2);
  var imageMarginValue = imageMargin.slice(0, -2);
  var headerWidthValue = headerWidth.slice(0, -2);
  var headerHeightValue = headerHeight.slice(0, -2);
  var titleMarginValue = titleMargin.slice(0, -2);
  var titleWidthValue = titleWidth.slice(0, -2);
  var aboutMarginValue = aboutMargin.slice(0, -2);
  var aboutMarginTopValue = aboutMarginTop.slice(0, -2);
  var aboutMarginBottomValue = aboutMarginBottom.slice(0, -2);
  var closerHeightValue = closerHeight.slice(0, -2);
  var linksHeightValue = linksHeight.slice(0, -2);
  var mainContentHeightValue = mainContentHeight.slice(0, -2);
  var copyrightHeightValue = copyrightHeight.slice(0, -2);

  var aboutArea = (headerWidthValue - titleMarginValue - imageWidthValue - imageMarginValue - aboutMarginValue)*($(window).height() - headerHeightValue - aboutMarginTopValue - aboutMarginBottomValue - closerHeightValue);

  fade.style.width =  (imageWidthValue*1.2) + "px";
  filler.style.width = imageMargin;
  title.style.width = (headerWidthValue - titleMarginValue - imageWidthValue - imageMarginValue) + "px" ;
  about.style.width = (headerWidthValue - titleMarginValue - imageWidthValue - imageMarginValue - aboutMarginValue) + "px" ;
  about.style.height = ($(window).height() - headerHeightValue - aboutMarginTopValue - aboutMarginBottomValue - closerHeightValue) + "px";
  links.style.height = ($(window).height()*0.0852) + "px";
  about.style.height = ($(window).height() - headerHeightValue - aboutMarginTopValue - aboutMarginBottomValue - closerHeightValue) + "px";
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


links.style.width = 20 + "%";

}
else{
  about.style.width = 45 + "%";
  title.style.fontSize = "180px";
  title.style.width = 100 + "%";
  links.style.position = "fixed";
  links.style.bottom = "40px";
  links.style.height = "380px";
  mainContent.style.height = ($(window).height() - headerHeightValue) + "px";
  bImage.style.height = ($(window).height() - headerHeightValue - copyrightHeightValue) + "px";
}

  });




});
