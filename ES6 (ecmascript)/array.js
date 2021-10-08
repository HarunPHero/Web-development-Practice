
const ages = [12, 14, 16, 17, 18];
const ages2 = [11, 13, 15, 19, 20];
const ages3 = [22, 24, 25, 26]
const allAges = ages.concat(ages2).concat([6]).concat(ages3);
const allAges2 = [...ages, ...ages3, 7, ...ages2]
console.log(allAges2)
