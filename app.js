const {listForm1, inputForm,listForm2} = require('./view')
const {printTable} = require('console-table-printer')

async function app(state,view){
    const {model, currentView} = state
    const {title, table} = currentView
    console.clear()
    console.log(title)
    printTable(table)
    const {actual} = await listForm2()
    if (actual === 'No'){
        if (model.actual === 'left'){
            model.actual = 'right'
        }
        else{
            model.actual = 'left'
        }
    }
    const unit1 = await listForm1(model,'From?')
    const {value} = await inputForm(model)
    const unit2 = await listForm1(model,'To?')
}

module.exports = {
    app
}