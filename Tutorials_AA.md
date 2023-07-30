# HFW Word Building Tutorial

Section #1
First, choose your HFW card. Count the number of letters in your word. 
Drag the same amount of showLeds code blocks as letters. 
Then program your LED screen to match the letter of your HFW
Repeat for all letters
Add pause block for 500ms after each letter to slow it down

```blocks
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
``` 




Section #2

Next, Drag Press 'A' Button Block
Add play Music Block - Choose Tone

Repeat, But change 'A' button to 'B' button 
Change Tone
```blocks
input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 C5 C5 - - - - - ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("E E E - - - - - ", 120), music.PlaybackMode.UntilDone)
})
```

Section #3

For each new word card you pull, always start with the # of letters.
Remember for every letter, you need to have a LED block.

Section #4

Alright, now get to coding and practicing your HFWs