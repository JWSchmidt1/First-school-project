import gsap from "gsap";
import data from "./WebContent.json"

export default class PolygonMenu {

    constructor(itemindex) {

        this.itemindex = itemindex;

        this.webcontents = data;

        this.subHexContainer = document.querySelector(".subHexContainer");
        this.subHexContent = document.querySelector(".subHexContent");
        this.closeSubHex = document.querySelector(".closeSubHex");

    }; // END constructor

    openModule() {

        let innerCursor = document.querySelector(".cursor")
        innerCursor.style.color = "white";

        this.subHexContainer.style.display = "block";
        this.subHexContent.style.display = "grid";
        this.closeSubHex.style.display = "block";

        if(this.itemindex == 0) {
            this.subHexContent.style.display = "block";
            this.subHexContent.style.width = "50%";
            this.subHexContent.innerHTML = `<h2 class='subHexContentHeadings'>${this.webcontents.headings[this.itemindex]}</h2>`;
            this.subHexContent.innerHTML += `<div class='subHexContentText'><img class='cvImg' src='${this.webcontents.modalContent.img[this.itemindex]}'/><h2 class='cvH2'>${this.webcontents.modalContent.subHeadings[this.itemindex]}</h2></div>`;
        };
        if(this.itemindex == 1) {
            this.subHexContent.style.display = "block";
            this.subHexContent.style.width = "50%";
            this.subHexContent.innerHTML = `<h2 class='subHexContentHeadings'>${this.webcontents.headings[this.itemindex]}</h2>`;
            this.subHexContent.innerHTML += `<div class='subHexContentText'><img class='omMigImg' src='${this.webcontents.modalContent.img[this.itemindex]}'/>${this.webcontents.modalContent.text[this.itemindex]}</div>`;
        };
        if(this.itemindex == 2) {
            this.subHexContent.innerHTML = `<h2 class='subHexContentHeadings'>${this.webcontents.headings[this.itemindex]}</h2>`;
            for(let i = 0; i < 9; i++) {
                this.subHexContent.style.width = "80%";
                this.subHexContent.style.gridTemplateColumns = "1fr 1fr 1fr";
                this.portfolioImgLink = document.createElement('a');
                this.portfolioImgLink.className = "portfolioImgLink" + i;
                this.portfolioImg = document.createElement('img');
                this.portfolioImg.className = "portfolioImg";
                this.portfolioImg.src = this.webcontents.portfolio[0].img[i];
                this.portfolioImgLink.href = this.webcontents.portfolio[0].href[i];
                this.portfolioImgLink.target = "_blank";
                this.portfolioImgLink.appendChild(this.portfolioImg);
                this.subHexContent.appendChild(this.portfolioImgLink);

                this.portfolioImgLink.addEventListener("mouseenter", () => {
                    innerCursor.style.color = "#ff3c3c";
                    gsap.to(innerCursor, {
                        duration: .5,
                        rotateZ: 45,
                    })
                });
                this.portfolioImgLink.addEventListener("mouseleave", () => {
                    innerCursor.style.color = "white";
                    gsap.to(innerCursor, {
                        duration: .5,
                        rotateZ: 0,
                    })
                });
            };
        };
        if(this.itemindex == 4) {
            this.subHexContent.style.display = "block";
            this.subHexContent.style.width = "50%";
            this.subHexContent.innerHTML = `<h2 class='subHexContentHeadings'>${this.webcontents.headings[this.itemindex]}</h2>`;
            this.subHexContent.innerHTML += `<div class='subHexContentText'><h2 class='subH2'>${this.webcontents.modalContent.subHeadings[this.itemindex]}</h2><br><p class='subSubHexContentText'>${this.webcontents.modalContent.text[this.itemindex]}</p></div>`;
        };
        if(this.itemindex == 5) {
            this.subHexContent.style.display = "block";
            this.subHexContent.style.width = "50%";
            this.subHexContent.innerHTML = `<h2 class='subHexContentHeadings'>${this.webcontents.headings[this.itemindex]}</h2>`;
            this.subHexContent.innerHTML += `<div class='subHexContentText'><h2 class='subH2'>${this.webcontents.modalContent.subHeadings[this.itemindex]}</h2><br><p class='subSubHexContentText'>${this.webcontents.modalContent.text[this.itemindex]}</p></div>`;
        };

        gsap.to(this.subHexContainer, {
            duration: 1,
            opacity: .9,
            ease: "slow"
        });

        gsap.to([this.subHexContent, this.closeSubHex], {
            duration: 1,
            alpha: 1,
            ease: "slow"
        });

        this.closeSubHex.addEventListener("click", (event) => {
            gsap.to([this.subHexContainer, this.subHexContent, this.closeSubHex], {
                duration: 1,
                opacity: 0,
                ease: "slow",
                onComplete:() => {
                    innerCursor.style.color = "black";
                    this.subHexContainer.style.display = "none";
                    this.subHexContent.style.display = "none";
                    this.closeSubHex.style.display = "none";
                    this.subHexContent.innerHTML = "";
                }
            });
        });

        document.addEventListener('keydown', (event) => {
            if (event.code == "Escape"){
                gsap.to([this.subHexContainer, this.subHexContent, this.closeSubHex], {
                    duration: 1,
                    opacity: 0,
                    ease: "slow",
                    onComplete:() => {
                        innerCursor.style.color = "black";
                        this.subHexContainer.style.display = "none";
                        this.subHexContent.style.display = "none";
                        this.closeSubHex.style.display = "none";
                        this.subHexContent.innerHTML = "";
                    }
                });
            };
        });

    }; // END openModule

}; // END class