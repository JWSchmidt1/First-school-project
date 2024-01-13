import gsap from "gsap";
import SubPolygons from "./PolygonMenu";

export default class OpenMenu {

    constructor(divInfo) {

        
        this.divinfo = divInfo;
        
        this.itemIndex = 2;
        this.mInterval;
        this.countOpen = -1;
        
        this.myBoolOpen = true;
        
    }; // END constructor
    
    get boolOpen() {
        
        return this.myBoolOpen;

    };

    openPolygons() {

        if(this.myBoolOpen) {
            
            this.myBoolOpen = false;
            
            this.mInterval = setInterval(() => {
                
                this.countOpen++;
                
                let honeyComb = document.querySelector("#none" + this.countOpen);
                honeyComb.style.opacity = 0;
                honeyComb.style.display = "block";
                
                this.divText = document.createElement('div');
                this.divText.className = "divText";
                this.divText.textContent = this.divinfo[this.countOpen];
                Window.divTextEmptyArray.push(this.divText);
                
                honeyComb.appendChild(this.divText);
                
                gsap.to(honeyComb, {
                    duration: .3,
                    opacity: 1,
                    scaleX: 1,
                    scaleY: 1,
                    transformOrigin: "center",
                    ease: "slow",
                });
                
                honeyComb.addEventListener("click", (event) => {
                    
                    this.itemIndex = event.currentTarget.id.substr(4,4);
                    
                    this.subHexModule = new SubPolygons(this.itemIndex);
                    
                    if(this.itemIndex == 3) {
                        window.open("https://www.linkedin.com/in/jannick-winther-schmidt-657373238/");
                    }else {
                        this.subHexModule.openModule(); 
                    }
                    
                });
                
                if(this.countOpen == 5) {
                    this.countOpen = -1;
                    this.myBoolOpen = true;
                    clearInterval(this.mInterval);
                };
            }, 100);
        };
    };
    
}; // END class