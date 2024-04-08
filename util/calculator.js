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