document.addEventListener('DOMContentLoaded', () => {
  const agentSection = document.querySelector('.agent-section')
  const weaponSection = document.querySelector('.weapon-section')
  const mapSection = document.querySelector('.map-section')

  function agentQuiz(){
    const agentHtml = `
      <div class="Quest">
        <p>Question number:1</p><img src="images/ability/breachability.png" alt="">
        <p>Guess agent based of ability</p>
      </div>
      <div class="options">
        <div style="flex:1; text-align:center; cursor:pointer;"><img src="images/agents/1.png" alt=""></div>
        <div style="flex:1; text-align:center; cursor:pointer;"><img src="images/agents/breach.png" alt=""></div>
        <div style="flex:1; text-align:center; cursor:pointer;"><img src="images/agents/brimstone.png" alt=""></div>
        <div style="flex:1; text-align:center; cursor:pointer;"><img src="images/agents/chamber.png" alt=""></div>
      </div>
      <button>Gussed</button>
    `
    agentSection.innerHTML = agentHtml
  }

  agentQuiz()


  function mapQuiz(){
    const MapHtml=`
    <div class="Quest">
                <p>Question number:1</p><img src="images/maps/question.png" alt="">
                <p>Guess map based of this image</p>
            </div>
            <div class="options">
                <div style="flex:1; text-align:center; cursor:pointer;"><img src="images/maps/Ascent.png" alt=""></div>
                <div style="flex:1; text-align:center; cursor:pointer;"><img src="images/maps/bind.png" alt=""></div>
                <div style="flex:1; text-align:center; cursor:pointer;"><img src="images/maps/corrode.png" alt=""></div>
                <div style="flex:1; text-align:center; cursor:pointer;"><img src="images/maps/heaven.png" alt=""></div>
            </div>
            <button>Gussed</button>`
    mapSection.innerHTML = MapHtml
}
mapQuiz()

  function weaponQuiz(){
    const weaponHtml = `
    <div class="Quest">
                <p>Question number:1</p><img src="images/guns/classicskin.png" alt="">
                <p>Guess gun based of gunskin</p>
            </div>
            <div class="options">
                <div style="flex:1; text-align:center; cursor:pointer;"><img src="images/guns/bulldog.png" alt=""></div>
                <div style="flex:1; text-align:center; cursor:pointer;"><img src="images/guns/classic.png" alt=""></div>
                <div style="flex:1; text-align:center; cursor:pointer;"><img src="images/guns/phantom.png" alt=""></div>
                <div style="flex:1; text-align:center; cursor:pointer;"><img src="images/guns/vandel.png" alt=""></div>
            </div>
            <button>Gussed</button>
    `
    weaponSection.innerHTML = weaponHtml
  }
    weaponQuiz()
})