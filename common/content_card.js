
class ContentCard extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow( { mode: 'open' } );
        this.shadowRoot.innerHTML = `
        <style>
            .flip-card {
            background-color: transparent;
            width: 300px;
            height: 300px;
            perspective: 1000px;
            margin: 10px;
        }

        .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }

        .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
        }

        .flip-card-front {
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: center;
            background-color: #dcd5d557;
            color: black;
        }

        .flip-card-back {
            background-color: rgba(77, 76, 76, 0.288);
            color: white;
            transform: rotateY(180deg);
        }


        .card_button {
            padding: 5px 0px;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 300px;
            height: 40px;
            background-color: rgb(77, 76, 76);
            border: none;
            text-align: center;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
        }

        .card_button span.arrow-right {
            background: url("img/arrow_right.png") no-repeat;
            width: 30px;
            height: 30px;
        }

        .card_button span.text {
            text-align: center;
            color: white;
            font-size: 15px;
            font-weight: bold;
            margin-right: 165px;
        }

        .flip-card-back ul {
            list-style-type: none;
            padding: 0;
        }

        .flip-card-back li {
            border-bottom: 1px solid white;
        }
      </style>
      
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">

                <img class="content-image" src="" alt="Blockchain" style="width:300px;height:250px;">
                <p class="content-title" style="height: 50px;font-size: 14px;"></p>
            </div>
            <div class="flip-card-back">
                <ul>
                    <li>
                        <h4 class="content-subtitle"></h3>
                    </li>
                    <li>
                        <h5 class="content-language"></h5>
                    </li>
                </ul>

                <a class="card_button" href="" target="_blank">
               <span class="text">Detail</span><span
                        class="arrow-right"></span>
                </a>
            </div>
        </div>
    </div>

    </div>`;
    }

    connectedCallback ()
    {

    }
    static get observedAttributes ()
    {
        return [ "image", "title", "subtitle", "language", "content-link" ];
    }



    attributeChangedCallback ( name, oldValue, newValue )
    {
        switch ( name )
        {
            case 'image':
                this.shadowRoot.querySelector( '.content-image' ).src = newValue;
                break;
            case 'title':
                this.shadowRoot.querySelector( '.content-title' ).innerText = newValue;
                break;
            case 'subtitle':
                this.shadowRoot.querySelector( '.content-subtitle' ).innerText = newValue;
                break;
            case 'language':
                this.shadowRoot.querySelector( '.content-language' ).innerText = newValue;
                break;
            case 'content-link':

                this.shadowRoot.querySelector( '.card_button' ).href = newValue;
                break;
        }
    }
}
customElements.define( 'content-card', ContentCard );