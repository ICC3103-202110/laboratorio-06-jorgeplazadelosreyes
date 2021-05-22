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

function listForm2(){
    const message = "Left temperature is source?"
    choices = ['Yes','No']
    return inquirer.prompt([
        {
            name: 'actual',
            type: 'list',
            message: message,
            default: "Yes",
            choices: choices
        }
    ])
}

function inputForm(model){
    const actual = model.actual
    let Value;
    if (actual === 'left'){
        Value = model.leftValue
    }
    else{
        Value = model.rightValue
    }
    const numb = Value
    const message = 'Value?'
    return inquirer.prompt([
        {
            name: 'value',
            type: 'input',
            message: message,
            default: numb
        }
    ])
}

function listForm1(model,message){
    const {leftUnit} = model
    const choices = ['Celsius', 'Fahrenheit', 'Kelvin']
    return inquirer.prompt({
        name: 'unit1',
        type: 'list',
        message: message,
        default: leftUnit,
        choices: choices
    })
}

function listForm3(model,message){
    const {rightUnit} = model
    const choices = ['Celsius', 'Fahrenheit', 'Kelvin']
    return inquirer.prompt({
        name: 'unit2',
        type: 'list',
        message: message,
        default: rightUnit,
        choices: choices
    })
}


function getTable(model){
    const {leftValue,leftUnit,rightValue,rightUnit} = model
    return [
        {"Left value": leftValue,
        "Left unit": leftUnit,
        "Right value": rightValue,
        "Right unit": rightUnit}
    ]
}

function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    listForm1,
    inputForm,
    listForm2,
    listForm3
}