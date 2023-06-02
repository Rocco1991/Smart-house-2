// Klase za uređaje u kući

// SVJETLO
class Light {
    constructor(name) {
        this.name = name;
        this.status = false;
    }

    turnOn() {
        this.status = true;
        console.log(`${this.name} svjetlo je uključeno.`);
    }

    turnOff() {
        this.status = false;
        console.log(`${this.name} svjetlo je isključeno.`);
    }
}

// VRATA
class Door {
    constructor(name) {
        this.name = name;
        this.isOpen = false;
    }

    open() {
        this.isOpen = true;
        console.log(`${this.name} vrata su otvorena.`);
    }

    close() {
        this.isOpen = false;
        console.log(`${this.name} vrata su zatvorena.`);
    }
}

// PROZORI
class Window {
    constructor(name) {
        this.name = name;
        this.isOpen = false;
        this.areBlindsOpen = false;
    }

    open() {
        this.isOpen = true;
        console.log(`${this.name} prozor je otvoren.`);
    }

    close() {
        this.isOpen = false;
        console.log(`${this.name} prozor je zatvoren.`);
    }

    lowerBlinds() {
        this.areBlindsOpen = false;
        console.log(`Rolete na ${this.name} su spuštene.`);
    }

    raiseBlinds() {
        this.areBlindsOpen = true;
        console.log(`Rolete na ${this.name} su podignute.`);
    }
}

// PERILICA SUĐA
class WashingMachine {
    constructor() {
        this.isRunning = false;
    }

    start() {
        const currentHour = new Date().getHours();
        if (currentHour >= 22) {
            this.isRunning = true;
            console.log(`Mašina za pranje rublja je pokrenuta.`);
        } else {
            console.log(
                `Mašina za pranje rublja se može pokrenuti samo nakon 22:00.`
            );
        }
    }

    stop() {
        this.isRunning = false;
        console.log(`Mašina za pranje rublja je zaustavljena.`);
    }
}

class Weather {
    constructor() {
        this.isStormy = false;
        this.isSunny = false;
    }

    setStormy() {
        this.isStormy = true;
        console.log("Olujno vrijeme. Svi prozori se zatvaraju.");
    }

    setSunny() {
        this.isStormy = false;
        this.isSunny = true;
        console.log("Sunčano vrijeme. Prozori se otvaraju.");
    }
}

// SENZOR PRISUTNOSTI

class PresenceSensor {
    detectPresence() {
        // Simulacija detekcije prisutnosti
        const isPresenceDetected = Math.random() < 0.5;
        return isPresenceDetected;
    }
}

class TemperatureSensor {
    getCurrentTemperature() {
        // Simulacija očitanja temperature
        const currentTemperature = Math.floor(Math.random() * 30) + 20;
        return currentTemperature;
    }
}

class SmartOutlet {
    constructor() {
        this.isOn = false;
    }

    turnOn() {
        this.isOn = true;
        console.log("Pametna utičnica je uključena.");
    }

    turnOff() {
        this.isOn = false;
        console.log("Pametna utičnica je isključena.");
    }
}

class SecuritySystem {
    activateAlarm() {
        console.log("Alarmni sustav je aktiviran.");
        console.log("Poziv policiji i vatrogascima je poslan.");
        console.log("Hitna pomoć je obaviještena.");
    }

    deactivateAlarm() {
        console.log("Alarmni sustav je deaktiviran.");
    }
}

class VoiceAssistant {
    sendPushNotification(message) {
        console.log(`Primljena push obavijest: ${message}`);
    }
}

class GardenSprinklers {
    startSprinklers() {
        console.log("Navodnjavanje vrta je pokrenuto.");
    }

    stopSprinklers() {
        console.log("Navodnjavanje vrta je zaustavljeno.");
    }
}

// Klasa za garažu
class Garage {
    constructor() {
        this.isCarInside = false;
        this.isCO2LevelHigh = false;
        this.CO2Detector = new CO2Detector();
    }

    parkCar() {
        this.isCarInside = true;
        console.log("Auto je parkiran u garaži.");
    }

    removeCar() {
        this.isCarInside = false;
        console.log("Auto je izvađen iz garaže.");
    }

    checkCO2Level() {
        const CO2Level = this.CO2Detector.getCO2Level();
        if (CO2Level > 1000) {
            this.isCO2LevelHigh = true;
            console.log("Visok nivo CO2 detektiran u garaži.");
            this.notifyAuthorities();
        } else {
            this.isCO2LevelHigh = false;
            console.log("Normalan nivo CO2 u garaži.");
        }
    }

    notifyAuthorities() {
        console.log("Javljeno policiji, vatrogascima i hitnoj.");
    }
}

class CO2Detector {
    getCO2Level() {
        // Simulacija očitanja razine CO2
        const CO2Level = Math.floor(Math.random() * 2000) + 500;
        return CO2Level;
    }
}

class Thermostat {
    constructor(room) {
        this.room = room;
        this.targetTemperature = 20; // Default target temperature
        this.currentTemperature = 0; // Placeholder for current temperature
    }

    setTargetTemperature(targetTemperature) {
        this.targetTemperature = targetTemperature;
        console.log(
            `Target temperature for ${this.room} set to ${targetTemperature}°C.`
        );
    }

    getCurrentTemperature() {
        // Simulate reading the current temperature from a sensor
        // Replace this with actual temperature reading code
        this.currentTemperature = Math.floor(Math.random() * 10) + 20;
        console.log(
            `Current temperature in ${this.room} is ${this.currentTemperature}°C.`
        );
        return this.currentTemperature;
    }

    adjustTemperature() {
        this.getCurrentTemperature();
        if (this.currentTemperature < this.targetTemperature) {
            console.log(`Heating ${this.room}...`);
            // Code to activate heating system
        } else if (this.currentTemperature > this.targetTemperature) {
            console.log(`Cooling ${this.room}...`);
            // Code to activate cooling system
        } else {
            console.log(`${this.room} temperature is already at the desired level.`);
        }
    }
}

class Television {
    constructor() {
        this.isOn = false;
        this.volume = 0;
    }

    turnOn() {
        this.isOn = true;
        console.log("TV is turned on.");
    }

    turnOff() {
        this.isOn = false;
        console.log("TV is turned off.");
    }

    setVolume(volume) {
        this.volume = volume;
        console.log(`Volume is set to ${volume}.`);
    }

    increaseVolume() {
        if (this.volume < 100) {
            this.volume += 10;
            console.log(`Volume increased to ${this.volume}.`);
        } else {
            console.log("Maximum volume reached.");
        }
    }

    decreaseVolume() {
        if (this.volume > 0) {
            this.volume -= 10;
            console.log(`Volume decreased to ${this.volume}.`);
        } else {
            console.log("Minimum volume reached.");
        }
    }
}

// Kreiranje uređaja
const livingRoomLight = new Light("Svjetlo u dnevnoj sobi");
const kitchenLight = new Light("Svjetlo u kuhinji");
const hallwayLight = new Light("Svjetlo u glavnom hodniku");
const bathroomLight = new Light("Svjetlo u kupaonici");
const bedroomLight = new Light("Svjetlo u spavaćoj sobi");
const frontDoor = new Door("Ulazna vrata");
const backDoor = new Door("Stražnja vrata");
const livingRoomWindow = new Window("Prozor u dnevnoj sobi");
const bedroomWindow = new Window("Prozor u spavaćoj sobi");
const television = new Television();
const washingMachine = new WashingMachine();
const weather = new Weather();
const presenceSensor = new PresenceSensor();
const temperatureSensor = new TemperatureSensor();
const smartOutlet = new SmartOutlet();
const securitySystem = new SecuritySystem();
const voiceAssistant = new VoiceAssistant();
const gardenSprinklers = new GardenSprinklers();
const garage = new Garage();
const thermostatLivingRoom = new Thermostat("Living Room");
const thermostatBedroom = new Thermostat("Bedroom");

// Upravljanje uređajima
livingRoomLight.turnOn();
kitchenLight.turnOn();
hallwayLight.turnOn();
bathroomLight.turnOn();
bedroomLight.turnOn();
frontDoor.close();
backDoor.close();
livingRoomWindow.close();
bedroomWindow.close();
washingMachine.start();

// Automatsko upravljanje uređajima
function automateHome() {
    const currentHour = new Date().getHours();
    const isPresenceDetected = presenceSensor.detectPresence();
    const currentTemperature = temperatureSensor.getCurrentTemperature();

    if (currentHour >= 22 || currentHour < 6) {
        frontDoor.close();
        television.decreaseVolume();
    }

    if (isPresenceDetected) {
        livingRoomLight.turnOn();
    } else {
        livingRoomLight.turnOff();
    }

    if (weather.isStormy) {
        livingRoomWindow.close();
        bedroomWindow.close();
        livingRoomWindow.lowerBlinds();
        bedroomWindow.lowerBlinds();
    }

    if (weather.isSunny) {
        livingRoomWindow.open();
        bedroomWindow.open();
        livingRoomWindow.raiseBlinds();
        bedroomWindow.raiseBlinds();
    }

    if (currentTemperature > 30) {
        smartOutlet.turnOn();
    } else {
        smartOutlet.turnOff();
    }
}

// Postavljanje vremenskih uvjeta
function setStormyWeather() {
    weather.setStormy();
}

function setSunnyWeather() {
    weather.setSunny();
}

// Detekcija prisutnosti
function detectPresence() {
    const isPresenceDetected = presenceSensor.detectPresence();
    console.log(`Prisutnost je detektirana: ${isPresenceDetected}`);
}

// Automatsko podešavanje temperature
function adjustTemperature() {
    thermostatLivingRoom.adjustTemperature();
    thermostatBedroom.adjustTemperature();
}

// Energetska učinkovitost
function controlSmartOutlet(action) {
    if (action === "on") {
        smartOutlet.turnOn();
    } else if (action === "off") {
        smartOutlet.turnOff();
    }
}

// Sigurnosne značajke
function activateAlarm() {
    securitySystem.activateAlarm();
}

function deactivateAlarm() {
    securitySystem.deactivateAlarm();
}

// Integracija s pametnim telefonima
function sendPushNotification(message) {
    voiceAssistant.sendPushNotification(message);
}

// Automatsko navodnjavanje vrta
function startSprinklers() {
    gardenSprinklers.startSprinklers();
}

function stopSprinklers() {
    gardenSprinklers.stopSprinklers();
}

// Primjer upravljanja uređajima
frontDoor.open();
setStormyWeather();
automateHome();
television.turnOn();
television.setVolume(10);
setSunnyWeather();
automateHome();
detectPresence();
adjustTemperature();
controlSmartOutlet("on");
activateAlarm();
sendPushNotification("Kuća je sigurna.");
startSprinklers();

// Garaža
garage.parkCar();
garage.checkCO2Level();
garage.removeCar();
garage.checkCO2Level();