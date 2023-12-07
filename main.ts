input.onButtonPressed(Button.A, function () {
    numero += 1
    basic.showNumber(numero)
    music.play(music.builtinPlayableSoundEffect(soundExpression.spring), music.PlaybackMode.UntilDone)
    if (numero >= 9) {
        numero = 0
    }
})
input.onButtonPressed(Button.B, function () {
    numero += -1
    basic.showNumber(numero)
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
    if (numero <= 9) {
        numero = 1
    }
})
let numero = 0
basic.showNumber(0)
numero = 0
