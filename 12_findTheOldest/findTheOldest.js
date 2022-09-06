const findTheOldest = function(people) {
    people.forEach((people) => {
                        if(people.yearOfDeath !== undefined) people.age = people.yearOfDeath - people.yearOfBirth;
                            //console.log(people.age);
                        else {
                            const currentYear = new Date();
                            people.age = currentYear.getFullYear() - people.yearOfBirth;
                            console.log(people.age);
                        } 
                    });
    console.log(people.sort((a,b) => b.age - a.age ));    
    return people[0];
    /*
    get age by subtracting birth date from death date
    if no death date, get current age with date function
    sort people array by age descending
    return first value of array

      name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    */
};

/*

Given an array of objects representing people with a birth and death year, 
return the oldest person.

## Hints
- You should return the whole person object, but the tests mostly just 
    check to make sure the name is correct.
- this can be done with a couple of chained array methods, 
    or by using `reduce`.
- One of the tests checks for people with no death-date.. 
    use JavaScript's Date function to get their age as of today.

*/

// Do not edit below this line
module.exports = findTheOldest;
