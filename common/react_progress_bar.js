
class ReactProgressBar extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow( { mode: 'open' } );
        this.shadowRoot.innerHTML = `
        <style>
        /* Stylingthe last h2 tag by giving margin bottom */
        .progress-bar-container:not(:last-child) {
            margin-bottom: 50px;
        }
 
        /* Styling the h2 tag by giving color, 
        letter spacing, font-size etc.*/
        .progress-bar-container h2 {
            font-family: Arial, Helvetica, sans-serif;
            color: #eee;
            letter-spacing: 1px;
            font-size: 20px;
        }
        .percentage {
            display: block;
            height: 100%;
            background-color: #708090;
            border-radius: 5px;
            animation: progress 2000ms ease-in 1;
            width: 80%
        
        }
 
        /* Styling the border and box
        effect of the progress bar*/
        .progress-bar {
            width:100%;
            height: 15px;
            margin-top: 10px;
            border: 1px solid #565656;
            border-radius: 5px;
        }
 
        /* Stylingthe background color of each 
        animation and border radius */

        
        /* Animating the progress bar by 
        initially starting from 0*/
        @keyframes progress {
            from {
                width: 0;
            }
        }
      </style>
   
      <div class="progress-bar-container">

          <div class="progress-bar">
              <span class="percentage" ></span>
          </div>
      </div>

 `;
    }

}
customElements.define( 'react-progress-bar', ReactProgressBar );