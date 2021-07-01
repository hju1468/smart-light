let Count = 0
input.onButtonPressed(Button.A, function () {
    Count += 1
    led.plot(4, 0)
    basic.pause(200)
    while (true) {
        if (Count == 1 && input.buttonIsPressed(Button.A)) {
            Count += 1
            basic.showLeds(`
                . . . # #
                . . . # #
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        basic.pause(200)
        if (input.buttonIsPressed(Button.A) && Count == 2) {
            Count += 1
            basic.showLeds(`
                . . # # #
                . . # # #
                . . # # #
                . . . . .
                . . . . .
                `)
        }
        basic.pause(500)
        if (input.buttonIsPressed(Button.A) && Count == 3) {
            Count += 1
            basic.showLeds(`
                . # # # #
                . # # # #
                . # # # #
                . # # # #
                . . . . .
                `)
        }
        basic.pause(200)
        if (input.buttonIsPressed(Button.A) && Count == 4) {
        	
        }
    }
})
