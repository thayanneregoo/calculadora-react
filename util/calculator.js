export const initalState = {
    currentValue: "0",
    operator : null,
    previusValue : null,
};

export const handleNumber =(value, state)=>{
    if (state.currentValue === "0"){
        return {currentValue: `${value}`}
    };

    return{
        currentValue:`${state.currentValueg}${value}`,
    };
};

const handleEqual = (state) =>{
    const {currentValue, previusValue,operator} = state;
    const current = parseFloat(currentValue)
    const previus = parseFloat(previusValue)
    const resetState = {operator: null, previusValue: null};
    switch(operator){
        case "+":
            return{
                currentValue:`${previus+current}`,
                ...resetState
            };
        case "-":
            return{
                currentValue:`${previus-current}`,
                ...resetState
            };
        case "*":
            return{
                currentValue:`${previus*current}`,
                ...resetState
            };
        case "/":
            return{
                currentValue:`${previus/current}`,
                ...resetState
            };

        default:
            return state;
        
    };
}

//função da calculadora (limpar, porcentagem, igual...)
