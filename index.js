document.addEventListener('DOMContentLoaded', () => {
    let homeScore = 0;
    let guestScore = 0;

    function updateScore(team, points) {
        if (team === 'home') {
            homeScore += points;
            document.getElementById('home-score').textContent = homeScore;
        } else if (team === 'guest') {
            guestScore += points;
            document.getElementById('guest-score').textContent = guestScore;
        }
    }

    function handleClick(event) {
        const button = event.target.closest('.button');
        if (!button) return;
        
        const team = button.getAttribute('data-team');
        const points = parseInt(button.getAttribute('data-points'));

        updateScore(team, points);
    }

    document.body.addEventListener('click', handleClick);
});
