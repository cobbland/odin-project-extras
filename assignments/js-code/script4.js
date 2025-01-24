function favoritePlanet(planet = "Planet-X") {
    if (planet === 'Earth' ||
        planet === 'Venus') {
            return "My favorite planet is " + planet + "!";
        } else {
            return "My favorite planet is " + planet + "! It's out of this world!";
        }
}