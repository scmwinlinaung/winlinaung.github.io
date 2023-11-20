
class SocialMediaRow extends HTMLElement
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
                margin-left: 30px;
                display: flex;
                flex-direction: row;
                justify-content: start;
                align-items: center;
            }
            .chip {
                display: inline-block;
                height: 40px;
                width: 40px;
                border-radius: 50%;
                background-color: rgba(132, 156, 138, 0.487);
                margin-right: 15px;
            }

            .chip span.linkedin {
                background: url("img/linkedin.png") no-repeat;
                width: 30px;
                height: 30px;
                float: left;
                margin: 5px 5px 5px 5px;
                border-radius: 50%;

            }

            .chip span.github {
                background: url("img/github.png") no-repeat;
                width: 30px;
                height: 30px;
                float: left;
                margin: 5px 5px 5px 5px;
                border-radius: 50%;

            }

            .chip span.discord {
                background: url("img/discord.png") no-repeat;
                width: 30px;
                height: 30px;
                float: left;
                margin: 5px 5px 5px 5px;
                border-radius: 50%;

            }

            .chip span.telegram {
                background: url("img/telegram.png") no-repeat;
                width: 30px;
                height: 30px;
                float: left;
                margin: 5px 5px 5px 5px;
                border-radius: 50%;

            }



            </style>

            <div class="row"><a href="https://www.linkedin.com/in/win-linaung-36024a168" target="_blank">
            <div class="chip">
                <span class="linkedin"></span>

            </div>
        </a>
        <a href="https://github.com/scmwinlinaung" target="_blank">
            <div class="chip">
                <span class="github"></span>
            </div>
        </a>
        <a href="https://discordapp.com/users/Win#1737" target="_blank">
            <div class="chip">
                <span class="discord"></span>
            </div>
        </a>
        <a href="https://t.me/winlinaung" target="_blank">
            <div class="chip">
                <span class="telegram"></span>
            </div>
        </a>
    </div>
            `
    }

    // connectedCallback ()
    // {
    //     const shadowRoot = this.attachShadow( { mode: 'open' } );

    //     shadowRoot.appendChild( educationTemplate.content );
    // }


}
customElements.define( 'social-media-row', SocialMediaRow );