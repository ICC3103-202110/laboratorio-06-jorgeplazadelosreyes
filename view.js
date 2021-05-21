const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Unit Converter App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function input1(model){
    const{leftUnit} = model
    const message = 'Unit to convert from?(Celsius/Farenheit/Kelvin): '
    return inquirer.prompt([
        {
            name: 'input1',
            type: 'input',
            message: message,
            default: leftUnit,
            validate: function(value){
                if(value === 'Celsius' || value === 'Farenheit' || value === "Kelvin"){
                    return true
                } else {
                    return 'Enter a valid unit(Celsius/Farenheit/Kelvin)'
                }
            }
        }
    ])
}

function listForm1(model){
    const {leftUnit} = model
    const message = 'Unit to convert from?'
    const choices = ['Celsius', 'Farenheit', 'Kelvin']
    return inquirer.prompt({
        name: 'list1',
        type: 'list',
        message: message,
        default: leftUnit,
        choices: choices
    })
}

function listForm2(model,leftUnit){
    const {rightUnit} = model
    const message = 'To?'
    const choices = ['Celsius', 'Farenheit', 'Kelvin']
    return inquirer.prompt({
        name: 'list2',
        type: 'list',
        message: message,
        default: rightUnit,
        choices: choices,
    })
}

function getTable(model){
    const {leftValue,leftUnit,rightValue,rightUnit} = model
    return [
        {"Left value": leftValue,
        "Left unit": leftUnit,
        "Right value": rightValue,
        "Right Unit": rightUnit}
    ]
}

// Get actual console view
function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    listForm1,
    listForm2,
    input1
}