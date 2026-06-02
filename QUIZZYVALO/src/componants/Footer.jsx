import './Footer.css'
export function Footer(){
    return(
        <>
         <footer style={{ width: '100vw', padding: '20px', backgroundColor: '#222', color: '#fff', textAlign: 'center' }}>
        
        <div style={{ marginBottom: '15px' }}>
            <span style={{ margin: '0 10px' }}>[Instagram Logo]</span>
            <span style={{ margin: '0 10px' }}>[Facebook Logo]</span>
            <span style={{ margin: '0 10px' }}>[Twitter Logo]</span>
            <span style={{ margin: '0 10px' }}>[YouTube Logo]</span>
        </div>

       
        <div>
            <p>📩 Get to know us | 💬 Support | 📖 FAQ</p>
            <p>&copy; 2026 Quizzyvalo. All rights reserved.</p>
        </div>
    </footer>
        </>
    )
}