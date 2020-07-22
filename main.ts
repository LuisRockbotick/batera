input.onButtonPressed(Button.A, function () {
    Batería += 1
})
input.onButtonPressed(Button.B, function () {
    Batería += -1
})
let Batería = randint(0, 100)
basic.forever(function () {
    basic.showNumber(Batería)
})
