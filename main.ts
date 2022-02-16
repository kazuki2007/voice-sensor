let _1 = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        _1 = 1
    } else if (input.buttonIsPressed(Button.B)) {
        _1 = 0
    }
    if (_1 == 1) {
        maqueen.motorStop(maqueen.Motors.All)
    } else {
        if (input.soundLevel() > 95) {
            basic.showLeds(`
                . . # . .
                . . # . .
                . . # . .
                . . . . .
                . . # . .
                `)
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        } else {
            basic.clearScreen()
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        }
    }
})
