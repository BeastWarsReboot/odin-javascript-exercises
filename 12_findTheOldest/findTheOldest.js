const findTheOldest = function(people) {
    people.forEach((people) => {
                        if(people.yearOfDeath !== undefined) people.age = people.yearOfDeath - people.yearOfBirth;
                        else {
                            const currentYear = new Date();
                            people.age = currentYear.getFullYear() - people.yearOfBirth;
                        } 
                    });
    people.sort((a,b) => b.age - a.age );    
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
