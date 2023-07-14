const SVG = require("./lib/Svg.js")
const { Circle, Square, Triangle } = require("./lib/Shape.js")
const inquirer = require("inquirer")
const fs = require("fs")

inquirer.prompt([
    {
        type: "list",
        choices: ["Circle", "Triangle", "Square"],
        name: "shape",
        message: "Please select a shape:"

    },

    {
        type: "list",
        choices: ["Red", "Pink", "Blue", "Green"],
        name: "Color",
        message: "Please select shape color:"

    },
    {
        type: "input",
        name: "text",
        message: "Please enter text max 3 characters:",
        validate: function (txtinput) {
            if (txtinput.length > 3 || txtinput < 1) {
                return false
            }
            return true
        }
    },

    {
        type: "list",
        choices: ["Red", "Pink", "Blue", "Green", "Black", "White"],
        name: "textcolor",
        message: "Please select text color:"
    }
]).then(response => {
    console.log(response)
   
    switch (response.shape) {
        case "Circle":
            var logoShape = new Circle();
            console.log(response.shape,"test")
            break;
        case "Triangle":
            var logoShape = new Triangle();
            break;
        case "Square":
            var logoShape = new Square();
            break;
    }
    
    console.log(logoShape)
    logoShape.setColor(response.color);
    var mySVG = new SVG()
    mySVG.setText(response.text, response.textcolor)
    mySVG.setShape(logoShape)
    let svgcontent = mySVG.render()
    fs.writeFileSync("logo.svg", mySVG.render(), function (err) {
        if (err) throw err
    })

    console.log("SV", svgcontent)
})

