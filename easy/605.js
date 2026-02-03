// 605. Can Place Flowers
// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let flowersFit = num => num > 2 ? Math.floor((num - 1) / 2) : 0;
    
    let count = 1;
    for (let i = 0; i < flowerbed.length; i++)  {
        if (flowerbed[i]) {
            n -= flowersFit(count);
            count = 0;
        } else {
            count++;
        }
    }
    if (!flowerbed[flowerbed.length - 1]) count++;
    n -= flowersFit(count);
    
    
    
    return n <= 0;
};