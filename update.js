const FUNCTIONS = {
    'CtoF': celsius_to_fahrenheit,
    'CtoK': celsius_to_kelvin,
    'FtoC': fahrenheit_to_celsius,
    'FtoK': fahrenheit_to_kelvin,
    'KtoC': kelvin_to_celsius,
    'KtoF': kelvin_to_fahrenheit
}

function define(unit1,unit2){
    if (unit1 === 'Celsius' && unit2 === 'Fahrenheit'){
        return 'CtoF'
    }
    if (unit1 === 'Celsius' && unit2 === 'Kelvin'){
        return 'CtoK'
    }
    if (unit1 === 'Fahrenheit' && unit2 === 'Celsius'){
        return 'FtoC'
    }
    if (unit1 === 'Fahrenheit' && unit2 === 'Kelvin'){
        return 'FtoK'
    }
    if (unit1 === 'Kelvin' && unit2 === 'Celsius'){
        return 'KtoC'
    }
    if (unit1 === 'Kelvin' && unit2 === 'Fahrenheit'){
        return 'KtoF'
    }
}

function celsius_to_fahrenheit(value){
    return (value*(9/5))+32
}

function celsius_to_kelvin(value){
    return value + 273.15
}

function fahrenheit_to_celsius(value){
    return (value-32) * 5/9
}

function fahrenheit_to_kelvin(value){
    return ((value-32) * 5/9) + 273.15
}

function kelvin_to_celsius(value){
    return value - 273.15
}

function kelvin_to_fahrenheit(value){
    return ((value-273.15)*(9/5)) +32
}

module.exports = {
    FUNCTIONS,
    define
}