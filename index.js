//Formula of Square
//Square area
function squareareaFormula(side){
    const squareArea = side ** 2;
    return `The area of square is ${squareArea}`
}

//Square perimeter
function squareperimeterFormula(side){
    const squarePerimeter = side * 4;
    return `The perimeter of square is ${squarePerimeter}`
}


//Formula of Rectangle
//Rectangle are
function rectangleareaFormula(length, width){
    const rectangleArea = length * width;
    return `The area of rectangle is ${rectangleArea}`
}


//Rectangle perimeter
function rectangleperimeterFormula(length, width){
    const rectanglePerimeter = (length + width) * 2;
    return `The perimeter of rectangle is is ${rectanglePerimeter}`
}

module.exports = {
    squareareaFormula,
    squareperimeterFormula,
    rectangleareaFormula,
    rectangleperimeterFormula
};

