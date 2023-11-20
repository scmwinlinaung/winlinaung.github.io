
class ContentComponent extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow( { mode: 'open' } );
        this.shadowRoot.innerHTML =
            `
            <div style="display: flex; align-items: center; justify-content: start; flex-wrap: wrap;flex-director: row ">
            <content-card image="img/metaverse.webp" title="Metaverse ဒေသနာတော်များ အပိုင်း ( ၁ )" subtitle="Web3" language="" content-link="content/lesson_four.html"></content-card>
            <content-card image="img/smartcontract.jpeg" title="Blockchain အကြောင်းသောင်းပြောင်းထွေလာအပိုင်း( ၁ )" subtitle="Blockchain" language="Javascrip" content-link="content/lesson_one.html"></content-card>

                        <content-card image="img/smartcontract.jpeg" title="Blockchain အကြောင်းသောင်းပြောင်းထွေလာအပိုင်း( ၂ )"
                                        subtitle="Blockchain" language="Javascrip"  content-link="content/lesson_two.html"></content-card>


                        <content-card image="img/web3.webp" title="Web 1.0, Web 2.0 and Web 3.0"
                                        subtitle="Web3" language="" content-link="content/lesson_three.html"></content-card>

                        <content-card image="img/smartcontract.jpeg" title="Difference between ERC 20 and ERC 721 ( part 1 )"
                                        subtitle="Smart Contract" language="" content-link="content/lesson_five.html"></content-card>

                        <content-card image="img/design_pattern.webp" title="What is the Adapter Design Pattern?"
                                        subtitle="Design Pattern" language="Java" content-link="content/lesson_six.html"></content-card>

                        <content-card image="img/design_pattern.webp" title="What is the observer design pattern ?"
                                        subtitle="Design Pattern" language="Java" content-link="content/lesson_seven.html"></content-card>
                        <content-card image="img/design_pattern.webp" title="What is the factory design pattern ?"
                                        subtitle="Design Pattern" language="Java" content-link="content/lesson_eight.html"></content-card>
                        <content-card image="img/design_pattern.webp" title="What is the bridge design pattern ?"
                                        subtitle="Design Pattern" language="Java" content-link="content/lesson_nine.html"></content-card>
                                        <content-card image="img/design_pattern.webp" title="What is the singleton design pattern ?"
                                        subtitle="Design Pattern" language="Java" content-link="content/lesson_ten.html"></content-card>
                        </div>
            `
    }

    // connectedCallback ()
    // {
    //     const shadowRoot = this.attachShadow( { mode: 'open' } );

    //     shadowRoot.appendChild( educationTemplate.content );
    // }


}
customElements.define( 'content-component', ContentComponent );