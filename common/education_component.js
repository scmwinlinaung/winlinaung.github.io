const educationTemplate = document.createElement( 'template' );
educationTemplate.innerHTML = `
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
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.5);
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
</style>
<div class="column">
<p class="title">Education</p>
<div class="left-border-box">
    <div class="row">
    <li></li>
        <div class="div-border-bottom"></div>
            <div class="card">
                                            
                <div class="container">
                    <p class="heading1">Bachelor of Information Science<span class="heading2"> from Yatanarpon Cyber City</span></p>
                    <h3>2012 - 2018</h3>
                    <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                </div>
            </div>
        </div>

        <div class="row">
        <li></li>
            <div class="div-border-bottom"></div>
                <div class="card">
                                                
                    <div class="container">
                        <p class="heading1">Taxila Institute</p>
                        <h3>2018</h3>
                        <p>Career Readiness And Professional Development Certificate</p>
                    </div>
                </div>
            </div>
    


    </div>

    <p class="title">Licenses & Education</p>
<div class="left-border-box">
    <div class="row">
    <li></li>
        <div class="div-border-bottom"></div>
            <div class="card">
                                            
                <div class="container">
                    <p class="heading1">Udemy</p>
                    <h3>2022 April</h3>
                    <p>Metaverse Masterclass-Learn Everything about the metaverse</p>
                </div>
            </div>
        </div>

        <div class="row">
        <li></li>
            <div class="div-border-bottom"></div>
                <div class="card">
                                                
                    <div class="container">
                        <p class="heading1">Udemy</p>
                        <h3>2021 September</h3>
                        <p>Learn blockchain by building your own in javascript</p>
                    </div>
                </div>
            </div>

            <div class="row">
            <li></li>
                <div class="div-border-bottom"></div>
                    <div class="card">
                                                    
                        <div class="container">
                            <p class="heading1">Udemy</p>
                            <h3>2021 January</h3>
                            <p>Basic swift programming and ios</p>
                        </div>
                    </div>
                </div>

    </div>
</div>
`
class Education extends HTMLElement
{
    constructor()
    {
        super();
    }

    connectedCallback ()
    {
        const shadowRoot = this.attachShadow( { mode: 'closed' } );

        shadowRoot.appendChild( educationTemplate.content );
    }


}
customElements.define( 'eduaction-component', Education );