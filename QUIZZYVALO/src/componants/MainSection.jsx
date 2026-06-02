import './MainSection.css'

export function MainSection() {
    return (
        <>
            <div className="games" id="games">

                
                <section className="agent-section" id="agent-section">
                   <div className="Quest">
                        <p>Question number:1</p><img src="images/ability/breachability.png" alt="" />
                            <p>Guess agent based of ability</p>
                    </div>
                    <div className="options">
                        <div style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }}><img src="images/agents/1.png" alt="" /></div>
                        <div style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }}><img src="images/agents/breach.png" alt="" />
                        </div>
                        <div style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }}><img src="images/agents/brimstone.png" alt="" />
                        </div>
                        <div style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }}><img src="images/agents/chamber.png" alt="" />
                        </div>
                    </div>
                    <button>Gussed</button>
                </section>

                
                <section className="map-section" id="map-section">
                    <div className="Quest">
                        <p>Question number:1</p><img src="images/maps/question.png" alt="" />
                            <p>Guess map based of this image</p>
                    </div>
                    <div className="options">
                        <div style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }}><img src="images/maps/Ascent.png" alt="" /></div>
                        <div style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }}><img src="images/maps/bind.png" alt="" /></div>
                        <div style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }}><img src="images/maps/corrode.png" alt="" /></div>
                        <div style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }}><img src="images/maps/heaven.png" alt="" /></div>
                    </div>
                    <button>Gussed</button>
                </section>

               
                <section className="weapon-section" id="weapon-section">
                  <div className="Quest">
                        <p>Question number:1</p><img src="images/guns/classicskin.png" alt="" />
                            <p>Guess gun based of gunskin</p>
                    </div>
                    <div className="options">
                        <div style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }}><img src="images/guns/bulldog.png" alt="" /></div>
                        <div style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }}><img src="images/guns/classic.png" alt="" /></div>
                        <div style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }}><img src="images/guns/phantom.png" alt="" /></div>
                        <div style={{ flex: 1, textAlign: 'center', cursor: 'pointer' }}><img src="images/guns/vandel.png" alt="" /></div>
                    </div>
                    <button>Gussed</button>
                </section>

            </div>
        </>
    )
}