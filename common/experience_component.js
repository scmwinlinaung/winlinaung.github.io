
class ExperienceComponent extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow( { mode: 'open' } );
        this.shadowRoot.innerHTML =
            `
            <style>
            .title {
                color: navy;
                margin-left: 20px;
                font-weight: bold;
                font-size: 30px;
            }

            .heading1 {
                font-weight: bold;
                font-size: 30px;
            }

            .heading2 {
            
                font-size: 25px;
                font-weight: 200;
            }

            .column {
                margin-top: 10px;
                margin-left: 20px;
                display: flex;
                flex-direction: column;
                justify-content: start;
                align-items: start;
            }

            .row {
                display: flex;
                flex-direction: row;
                justify-content: start;
                align-items: center;
            }
            .left-border-box {

                margin-left: 20px;
                border-left: 0.5px solid grey;
            }

            .div-border-bottom{
                margin-left: 7px;
                width: 40px;
                border-bottom: 2px solid #967BB6;
            }

            .card {
                width:  85vw;
                box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
                border-left: 3px solid #967BB6;
                margin-bottom: 25px;
                margin-right: 10px;
            }


            /* Add some padding inside the card container */
            .container {
                background: white;
                padding: 15px 16px;

            }
            li {

                position: absolute;
                left: 43px;
            }
            li::marker {
                color: #967BB6;
                font-size: 2.5em;
                font-weight: bold;
            }
            .chip {
                display: inline-block;
                padding: 0 25px;
                height: 50px;
                font-size: 16px;
                line-height: 50px;
                border-radius: 25px;
                background-color: #f1f1f1;
              }
              
            </style>
            <div class="column">
            <p class="title">Experience</p>
            <div class="left-border-box">
                <div class="row">
                <li></li>
                    <div class="div-border-bottom"></div>
                        <div class="card">
                                                        
                            <div class="container">
                                <p class="heading1">Software Engineer<span class="heading2"> at Immin Pte.Ltd</span></p>
                                <h3>2020 January - Present</h3>
                                <p class="chip">Solidity</p> <p class="chip">Web3</p> <p class="chip">Blockchain</p>
                                <p class="chip">React</p> <p class="chip">Flutter</p> <p class="chip">Java</p>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                    <li></li>
                        <div class="div-border-bottom"></div>
                            <div class="card">
                                                            
                                <div class="container">
                                    <p class="heading1">Mobile Developer<span class="heading2"> at Seattle Consulting Myanmar Co., Ltd.</span></p>
                                    <h3>2018 December - 2020 January</h3>
                                    <p class="chip">Ionic Framework</p>  <p class="chip">Angular</p>  <p class="chip">Javascript</p>
                                </div>
                            </div>
                        </div>
                


                </div>

             

                </div>
            </div>
            `
    }

    // connectedCallback ()
    // {
    //     const shadowRoot = this.attachShadow( { mode: 'open' } );

    //     shadowRoot.appendChild( educationTemplate.content );
    // }


}
customElements.define( 'experience-component', ExperienceComponent );