input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 C5 C5 - - - - - ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("E E E - - - - - ", 120), music.PlaybackMode.UntilDone)
})
basic.pause(500)
basic.showLeds(`
    # . . . #
    # . . . #
    # . # . #
    # . # . #
    # # # # #
    `)
basic.pause(500)
basic.showLeds(`
    # . . . #
    # . . . #
    # # # # #
    # . . . #
    # . . . #
    `)
basic.pause(500)
basic.showLeds(`
    . # # # .
    # . . . #
    # # # # #
    # . . . #
    # . . . #
    `)
basic.pause(500)
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
