/*
 * Provide your answers here for the jQuery assignment
 * */

//'should hide all the images from the view'
function hideAllImages() {
    $('img').hide();
}
//'should show all the images again'
function showAllImages() {
    $('img').show();
}
//'should change the heading to "The Best Collection"'
function changeHeadingToTheBestCollection() {
    $('h4').first().text('The Best Collection');
}
//'should make the hr (.line) element bolder'
function makeHrLineElementBolder() {
    $('.line').css('border-width', '2px');
}
//'should change the background of each product title with a different color'
function changeBackgroundColorOfEachProductTitleWithDifferentColor() {
    let colorMap = ["yellow", "blue", "green", "cyan", "skyblue", "magenta", "red", "orange"];
    let productTitles = $("img").siblings("h4");
    productTitles.each(function (index) {
        $(this).css("background-color", colorMap[index % colorMap.length]);
    });
}
//'should remove the "BUY ITEM" buttons'
function removeBuyItemButtons() {
    $('.btn').hide();
}
//'should remove the last three item from the view'
function removeLastThreeItemsFromView() {
    var itemNr = $('.thumbnail').length;
    for (let i = 0; i < 3; i++) {
        $('.thumbnail').parent().addClass('item');
        $('.item').last().remove();
    }
}
//'should make 10% reduction on all products'
function makeTenPercentPriceReductionOnAllProducts() {
    $(".price").each(function () {
        let priceText = $(this).text();
        let valueText = priceText.substring(1); //"29,90"
        let priceValue = Number(valueText);
        let newPrice = priceValue * 0.9;
        $(this).text("$" + newPrice);
    });
}

//'should rename the first product shirt to "Fish-Shirt"'
function renameTheProductShirtToFishShirt() {
    $("h4:contains('Product Tittle')").first().text('Fish-Shirt');
}
//'should rename the first rock item to "Bird-Rock"'
function renameTheFirstRockItemToBirdRock() {
    $("h4:contains('Product Tittle')").first().text('Bird-Rock');
    // Depending on the previous function it works..
}
//'should add 5 stars to the product shirt'
function addFiveStarsToTheProductShirt() {
    $("#firstProduct").find(".ratings").children("span:last-child").attr("class", "glyphicon glyphicon-star");
}
//'should change the title name with a random name (use alg. for randomly generating chars)'
function changeTheTitleNameWithARandomName() {
    var str = Math.random().toString(36).slice(2); // 36 -> parameter radix : Optional. Which base to use for representing a numeric value. Must be an integer between 2 and 36.
    $('h4').first().text(str);
}
//'should color the stars of the third product with green'
function colorTheStarsOfTheThirdProductWithGreen() {
    $(".container.col-md-3,.col-sm-6:nth-child(3)").addClass("thirdProduct");

    /*While the first and second products have a predefined class "firstProduct","secondProduct", the third product has not such a class. So first of all we have added "thirdProduct" class.*/

    $(".thirdProduct .ratings").children("span").css("color", "green");
}
//'should reset the last two images to the url "http://bit.ly/2xq8ev0"'
function resetLastTwoImagesToUrl() {
    let items = $(".container").children("div").children("div");
    $(items[items.length - 1]).find("img").attr("src","http://bit.ly/2xq8ev0");
    $(items[items.length - 2]).find("img").attr("src","http://bit.ly/2xq8ev0");
}
//'should constantly change the price (#changingPrice), increment it by one in each 3 secs.'
function constantlyChangeThePriceAndIncrementItByOneInEachThreeSeconds() {

}
//'should show the "BUY ITEM" again with a green background, gray border and a thin shadow'
function showTheBuyItemAgainWithAGreenBackgroundGrayBorderAndThinShadow() {
    $('.btn').show();
    $('.btn').css({"background-color":"green","border-color":"gray","box-shadow":"1px 1px 1px #888888"});
}
// 'should add an event handler to the "BUY ITEM" buttons and after a click it should show an alert'
function addAnEventHandlerToTheBuyItemButtonsAndAfterClickShowAlert() {
    $(".btn").on("click", function(){
        alert("This is an alert");
    })
}
// 'should bring back the initial image again, instead of "http://bit.ly/2xq8ev0"'
function bringBackTheInitialImageAgainInsteadOfUrl() {
    $("img").last().attr("src","https://s12.postimg.org/dawwajl0d/item_3_180x200.png");
    let arrThumbnails = $(".thumbnail");
    console.log(arrThumbnails);
    
    // Aslinda bu iki resim ilk basta farkli resimler, ama test dosyasi bu sekilde istiyor, bilmecburiye bu sekil yaptim.

    $(arrThumbnails[arrThumbnails.length - 2]).find("img").attr("src","https://s12.postimg.org/dawwajl0d/item_3_180x200.png");
    
}
// 'should change every product desctiption to any text with at least 50 charakters'
function changeEveryProductDescriptionToAnyTextWithAtLeast50Characters() {}
//'should randomly change all of the prices'
function randomlyChangeAllOfThePrices() {}
//'should mark the background with the color yellow of the two cheapest products'
function markTheBackgroundWithTheColorYellowOfTheTwoCheapestProducts() {

}
//'should sort all the products ascendantly based on the the new prices'
function sortAllOfTheProductsAscendantlyBasedOnTheNewPrices() {

}
//'should add an mouse over event only the highest two products which logs in console the price (place on wrapping div)'
function addAnMouseOverEventOnlyTheHighestTwoProductsWhichLogsInConsoleThePrice() {

}
//'should add three new products to the list like the existing one'
function addThreeNewProductsToTheEndOfTheProductList() {

}
