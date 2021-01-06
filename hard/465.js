// 465. Optimal Account Balancing
// A group of friends went on holiday and sometimes lent each other money. For example, Alice paid for Bill's lunch for $10. Then later Chris gave Alice $5 for a taxi ride. We can model each transaction as a tuple (x, y, z) which means person x gave person y $z. Assuming Alice, Bill, and Chris are person 0, 1, and 2 respectively (0, 1, 2 are the person's ID), the transactions can be represented as [[0, 1, 10], [2, 0, 5]].
// Given a list of transactions between a group of people, return the minimum number of transactions required to settle the debt.

/**
 * @param {number[][]} transactions
 * @return {number}
 */
var minTransfers = function(transactions) {
    let persons = new Map();
    for (let i = 0; i < transactions.length; i++) {
        let [first, second, cash] = transactions[i];
        persons.set(first, (persons.get(first) || 0) - cash);
        persons.set(second, (persons.get(second) || 0) + cash);
    }
    let counts = [...persons.values()].filter(x => x);
    
    let backtrack = (index) => {
        while (!counts[index] && counts[index] < counts.length) index++;
        if (index === counts.length) return 0;
        let val = counts[index];
        counts[index] = 0;
        let result = Infinity;
        
        const mirrorInd = counts.indexOf(-val, index);
        if (mirrorInd >= 0) {
            let mirror = counts[mirrorInd];
            counts[mirrorInd] = 0;
            result = 1 + backtrack(index + 1);
            counts[mirrorInd] = mirror;
        } else {
            for(let i = index + 1; i < counts.length; i++) {
                if (!counts[i] || counts[i] * val > 0) continue;
                counts[i] += val;
                result = Math.min(result, 1 + backtrack(index + 1));
                counts[i] -= val;
            }
        }
        counts[index] = val;
        
        return result;
    }
    return backtrack(0);
};

// console.log(minTransfers([[0,1,10],[1,0,1],[1,2,5],[2,0,5]])); // 1
// console.log(minTransfers([[0,1,1],[1,2,1],[2,0,1]])); // 0
// console.log(minTransfers([[0,1,10],[2,0,5]])); // 2
console.log(minTransfers([[0,1,2],[1,2,1],[1,3,1]])); // 2
