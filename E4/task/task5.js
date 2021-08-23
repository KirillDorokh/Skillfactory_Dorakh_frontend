class Appliances {
    constructor(name, brand, amperage){
        this.name = name;
        this.brand = brand;
        this.amperage = amperage;
        this.type = 'Электроприбор';
    }

    switchOnOff(switchOnOff){
        if(switchOnOff){
            console.log(`Прибор включен в розетку`);
        } else {
            console.log(`Прибор выключен`);
        }
    }

    getName(){
        console.log(`Название прибора - ${this.name}`);
    }

    getBrand(){
        console.log(`Бренд - ${this.brand}`);
    }

    getPower(){
        console.log(`Потребляемая мощность - ${this.amperage * 220} Вт`);
    }
}

// Кухонные приборы
class KitchenAppliances extends Appliances{
    constructor(name, brand, amperage, purpose){
        super(name, brand, amperage);
        this.purpose = purpose;
    }

    getPurpose(){
        console.log(`Назначение: ${this.purpose}`);
    }

}

//Приборы по уходу за домом и одеждой
class CleaningApplications extends Appliances{
    constructor(name, brand, amperage, size){
        super(name, brand, amperage);
        this.size = size;
    }

    houseOrClothes(houseOrClothes){
        if(houseOrClothes === 'Дом'){
            console.log('Уход за домом');
        }
        if(houseOrClothes === 'Одежда'){
            console.log('Уход за одеждой');
        }
    }
    getSize(){
        console.log(`Размер - ${this.size}`)
    }
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