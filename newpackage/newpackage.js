module.exports = function bestBuyandSell(prices) {
    
    let mini=prices[0];
            let profit=0;
            for(let i=1;i<prices.length;i++){
                mini=Math.min(mini,prices[i]);
                let diff=prices[i]-mini;
                profit=Math.max(profit,diff);
                
            }
            return profit;
    };



    // usepackage  

//     const lbuyandsell= require('lbuyandsell')

// const prices=lbuyandsell([4,1,2,8,2,3]);

// console.log(prices)