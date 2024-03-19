//object , arrays, arrays on object and nested object
var user = {
    firstName: "Mohd Faizan",
    lastName: "Mehmood Ayaz",
    DateOfBirth: "18^th june , 1995",
    age: 31,
    isHemale: true,
    status: "Married",
    country: "Pakistan",
    City: "Karachi",
    address: {
        street: "3D block drigh road",
        floor: "5th",
        area: "Jamshed quater",
    },
    phoneNumber: {
        Home: "021-2345678",
        mobile: "03128675473",
        office: "021-2345890",
    },
    email: "Example23@gmail.com",
    salary: 30000,
    AboutHim: {
        Hobbies: ["cricket", "Body Building", "eating in restraunts"],
        favoriteColour: "Black",
        Entertainment: ["Watching movies", "outing with friends",]
    }
};
console.log(user.AboutHim.Hobbies[2]);
console.log(user.address.floor, user.address.area);
console.log('His monthly salary is ' + 'amount = ' + 30000);
console.log(user);
console.log(user.DateOfBirth);
