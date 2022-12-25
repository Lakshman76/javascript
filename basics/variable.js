const accountId=143;
let accountEmail="abc@gmail.com";
var accountPassword="98765";//recommended not use because of block and functional scope.
accountCity="Ranchi";// it is also not use
let accountState;
// accountId="431"; // can't change value.

accountEmail="xyz@google.com";
accountPassword="45678";
accountCity="Giridih";

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])