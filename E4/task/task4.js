function Appliances(name, brand, amperage){
    this.name = name;
    this.brand = brand;
    this.amperage = amperage;
    this.type = 'Электроприбор';
}

Appliances.prototype.switchOnOff = function(switchOnOff){
    if(switchOnOff){
        console.log(`Прибор включен в розетку`);
    } else {
        console.log(`Прибор выключен`);
    }
}

Appliances.prototype.getName = function(){
    console.log(`Название прибора - ${this.name}`);
}

Appliances.prototype.getBrand = function(){
    console.log(`Бренд - ${this.brand}`);
}

Appliances.prototype.getPower = function(){
    console.log(`Потребляемая мощность - ${this.amperage * 220} Вт`);
}


// Кухонные приборы
function KitchenAppliances(name, brand, amperage, purpose){
    this.purpose = purpose;
    this.name = name;
    this.brand = brand;
    this.amperage = amperage;
}

KitchenAppliances.prototype = new Appliances()

KitchenAppliances.prototype.getPurpose = function(){
    console.log(`Назначение: ${this.purpose}`);
}


//Приборы по уходу за домом и одеждой
function CleaningApplications(name, brand, amperage, size){
    this.name = name;
    this.brand = brand;
    this.amperage = amperage;
    this.size = size;
}

CleaningApplications.prototype = new Appliances()

CleaningApplications.prototype.houseOrClothes = function(houseOrClothes){
    if(houseOrClothes === 'Дом'){
        console.log('Уход за домом');
    }
    if(houseOrClothes === 'Одежда'){
        console.log('Уход за одеждой');
    }
}

CleaningApplications.prototype.getSize = function(){
    console.log(`Размер - ${this.size}`)
}


const phone = new Appliances('KX-TS2388RUW', 'Panasonic', 1);
console.log(phone)
phone.getBrand()
phone.getPower()
phone.switchOnOff(false)

const fridge = new KitchenAppliances('GA-B419SQGL', 'LG', 15, 'Хранить продкуты')
console.log(fridge)
fridge.getBrand();
fridge.getPower();
fridge.switchOnOff(true)

const stove = new KitchenAppliances('HKA090150', 'Bosch', 32, 'Приготовление пищи')
console.log(stove)
stove.getBrand();
stove.getPower();
stove.switchOnOff(false)

const robot = new CleaningApplications('S6 MaxV ', 'XIAOMI', 5, 'Компактный')
console.log(robot)
robot.getBrand();
robot.getPower();
robot.switchOnOff(false)
robot.houseOrClothes('Дом')
console.log(robot.type)
robot.getSize()