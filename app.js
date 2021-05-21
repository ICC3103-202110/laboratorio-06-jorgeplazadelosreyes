const {input1} = require('./view')
const {printTable} = require('console-table-printer')

// Impure
async function app(state,view){
    const {model, currentView} = state
    const {title, table} = currentView
    console.clear()
    console.log(title)
    printTable(table)
    const {leftValue} = await input1(model)
    return 0;
}

module.exports = {
    app
}