
// class ContentDetail extends HTMLElement {
//     constructor() {
//         super();
//         this.attachShadow({ mode: 'open' });
//         this.shadowRoot.innerHTML = `
//             <style>
//             p {
//                 text-indent: 50px;
//                 letter-spacing: 3px;
//                 font-size: 22px;
//                 line-height: 1.8;
//                 word-spacing: 5px;
//             }
//             </style>
//             <p class="p1"></p>
//             <img src="" class="img1"></img>
//             <p class="p2"></p>
//             <img src="" class="img2"></img>
//           <p class="p3"></p>
//             <img src="" class="img3"></img>
//           <p class="p4"></p>
//             <img src="" class="img4"></img>
//        `;
//     }

//     connectedCallback() {

//     }
//     static get observedAttributes() {
//         return ["image", "title", "subtitle", "language", "content-link"];
//     }

//     attributeChangedCallback(name, oldValue, newValue) {
//         switch (name) {
//             case 'p1':
//                 this.shadowRoot.querySelector('.p1').innerText = newValue;
//                 break;
//             case 'p2':
//                 this.shadowRoot.querySelector('.p2').innerText = newValue;
//                 break;
//             case 'p3':
//                 this.shadowRoot.querySelector('.p3').innerText = newValue;
//                 break;
//             case 'p4':
//                 this.shadowRoot.querySelector('.p4').innerText = newValue;
//                 break;
//             case 'img1':
//                 this.shadowRoot.querySelector('.img1').src = newValue;
//                 break;
//             case 'img2':
//                 this.shadowRoot.querySelector('.img2').src = newValue;
//                 break;
//             case 'img3':
//                 this.shadowRoot.querySelector('.img3').src = newValue;
//                 break;
//             case 'img4':
//                 this.shadowRoot.querySelector('.img4').src = newValue;
//                 break;
            
//         }
//     }
// }
// customElements.define('content-detail', ContentDetail);