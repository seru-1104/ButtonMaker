let bgColor = document.getElementById("bgColorInput");
let fontColor = document.getElementById("fontColorInput");
let fontSize = document.getElementById("fontSizeInput");
let fontWeight = document.getElementById("fontWeightInput");
let padding = document.getElementById("paddingInput");
let borderRadius = document.getElementById("borderRadiusInput");
let button = document.getElementById("customButton");

function styleButton() {
    let bgColorValue = bgColor.value;
    let fontColorValue = fontColor.value;
    let fontSizeValue = fontSize.value;
    let fontWeightValue = fontWeight.value;
    let paddingValue = padding.value;
    let borderRadiusValue = borderRadius.value;

    button.style.backgroundColor = bgColorValue;
    button.style.color = fontColorValue;
    button.style.fontSize = fontSizeValue;
    button.style.fontWeight = fontWeightValue;
    button.style.padding = paddingValue;
    button.style.borderRadius = borderRadiusValue;

}