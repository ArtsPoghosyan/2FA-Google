const speakeasy = require("speakeasy");
const qrcode = require("qrcode");

// CREATE QR CODE

const secret = speakeasy.generateSecret({
    name: "Test_Project: Test"
});

console.log(secret);

qrcode.toDataURL(secret.otpauth_url, (err, data)=>{
    console.log(data);
});

// VERIFY TOKEN

// const verify = speakeasy.totp.verify({
//     secret: "$()RaT$@;^MPbu7oFPLJI8CDdFigE}BE",
//     encoding: "ascii",
//     token: '522871'
// });

// console.log(verify);