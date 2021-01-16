// 721. Accounts Merge
// Given a list accounts, each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.
// Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some email that is common to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.
// After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    // Union find (uf)
    // Can be solved using DFS on connected components
    let id = [...Array(accounts.length).keys()];
    let size = [];
    for (let i = 0; i < accounts.length; i++) size[i] = accounts[i].length - 1;

    let root = ind => {
        while (ind !== id[ind]) {
            id[ind] = id[id[ind]];
            ind = id[ind];
        }
        return ind;
    }

    let join = (a, b) => {
        let i = root(a);
        let j = root(b);
        if (size[i] > size[j]) {
            id[j] = i;
            size[i] += size[j];
        } else {
            id[i] = j;
            size[j] += size[i];
        }
    }

    let emails = new Map();
    for (let i = 0; i < accounts.length; i++) {
        for (let j = 1; j < accounts[i].length; j++) {
            if (emails.has(accounts[i][j])) {
                join(emails.get(accounts[i][j]), i);
            }
            emails.set(accounts[i][j], id[i]);
        }
    }

    let accs = new Map();
    for (let [email, ind] of emails) {
        let rootInd = root(ind);

        if (!accs.has(rootInd)) accs.set(rootInd, [accounts[ind][0]]);
        accs.get(rootInd).push(email);
    }

    return [...accs.values()].map(x => x.sort());
};
