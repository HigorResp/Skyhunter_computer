const Computer = require("./controllers/ComputerSettings");

const myComputer = new Computer();

myComputer.capturesInformation();
setInterval(() => {
    myComputer.displayData();
}, 3000)