input.onButtonPressed(Button.A, function () {
    servos.P0.run(0)
})
input.onButtonPressed(Button.B, function () {
    servos.P0.run(50)
})
servos.P0.setAngle(0)
