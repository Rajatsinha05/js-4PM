class Human {

    #dimag
    constructor(hath = 0, pair = 0, muh = 0, dimag = 0, name = "human") {
        this.pair = pair;
        this.muh = muh;
        this.#dimag = dimag;
        this.hath = hath;
        this.name = name;
    }
    bolSktahai() {
        console.log(`${this.name}  bol Skta hai`);
    }
    sunSktahai() {
        console.log(`${this.name}  nhi sun Skta hai`);
    }
    padhSktahai() {
        console.log(`${this.name} padh skta hai`);
    }



    setDimag(val) {

        if (val < 0) {
            throw new Error("Dimag cannot be negative")
        }
        this.#dimag = val;
    }

    getDimag() {
        return this.#dimag;
    }



    speak() {

        console.log("speak");
    }

}


class SuperHuman extends Human {

    constructor(hath = 0, pair = 0, muh = 0, dimag = 0, name = "human", ankh = 0, kan = 0) {
        super(hath, pair, muh, dimag, name)
        this.ankh = ankh
        this.kan = kan
    }
    kyaDekhSktahai() {
        console.log(`${this.name}  Dekh skta hai`);
    }



    speak() {

        console.log("speaking...");
    }
}



class ironMan extends SuperHuman {

    constructor(hath = 0, pair = 0, muh = 0, dimag = 0, name = "human", ankh = 0, kan = 0, fly, run, fight) {
        super(hath, pair, muh, dimag, name, ankh, kan)
        this.fly = fly;
        this.run = run;
        this.fight = fight
    }

    isFlyable() {

        if (this.fly) {
            console.log(`${this.name} fly  kar skta hai`);
        }
        else {
            console.log(`${this.name} run  kar skta hai`);
        }

    }


}
let arr=[8,2,3,4,5,6,7,8,9,10,11]
let vishal = new Human(arr,2, 2, 1, 1, "vishal");
vishal.speak()
let dev = new SuperHuman(2, 2, 1, 1, "dev");

dev.speak()

let mitu = new ironMan(2, 2, 1, 1, "mitu");
mitu.speak()


