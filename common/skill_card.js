const style = ` <style>
.card {
    /* Add shadows to create the "card" effect */
   
    transition: 0.3s;
  }
  
  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 5px 10px 0 rgba(0,0,0,0.5);
  }
  
  /* Add some padding inside the card container */
  .container {
    background: white;
    padding: 10px 16px;
    margin-left: 10px;
  }
</style>
`

class SkillCard extends HTMLElement
{
  constructor()
  {
    super();
    this.attachShadow( { mode: 'open' } );
    this.shadowRoot.innerHTML = style;
  }

  static get observedAttributes ()
  {
    return [ "title", "subtitle" ];
  }



  attributeChangedCallback ( name, oldValue, newValue )
  {
    switch ( name )
    {

      case 'title':

        switch ( newValue )
        {
          case 'Blockchain':
            this.shadowRoot.innerHTML = style + `  <div class="card">
            <div class="container">
              <h4><b class ="content-title"></b></h4>
              <p class="content-subtitle"></p>
              <blockchain-progress-bar></blockchain-progress-bar>
            </div>
          </div>
          `;
            break;
          case 'Docker':
            this.shadowRoot.innerHTML = style + `  <div class="card">
            <div class="container">
              <h4><b class ="content-title"></b></h4>
              <p class="content-subtitle"></p>
              <docker-progress-bar></docker-progress-bar>
            </div>
          </div>
          `;
            break;
          case 'Flutter':
            this.shadowRoot.innerHTML = style + `  <div class="card">
            <div class="container">
              <h4><b class ="content-title"></b></h4>
              <p class="content-subtitle"></p>
              <flutter-progress-bar></flutter-progress-bar>
            </div>
          </div>
          `;
            break;
          case 'Javascript':
            this.shadowRoot.innerHTML = style + `  <div class="card">
            <div class="container">
              <h4><b class ="content-title"></b></h4>
              <p class="content-subtitle"></p>
              <javascript-progress-bar></javascript-progress-bar>
            </div>
          </div>
          `;
            break;
          case 'Java':
            this.shadowRoot.innerHTML = style + `  <div class="card">
              <div class="container">
                <h4><b class ="content-title"></b></h4>
                <p class="content-subtitle"></p>
                <java-progress-bar></java-progress-bar>
              </div>
            </div>
            `;
            break;
          case 'Mongodb':
            this.shadowRoot.innerHTML = style + `  <div class="card">
            <div class="container">
              <h4><b class ="content-title"></b></h4>
              <p class="content-subtitle"></p>
              <mongodb-progress-bar></mongodb-progress-bar>
            </div>
          </div>
          `;
            break;
          case 'Postgresql':
            this.shadowRoot.innerHTML = style + `  <div class="card">
            <div class="container">
              <h4><b class ="content-title"></b></h4>
              <p class="content-subtitle"></p>
              <postgresql-progress-bar></postgresql-progress-bar>
            </div>
          </div>
          `;
            break;
          case 'React':
            this.shadowRoot.innerHTML = style + `  <div class="card">
            <div class="container">
              <h4><b class ="content-title"></b></h4>
              <p class="content-subtitle"></p>
              <react-progress-bar></react-progress-bar>
            </div>
          </div>
          `;
            break;
          case 'Solidity':
            this.shadowRoot.innerHTML = style + `  <div class="card">
              <div class="container">
                <h4><b class ="content-title"></b></h4>
                <p class="content-subtitle"></p>
                <solidity-progress-bar></solidity-progress-bar>
              </div>
            </div>
            `;
            break;
          case 'Web3':
            this.shadowRoot.innerHTML = style + `  <div class="card">
                <div class="container">
                  <h4><b class ="content-title"></b></h4>
                  <p class="content-subtitle"></p>
                  <web3-progress-bar></web3-progress-bar>
                </div>
              </div>
              `;
            break;

        }
        this.shadowRoot.querySelector( '.content-title' ).innerText = newValue;
        break;
      case 'subtitle':
        this.shadowRoot.querySelector( '.content-subtitle' ).innerText = newValue;
        break;

    }
  }

}
customElements.define( 'skill-card', SkillCard );