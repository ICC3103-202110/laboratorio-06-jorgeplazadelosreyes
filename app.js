const {listForm1, inputForm,listForm2,listForm3} = require('./view')
const {printTable} = require('console-table-printer')
const {FUNCTIONS,define} = require('./update')

async function app(state,view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        console.clear()
        console.log(title)
        printTable(table)
        const {actual} = await listForm2()
        if (actual === 'No'){
            model.actual = 'right'
        }
        else{
            model.actual = 'left'
        }
        const {unit1} = await listForm1(model,'From?')
        const {value} = await inputForm(model)
        const {unit2} = await listForm3(model,'To?')
        const temperature = parseFloat(value)

        if (model.actual === 'left'){
            model.leftValue = temperature
            const transformate = define(unit1,unit2)
            model.rightValue = parseFloat(FUNCTIONS[transformate](temperature))
            model.leftUnit = unit1
            model.rightUnit = unit2
        }
        else{
            model.rightValue = temperature
            const transformate = define(unit1,unit2)
            model.leftValue = parseFloat(FUNCTIONS[transformate](temperature))
            model.leftUnit = unit2
            model.rightUnit = unit1
        }

        state = {
            model: model,
            currentView: view(model)
        }
    }
}

module.exports = {
    app
}