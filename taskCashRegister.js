function checkCashRegister(price, cash, cid) {
    const UNIT_AMOUNT = {
        "PENNY": .01,
        "NICKEL": .05,
        "DIME": .10,
        "QUARTER": .25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
    }
    let totalAmount = 0
    const changeArray = []
    let changeAmount = cash - price
    for (let i = 0; i < cid.length; i++) {
        totalAmount += cid[i][1]
    }
    totalAmount = totalAmount.toFixed(2)
    if (changeAmount > totalAmount) {
        return { status: "INSUFFICIENT_FUNDS", change: [] }
    } else if (changeAmount === totalAmount) {
        return { status: "CLOSED", change: cid }
    } else {
        cid = cid.reverse()

        for (let i = 0; i < cid.length; i++) {
            let temp = [cid[i][0], 0];
            while (changeAmount >= UNIT_AMOUNT[cid[i][0]] && cid[i][1] > 0) {
                temp[1] += UNIT_AMOUNT[cid[i][0]];

                cid[i][1] -= UNIT_AMOUNT[cid[i][0]];
                changeAmount -= UNIT_AMOUNT[cid[i][0]];
                changeAmount = changeAmount.toFixed(2)
            }
            if (temp[1] > 0) {
                changeArray.push(temp);
            }
        }
        return { status: "OPEN", change: changeArray }
    }
}
console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]))