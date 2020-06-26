const os = require("os");

module.exports = class Computer {
    constructor(name, processor, username, operationalSystem) {
        this.name = name;
        this.processor = processor;
        this.username = username;
        this.operationalSystem = operationalSystem;
    }

    capturesInformation() {
        this.name = os.hostname();
        this.processor = os.cpus()[0].model;
        this.username = os.userInfo().username;
        this.operationalSystem = os.version()
    }

    displayData() {
        console.log('----------------------------------------------------------');
        console.log(`Nome atual da máquina: ${this.name}`);
        console.log(`Configurações do Processador: ${this.processor}`);
        console.log(`Usuário logado: ${this.username}`);
        console.log(`Sistema operacional: ${this.operationalSystem}`)
        console.log('----------------------------------------------------------');
    }
}