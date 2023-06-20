const svg = require ("./lib/Svg.js")
const shape = require ("./lib/Shape.js")
const inquirer = require ("inquirer")


inquirer.prompt([
    {
        type:"list",
        choices:["Cirlce","Triangle","Square"],
        name:"shape",
        message:"Please select a shape:"

    },

    {
        type:"list",
        choices:["Red","Pink","Blue","Green"],
        name:"color",
        message:"Please select shape color:"

    },
    {
        type:"input",
        name:"text",
        message:"Please enter text max 3 characters:",
        validate:function(txtinput){
            if(txtinput.length > 3 || txtinput < 1){
                return false
            }
            return true
        }
    },
    
    {
        type:"list",
        choices:["Red","Pink","Blue","Green","Black", "White"],
        name:"text color",
        message:"Please select text color:"
    }
]).then (response =>{
    console.log (response)
})

