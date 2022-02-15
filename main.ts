let _1 = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        _1 = 1
    } else if (_1 == 1) {
        maqueen.motorStop(maqueen.Motors.All)
    } else {
        if (input.soundLevel() > 95) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        } else {
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        }
    }
})
