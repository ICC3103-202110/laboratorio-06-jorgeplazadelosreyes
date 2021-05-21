const {listForm1, listForm2} = require('./view')
const {printTable} = require('console-table-printer')

// Impure
async function app(state,view){
    const {model, currentView} = state
    const {title, table} = currentView
    console.clear()
    console.log(title)
    printTable(table)
    const leftUnit = await listForm1(model)
    const rightUnit = await listForm2(model,leftUnit)
    return 0;
}

module.exports = {
    app
}