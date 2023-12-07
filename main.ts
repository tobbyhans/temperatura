input.onButtonPressed(Button.A, function () {
    numero += 1
    basic.showNumber(numero)
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(0)
})
input.onButtonPressed(Button.B, function () {
    numero += -1
    basic.showNumber(numero)
    music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
})
let numero = 0
basic.showNumber(0)
numero = 0
