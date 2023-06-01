// Klase za uređaje u kući
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
            console.log(`Mašina za pranje rublja se može pokrenuti samo nakon 22:00.`);
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
        console.log('Olujno vrijeme. Svi prozori se zatvaraju.');
    }

    setSunny() {
        this.isStormy = false;
        this.isSunny = true;
        console.log('Sunčano vrijeme. Prozori se otvaraju.');
    }
}

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
        console.log('Pametna utičnica je uključena.');
    }

    turnOff() {
        this.isOn = false;
        console.log('Pametna utičnica je isključena.');
    }
}

class SecuritySystem {
    activateAlarm() {
        console.log('Alarmni sustav je aktiviran.');
    }

    deactivateAlarm() {
        console.log('Alarmni sustav je deaktiviran.');
    }
}

class VoiceAssistant {
    sendPushNotification(message) {
        console.log(`Primljena push obavijest: ${message}`);
    }
}

class GardenSprinklers {
    startSprinklers() {
        console.log('Navodnjavanje vrta je pokrenuto.');
    }

    stopSprinklers() {
        console.log('Navodnjavanje vrta je zaustavljeno.');
    }
}

// Kreiranje uređaja
const livingRoomLight = new Light('Svjetlo u dnevnoj sobi');
const kitchenLight = new Light('Svjetlo u kuhinji');
const hallwayLight = new Light('Svjetlo u glavnom hodniku');
const bathroomLight = new Light('Svjetlo u kupaonici');
const bedroomLight = new Light('Svjetlo u spavaćoj sobi');
const frontDoor = new Door('Ulazna vrata');
const backDoor = new Door('Stražnja vrata');
const livingRoomWindow = new Window('Prozor u dnevnoj sobi');
const bedroomWindow = new Window('Prozor u spavaćoj sobi');
const television = new Television();
const washingMachine = new WashingMachine();
const weather = new Weather();
const presenceSensor = new PresenceSensor();
const temperatureSensor = new TemperatureSensor();
const smartOutlet = new SmartOutlet();
const securitySystem = new SecuritySystem();
const voiceAssistant = new VoiceAssistant();
const gardenSprinklers = new GardenSprinklers();

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
class PresenceSensor {
    detectPresence() {
        // Simulacija detekcije prisutnosti
        const isPresenceDetected = Math.random() < 0.5;
        return isPresenceDetected;
    }
}

// Automatsko podešavanje temperature
class TemperatureSensor {
    getCurrentTemperature() {
        // Simulacija očitanja temperature
        const currentTemperature = Math.floor(Math.random() * 30) + 20;
        return currentTemperature;
    }
}

// Energetska učinkovitost
class SmartOutlet {
    constructor() {
        this.isOn = false;
    }

    turnOn() {
        this.isOn = true;
        console.log('Pametna utičnica je uključena.');
    }

    turnOff() {
        this.isOn = false;
        console.log('Pametna utičnica je isključena.');
    }
}

// Sigurnosne značajke
class SecuritySystem {
    activateAlarm() {
        console.log('Alarmni sustav je aktiviran.');
    }

    deactivateAlarm() {
        console.log('Alarmni sustav je deaktiviran.');
    }
}

// Integracija s pametnim telefonima
class VoiceAssistant {
    sendPushNotification(message) {
        console.log(`Primljena push obavijest: ${message}`);
    }
}

// Automatsko navodnjavanje vrta
class GardenSprinklers {
    startSprinklers() {
        console.log('Navodnjavanje vrta je pokrenuto.');
    }

    stopSprinklers() {
        console.log('Navodnjavanje vrta je zaustavljeno.');
    }
}

// Primjer upravljanja uređajima
frontDoor.open();
setStormyWeather();
automateHome();
television.turnOn();
television.setVolume(10);
setSunnyWeather();
automateHome();
presenceSensor.detectPresence();
temperatureSensor.getCurrentTemperature();
smartOutlet.turnOn();
securitySystem.activateAlarm();
voiceAssistant.sendPushNotification('Kuća je sigurna.');
gardenSprinklers.startSprinklers();