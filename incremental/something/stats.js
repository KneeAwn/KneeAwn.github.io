state = {}
state.mentalHealth = 0
state.weight = 280
state.hoursExercising = 0
state.hoursSleeping = 4

function setMentalHealth() {
        el = document.getElementById('stat-mental-health');
        el.innerHtml = "Mental Health: " + state.mentalHealth + "/100"
}

function update(){
        setMentalHealth()
}
