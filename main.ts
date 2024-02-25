namespace SpriteKind {
    export const builder = SpriteKind.create()
}
function occupation3 (num: number) {
    if (num == 1) {
    	
    } else {
        tiles.setTileAt(currentLocation, assets.tile`myTile`)
        direction = tiles.getTileLocation(currentLocation.x + 1, currentLocation.y)
    }
}
scene.onHitWall(SpriteKind.builder, function (sprite, location) {
    touching = 1
})
function MakeMap (Mazy: number, Direction: number, length: number, extraNum: number, overlap: boolean) {
    place = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.builder)
    currentLocation = tiles.getTileLocation(17, 17)
    maniness = Mazy
    if (maniness <= 3) {
        length = length
    } else if (maniness <= 6) {
        for (let index = 0; index < 2; index++) {
            length = length
        }
    } else if (maniness > 6) {
        for (let index = 0; index < 3; index++) {
            length = length
        }
    } else {
        length = 0
    }
    if (Direction == 0) {
        for (let index = 0; index < length; index++) {
            direction = currentLocation.getNeighboringLocation(CollisionDirection.Left)
            tiles.placeOnTile(place, currentLocation)
            touching = 0
            occupation1(touching)
        }
    } else if (Direction == 1) {
        for (let index = 0; index < length; index++) {
            direction = currentLocation.getNeighboringLocation(CollisionDirection.Top)
            tiles.placeOnTile(place, currentLocation)
            touching = 0
            occupation2(touching)
        }
    } else if (Direction == 2) {
        for (let index = 0; index < length; index++) {
            direction = currentLocation.getNeighboringLocation(CollisionDirection.Right)
            tiles.placeOnTile(place, currentLocation)
            touching = 0
            occupation3(touching)
        }
    } else {
        for (let index = 0; index < length; index++) {
            direction = currentLocation.getNeighboringLocation(CollisionDirection.Bottom)
            tiles.placeOnTile(place, currentLocation)
            touching = 0
            occupation4(touching)
        }
    }
}
function occupation1 (num2: number) {
    if (num2 == 1) {
    	
    } else {
        tiles.setTileAt(currentLocation, assets.tile`myTile`)
        direction = tiles.getTileLocation(currentLocation.x - 1, currentLocation.y)
    }
}
function occupation4 (num3: number) {
    if (num3 == 1) {
    	
    } else {
        tiles.setTileAt(currentLocation, assets.tile`myTile`)
        direction = tiles.getTileLocation(currentLocation.x, currentLocation.y + 1)
    }
}
function occupation2 (num4: number) {
    if (num4 == 1) {
    	
    } else {
        tiles.setTileAt(currentLocation, assets.tile`myTile`)
        direction = tiles.getTileLocation(currentLocation.x, currentLocation.y - 1)
    }
}
let length = 0
let maniness = 0
let place: Sprite = null
let touching = 0
let direction: tiles.Location = null
let currentLocation: tiles.Location = null
let length2 = 0
enum PlayerKind {
    PlayerOne,
    PlayerTwo,
    PlayerThree,
    PlayerFour
}
// Create player one sprite and set its kind
let playerOne = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, PlayerKind.PlayerOne)
// Place player one sprite at desired location
// Adjust position as needed
playerOne.setPosition(50, 50)
// Create player two sprite and set its kind
let playerTwo = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, PlayerKind.PlayerTwo)
// Place player two sprite at desired location
// Adjust position as needed
playerTwo.setPosition(100, 100)
// Create player three sprite and set its kind
let playerThree = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, PlayerKind.PlayerThree)
// Place player three sprite at desired location
// Adjust position as needed
playerThree.setPosition(150, 150)
// Create player four sprite and set its kind
let playerFour = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, PlayerKind.PlayerFour)
// Place player four sprite at desired location
// Adjust position as needed
playerFour.setPosition(200, 200)
tiles.setCurrentTilemap(tilemap`level2`)
MakeMap(game.askForNumber("How mazy?", 1), randint(0, 4), randint(0, 15), 1, true)
