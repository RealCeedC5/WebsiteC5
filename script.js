document.getElementById('generate-button').addEventListener('click', generateIdea);

const ideas = [
    'A social media platform for pets',
    'A website to find local community events',
    'An online marketplace for handmade crafts',
    'A blog about sustainable living',
    'A site that curates the best free online courses',
    'A platform to exchange travel tips and itineraries',
    'A virtual gallery for independent artists',
    'A website that generates random recipes',
    'A directory of eco-friendly products',
    'A website for sharing personal finance tips'
];

function generateIdea() {
    const randomIndex = Math.floor(Math.random() * ideas.length);
    document.getElementById('idea').innerText = ideas[randomIndex];
}
