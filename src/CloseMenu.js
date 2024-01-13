import gsap from "gsap";

export default class CloseMenu {

    constructor(divInfo) {

        this.divinfo = divInfo;

        this.eInterval;
        this.countClose = -1;

        this.myBoolClose = true;

    }; // END constructor

    get boolClose() {

        return this.myBoolClose;

    };

    closePolygons() {

        if(this.myBoolClose) {

            this.myBoolClose = false;

            this.eInterval = setInterval(() => {

                this.countClose++;

                let honeyComb = document.querySelector("#none" + this.countClose);

                honeyComb.removeChild(Window.divTextEmptyArray[this.countClose]);

                honeyComb.style.opacity = 1;

                gsap.to(honeyComb, {
                    duration: .3,
                    scaleX: 0,
                    scaleY: 0,
                    opacity: 0,
                    transformOrigin: "center",
                    ease: "slow",
                    onComplete:() => {
                        honeyComb.style.display = "none";
                    }
                });

                if(this.countClose == 5) {
                    this.countClose = -1;
                    this.myBoolClose = true;
                    Window.divTextEmptyArray = [];
                    clearInterval(this.eInterval);
                };
            }, 100);
        };
    };

}; // END class