let direction = 0
let sonar = 0
music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    sonar = CutebotPro.ultrasonic(SonarUnit.Centimeters)
    if (sonar > 2 && sonar < 20) {
        CutebotPro.colorLight(RGBLight.RGBL, 0xff0080)
        CutebotPro.distanceRunning(CutebotProOrientation.Retreat, 5, CutebotProDistanceUnits.Cm)
        basic.pause(1000)
        direction = randint(0, 10)
        if (direction < 5) {
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
            CutebotPro.trolleySteering(CutebotProTurn.LeftInPlace, CutebotProAngle.Angle90)
        } else {
            music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            CutebotPro.trolleySteering(CutebotProTurn.RightInPlace, CutebotProAngle.Angle90)
        }
        CutebotPro.turnOffAllHeadlights()
    } else {
        CutebotPro.pwmCruiseControl(30, 30)
    }
})
