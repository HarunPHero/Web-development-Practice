"use strict";
const friendSalary = [2000, 30000, 40000, 50000000, 600000000, 70000000];
const friendName = ['Apon', 'Fahim', 'Murshedul', 'Farhan'];
let max = 0;
for (const salary of friendSalary) {
    if (salary > max) {
        max = salary;
    }
}
