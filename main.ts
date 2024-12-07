let bright = 0
basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    bright = input.lightLevel()
    if (bright > 140) {
        basic.showIcon(IconNames.Sad)
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else {
        basic.clearScreen()
        music.stopAllSounds()
    }
})
