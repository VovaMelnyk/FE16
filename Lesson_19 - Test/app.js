module.exports = {
    greet: function () {
        return 'hello';
    },

    reduceFunc: function(arr) {
        if(!Array.isArray(arr)){
            return false;
        }
        return Number((arr.reduce((acc, el)=> acc + el,0)).toFixed(1));
    },

    // findNumber: function(...args) {
    //     if(args.every(el=> el < 0)) {
    //         return Math.max(...args);
    //     }
    //     let arr = args.map(el => Math.abs(el));
    //     return Math.min(...arr);
    // }
}









// sumArray: function(arr) {
    //     return arr.reduce((sum, x) => sum + x, 0);
    // },

    // mintemp: function(...args) {
    //     // let result = args.map(el => 0 - el);
    //     // let result = args.map(el => Math.abs(el));
    //     // return Math.min(...result);
    //     let plus = args.filter(el => el > 0);
    //     let minus = args.filter(el => el < 0);
    //     let plusResult = Math.min(...plus);
    //     let minResult = Math.max(...minus);
    //     return Math.abs(plusResult) > Math.abs(minResult) ? minResult : plusResult;
    // }