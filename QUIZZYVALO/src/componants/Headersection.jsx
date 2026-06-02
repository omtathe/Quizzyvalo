import './HeaderSection.css'

export function HeaderSection() {
    return(
        <>
         <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
       
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div id="Logo" style={{ width: '40px', height: '40px', backgroundColor: 'gray', marginRight: '10px' }}></div>
            <h1>Quizzyvalo</h1>
        </div>

  
        <div id="profile" style={{ cursor: 'pointer' }}>
            <h3>Login</h3>
        </div>
    </header>

    <div id="info-games" className="info-games-button">

        <button><a href="#guns-section" className="button-text">AGENT</a></button>


        <button><a href="#map-section" className="button-text">MAP</a></button>


        <button><a href="#weapon-section" className="button-text">Weapon</a></button>

    </div>
        </>
    )
}