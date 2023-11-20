
class HomeComponent extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow( { mode: 'open' } );
        this.shadowRoot.innerHTML =
            `
            <style>
            .row {
                margin-top: 10px;
                margin-left: 20px;
                display: flex;
                flex-direction: row;
                justify-content: start;
                align-items: center;
            }

            .half-of-screensize-div {
                height: auto;
                width: 50%;
            }
            .title {
                color: navy;
                margin-left: 20px;
                font-weight: bold;
                font-size: 30px;
            }

            .sub-title {
                color: navy;
                font-weight: bold;
                margin-left: 20px;
                font-size: 25px;
            }
            .button {
                margin-left: 20px;
                background-color: navy;
                border: none;
                color: white;
                padding: 15px 35px;
                text-align: center;
                text-decoration: none;
                display: flex;
                font-size: 16px;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                border-radius: 10px;
            }

            .button span.arrow-down {
                background: url("img/arrow_down.png") no-repeat;
                /* float: right; */
                margin-left: 10px;
                width: 20px;
                height: 20px;

            }

            .button span.text {
                font-size: 15px;
                font-weight: bold;
                margin-right: 10px;
            }

            .profile-chip {
                border-radius: 50%;
                background-color: white;
                margin-right: 15px;
                float: right;
                height: 50%;
                width: 50%;
            }
            </style>
            <div class="row">

            <div class="half-of-screensize-div">
                <p class="title">Hi There,</p>
                <p class="title"> I am Win Lin <span style="color: gold;"> Aung</span></p>
                <p class="sub-title"> I am a Software <span style="color: brown;"> Engineer</span></p>
                <p class="sub-title"><span style="color: #708090;">winlinaung2813@gmail.com</span></p>
                <button class="button" onclick="showAboutMe()"><span class="text">About Me</span><span
                        class="arrow-down"></span></button>
            </div>
            <div class="half-of-screensize-div">
                <img class="profile-chip" src="img/me.jpeg">
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
customElements.define( 'home-component', HomeComponent );