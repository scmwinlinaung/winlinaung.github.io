
class SkillComponent extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow( { mode: 'open' } );
        this.shadowRoot.innerHTML =
            `
            <style>
            .column {
                margin-top: 10px;
                margin-left: 20px;
                display: flex;
                flex-direction: column;
                justify-content: start;
                align-items: start;
            }
            .skill-info-row {

                margin-top: 5px;
                margin-left: 20px;
                display: flex;
                flex-direction: row;
                justify-content: start;
                align-items: center;
            
            }
            .seventy-percentage-of-screensive-div {
                height: auto;
                width: 70%;
            }

            .thirty-percentage-of-screensive-div {
                height: auto;
                width: 30%;
            }
            .profile-chip {
                border-radius: 50%;
                background-color: white;
                margin-right: 15px;
                float: right;
                height: 50%;
                width: 50%;
            }

            .skill-card-row {
                margin: 10px;
                display: flex;
                flex-direction: row;
                justify-content: start;
                align-items: center;
                flex-wrap: wrap;
            }

            .skill-card-column {
                margin: 10px;
                display: flex;
                flex-direction: column;
                justify-content: start;
                align-items: start;
                flex-wrap: wrap;
            }
            .special-p {
                letter-spacing: 1.3px;
                font-size: 18px;
                line-height: 1.5;
                word-spacing: 1.3px;
            }
                        
            </style>
            <div class="column">
            <div class="skill-info-row">
                <div class="seventy-percentage-of-screensive-div">
                <p class="special-p">5 years experienced Senior Developer with a demonstrated history of working in the information technology and services industry. Skilled in Flutter, java, blockchain,web3js,solidity, javascript and CI/CD tools and docker. Strong engineering professional with a Bachelor of Information Science focused in Information Science from Universuty of Technology(Yatanarpon Cyber City).</p>
                </div>
                <div class= "thirty-percentage-of-screensive-div">
                <img class="profile-chip" src="img/me.jpeg"></img>
                </div>
                </div>
            </div>
        
            <div class="skill-card-row">
                
                <skill-card title="Blockchain" subtitle="3 years, 2 Projects"></skill-card>
                <skill-card title="Docker" subtitle="2 years, 2 Projects"></skill-card>
                <skill-card title="Flutter" subtitle="5 years, 2 Projects"></skill-card>
                <skill-card title="Javascript" subtitle="5 years, 5 Projects"></skill-card>
                <skill-card title="Java" subtitle="4 years, 2 Projects"></skill-card>
                <skill-card title="Mongodb" subtitle="2 years, 3 Projects"></skill-card>
                <skill-card title="Postgresql" subtitle="4 years, 2 Projects"></skill-card>
                <skill-card title="React" subtitle="4 years, 2 Projects"></skill-card>
                <skill-card title="Solidity" subtitle="2 years, 1 Projects"></skill-card>
                <skill-card title="Web3" subtitle="2 years, 2 Projects"></skill-card>
            </div>
            `
    }

    // connectedCallback ()
    // {
    //     const shadowRoot = this.attachShadow( { mode: 'open' } );

    //     shadowRoot.appendChild( educationTemplate.content );
    // }


}
customElements.define( 'skill-component', SkillComponent );