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
            name: 'input',
            type: 'input',
            message: message,
            default: leftUnit,
            validate: function(value){
                if(value === '+' || value === '-'){
                    return true
                } else {
                    return 'Enter + or -'
                }
            }
        }
    ])
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
    input1,
}