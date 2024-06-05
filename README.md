# Star Wars Battle Game

Welcome to the Star Wars Battle Game! This is a fun and interactive test where you'll build an application using the Star Wars API (SWAPI) to select random people or starships and determine who would win based on a common attribute.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Bonus Points](#bonus-points)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Best Practices](#best-practices)
- [Acknowledgements](#acknowledgements)

## Introduction

- People have mass, and the person with greater mass wins.
- Starships have crew, and the starship with more crew wins.

The app should render the attributes from the resource in a simple web page that allows you to 'play' the game. 
Once two cards are displayed, the app should declare one of the cards a winner based on the higher common attribute. 
After displaying the winning card, the user should be able to play again using an action button that repeats the same request.

## Features

- Fetch random people or starships from SWAPI.
- Display details of people and starships in a card format.
- Determine and display the winner based on the common attribute (mass for people, crew for starships).
- Option to play again and fetch new random people or starships.

## Bonus Points

These features are not required but will add to your portfolio in an interview:

1. **Score Counter**: If there are two players, left and right, show how many times each side has won.
2. **Resource Selection**: Option to select which resource to play against.
3. **Angular Material**: Use Angular Material and display the details in a card. [Angular Material Cards](https://material.angular.io/components/card)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/star-wars-battle-game.git
   cd swapi
