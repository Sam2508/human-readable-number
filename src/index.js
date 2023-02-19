module.exports = function toReadable(number) {
    if (number == 0) return "zero";

    const oneNum = [
        "",
        " one",
        " two",
        " three",
        " four",
        " five",
        " six",
        " seven",
        " eight",
        " nine",
        " ten",
        " eleven",
        " twelve",
        " thirteen",
        " fourteen",
        " fifteen",
        " sixteen",
        " seventeen",
        " eighteen",
        " nineteen",
    ];
    const decNum = [
        "",
        "",
        " twenty",
        " thirty",
        " forty",
        " fifty",
        " sixty",
        " seventy",
        " eighty",
        " ninety",
    ];

    let numArray = String(number).split("").reverse();

    let newArray = [];

    if (numArray[1] == 1) numArray[0] = "1" + numArray[0];

    newArray.push(oneNum[+numArray[0]]);

    if (numArray[1] > 1) newArray.push(decNum[+numArray[1]]);

    if (numArray[2]) newArray.push(" hundred");

    newArray.push(oneNum[+numArray[2]]);

    return newArray.reverse().join("").trim();
};
