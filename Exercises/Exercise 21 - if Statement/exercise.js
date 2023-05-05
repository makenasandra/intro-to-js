const password = 'ab$13';


if (password.length<4 && password.length<6){
    console.log(`Password not valid`);

} else console.log(`Password length is correct`);


if (/.{4,6}$/.test(password)){
    console.log(`Password length is correct`);

} else  console.log(`Password not valid`);

console.log(/[4-6]/.test(password));