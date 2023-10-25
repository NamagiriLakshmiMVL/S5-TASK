let profile = {
    "firstname:" : 'Namagiri',
    "lastname:" : "Lakshmi",
    "e_mail:" : "mvlnamagiri@gmail.com",
    "phone:" : 9487969596,
    "location:" : "Coimbatore",
    "school:" : "Cluny Matric Hr Sec School",
    "college:" : "Vellalar College for Women",
    "CGPA:" : 8.4,
    "current_designation:" : "Fresher",
    "ug_project:" : "Online Digital Books with QR Code",
    "aim:" : "MERN",
    "hobbies:" : "batminton",
};
console.log(" ")
console.log("for in loop")
for ( let key in profile)
{
    value = profile[key]
    console.log(key,value)
}
console.log(" ")
console.log("forEach loop")
Object.keys(profile).forEach(key => {
		const value = profile[key];
		console.log(key,value);
});
console.log(" ")
console.log("for of loop")
for (let [key,val] of Object.entries(profile))
{
    console.log(key,val)
}

let profile1 = [
{ "firstname:" : 'Namagiri'},
{ "lastname:" : "Lakshmi"},
{ "e_mail:" : "mvlnamagiri@gmail.com"},
{ "phone:" : 9487969596},
{ "location:" : "Coimbatore"},
{ "school:" : "Cluny Matric Hr Sec School"},
{ "college:" : "Vellalar College for Women"},
{ "CGPA:" : 8.4},
{ "current_designation:" : "Fresher"},
{ "ug_project:" : "Online Digital Books with QR Code"},
{ "aim:" : "MERN"},
{ "hobbies:" : "batminton"},
];
console.log(" ")
console.log("for loop")
for (let i = 0 ;i<profile1.length;i++)
{
    console.log(profile1[i])
}

