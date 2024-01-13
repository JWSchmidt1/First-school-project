import Open from "./OpenMenu";
import Close from "./CloseMenu";
import SubPolygons from "./PolygonMenu";
import data from "./WebContent.json"
import svg from "../assets/close.svg";
import gsap from "gsap";

export default class Polygon {

    constructor() {

        this.webcontent = data;
        
        this.myNameCon = document.createElement('div');
        this.myNameCon.id = "myNameCon";
        document.body.appendChild(this.myNameCon);

        this.wrapper = document.createElement('div');
        this.wrapper.id = `${this.webcontent.idnames[2]}`;
        this.wrapper.className = `${this.webcontent.classnames[4]}`;
        document.body.appendChild(this.wrapper);
        
        this.openHex = document.createElement('div');
        this.openHex.id = `${this.webcontent.idnames[1]}`;
        this.openHex.className = `${this.webcontent.classnames[1]}`;
        this.wrapper.appendChild(this.openHex);
        this.openHexInner = document.createElement('div');
        this.openHexInner.className = `${this.webcontent.classnames[3]}`;
        this.openHexInner.textContent = "open";
        this.openHex.appendChild(this.openHexInner);
        
        this.closeHex = document.createElement('div');
        this.closeHex.id = `${this.webcontent.idnames[3]}`;
        this.closeHex.className = `${this.webcontent.classnames[1]}`;
        this.wrapper.appendChild(this.closeHex);
        this.closeInnerHex = document.createElement('div');
        this.closeInnerHex.className = `${this.webcontent.classnames[3]}`;
        this.closeInnerHex.textContent = "close";
        this.closeHex.appendChild(this.closeInnerHex);
        
        this.subHexContainer = document.createElement('div');
        this.subHexContainer.className = "subHexContainer";
        document.body.appendChild(this.subHexContainer);
        
        this.subHexContent = document.createElement('div');
        this.subHexContent.className = "subHexContent";
        document.body.appendChild(this.subHexContent);
        
        this.closeSubHex = document.createElement('div');
        this.closeSubHex.className = "closeSubHex";
        this.closeSubHex.innerHTML = `<img src='${svg}'/>`;
        document.body.appendChild(this.closeSubHex);
        
        this.SubPolygons = new SubPolygons(this.subHexContainer, this.subHexContent, this.closeSubHex);
        
        for(let i = 0; i < 6; i++) {
            
            this.innerWrapper = document.createElement('div');
            this.innerWrapper.id = `${this.webcontent.idnames[0]}` + i;
            this.innerWrapper.className = `${this.webcontent.classnames[0]}`;
            this.wrapper.appendChild(this.innerWrapper);
            
        }
        
        Window.divTextEmptyArray = [];
        
        let divTextArray = this.webcontent.headings;
        
        let open = document.querySelector("#open");
        
        let close = document.querySelector("#close");
        close.style.display = "none";
        close.style.color = "white";
        
        this.openModule = new Open(divTextArray);
        this.closeModule = new Close(divTextArray);

        open.addEventListener("click", () => {

            if(open.style.display = "block" && this.closeModule.boolClose) {

                this.openModule.openPolygons();
                open.style.display = "none";
                close.style.display = "block";

            };

        });
        
        close.addEventListener("click", () => {

            if(close.style.display = "block" && this.openModule.boolOpen) {

                this.closeModule.closePolygons();   
                close.style.display = "none";
                open.style.display = "block";

            };

        });
                
        window.addEventListener("load", () => {
                    
            this.letterCount = -1;
                    
            this.lInterval = setInterval(() => {
                        
                this.letterCount++
                        
                this.myName = document.createElement('span');
                this.myName.className = "letter";
                this.myName.id = "letter" + this.letterCount;
                this.myName.textContent = this.webcontent.myNameLetters[this.letterCount];
                this.myNameCon.appendChild(this.myName);
                        
                gsap.to(this.myName, { 

                    duration: 1,
                    x: this.letterCount * 18, 

                });
                        
                if(this.letterCount == 22) {

                    clearInterval(this.lInterval)

                };
                        
            }, 50);
                    
        });

    }; // END constructor

}; // END class