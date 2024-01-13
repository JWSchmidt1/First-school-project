import gsap from "gsap";

export default class MyCursor {
    
    constructor() {

        this.cursor = document.createElement('div');
        this.cursor.className = "cursor";
        document.body.appendChild(this.cursor);

        this.closeSubHex = document.querySelector(".closeSubHex");

        let open = document.querySelector("#open");
        let close = document.querySelector("#close");

        let innerCursor = document.querySelector(".cursor");
        let innerCursorWidth = innerCursor.getBoundingClientRect();
        let fl_w = innerCursorWidth.width;                          
        let fl_h = innerCursorWidth.height;
        document.addEventListener("mousemove", (e) => {
            let x = e.pageX;
            let y = e.pageY;
            let mX = x - fl_w / 2;
            let mY = y - fl_h / 2;
            document.querySelector(".cursor").style.top = mY+"px";
            document.querySelector(".cursor").style.left = mX+"px";
        });

        open.addEventListener("mouseenter", () => {
            open.style.color = "#59fb59";
            gsap.to(innerCursor, {
                duration: .5,
                rotateZ: 45,
            })
            
        });

        open.addEventListener("mouseleave", () => {
            open.style.color = "white";
            gsap.to(innerCursor, {
                duration: .5,
                rotateZ: 0,
            })
        });

        close.addEventListener("mouseenter", () => {
            close.style.color = "#ff3c3c";
            gsap.to(innerCursor, {
                duration: .5,
                rotateZ: 45,
            })
        });

        close.addEventListener("mouseleave", () => {
            close.style.color = "white";
            gsap.to(innerCursor, {
                duration: .5,
                rotateZ: 0,
            })
        });

        this.closeSubHex.addEventListener("mouseenter", () => {
            innerCursor.style.color = "#ff3c3c";
            gsap.to(innerCursor, {
                duration: .5,
                rotateZ: 45,
            })
        });

        this.closeSubHex.addEventListener("mouseleave", () => {
            innerCursor.style.color = "white";
            gsap.to(innerCursor, {
                duration: .5,
                rotateZ: 0,
            })
        });
        
        for(let i = 0; i < 6; i++) {

            let honeyComb = document.querySelector("#none" + i);
            
            honeyComb.addEventListener("mouseenter", () => {
                honeyComb.style.color = "lightgreen";
                gsap.to(innerCursor, {
                    duration: .5,
                    rotateZ: 45,
                })
            });
    
            honeyComb.addEventListener("mouseleave", () => {
                honeyComb.style.color = "white";
                gsap.to(innerCursor, {
                    duration: .5,
                    rotateZ: 0,
                })
            });
            
        };

    }; // END constructor

}; // END class