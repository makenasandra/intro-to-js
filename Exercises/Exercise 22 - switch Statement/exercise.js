let primitive = "right";

// if (typeof primitive == "number"){
//     console.log(`Primitive is a number`);
    
// } else if (typeof primitive == "string"){
//     console.log(`Primitive is a string`);

// } else if (typeof primitive == "boolean"){
//     console.log(`Primitive is a boolean`)

// } else console.log(`Primitive type is unknown`)

switch (typeof primitive) {
    case "number":
        console.log(`Primitive is a number`);
        break;
    case "string":
        console.log(`Primitive is a string`);
        break;
    case "boolean":
        console.log(`Primitive is a boolean`);
        break;
    default:
        console.log(`Primitive type is unknown`)
        break;
}