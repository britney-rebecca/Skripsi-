const mainColors = {
    orange1: '#D88B01',
    orange2: '#EA7B16',
    dark1: '#112340',
    grey1: '#7D8797',
    grey2: '#E9E9E9',
    black1: '#000000',
    black2: 'rgba(0, 0, 0, 0.5)'
};

export const colors = {
    primary : mainColors.orange1,
    secondary : mainColors.dark1,
    white : 'white',
    black : 'black',
    text : {
        primary : mainColors.dark1,
        secondary: mainColors.grey1,
        menuInactive: mainColors.dark1,
        menuActive: mainColors.orange2
    },

    button:{
        primary:{
            background: mainColors.orange1,
            text: 'white',
        },
        secondary:{
            background: 'white',
            text: mainColors.dark1,
        },
    },
    border : mainColors.grey2, 
    loadingBackground: mainColors.black2, 

};