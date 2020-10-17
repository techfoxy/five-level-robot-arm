function stop () {
    motor.motorStopAll()
}
input.onButtonPressed(Button.A, function () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
    basic.pause(2000)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 255)
    basic.pause(2000)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 255)
    basic.pause(2000)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 255)
    basic.pause(2000)
    motor.motorStopAll()
})
function backward () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 200)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 200)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 200)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 200)
}
function turn_left () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 255)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 255)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 255)
}
function forward () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 200)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 200)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 200)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 200)
}
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == 1) {
        basic.showString("A")
        mode = 1
    } else if (control.eventValue() == 2) {
    	
    } else if (control.eventValue() == 3) {
        mode = 2
        basic.showString("B")
    } else if (control.eventValue() == 4) {
    	
    } else if (control.eventValue() == 5) {
        mode = 3
        basic.showString("C")
    } else if (control.eventValue() == 6) {
    	
    } else if (control.eventValue() == 7) {
        mode = 4
        basic.showString("D")
    } else if (control.eventValue() == 8) {
    	
    } else if (control.eventValue() == 9) {
        b1 = 1
        if (mode == 1) {
            forward()
        }
    } else if (control.eventValue() == 10) {
        b1 = 0
        if (mode == 1) {
            stop()
        }
    } else if (control.eventValue() == 11) {
        b2 = 1
        if (mode == 1) {
            backward()
        }
    } else if (control.eventValue() == 12) {
        b2 = 0
        if (mode == 1) {
            stop()
        }
    } else if (control.eventValue() == 13) {
        b3 = 1
        if (mode == 1) {
            turn_left()
        }
    } else if (control.eventValue() == 14) {
        b3 = 0
        if (mode == 1) {
            stop()
        }
    } else if (control.eventValue() == 15) {
        b4 = 1
        if (mode == 1) {
            turn_right()
        }
    } else if (control.eventValue() == 16) {
        b4 = 0
        if (mode == 1) {
            stop()
        }
    } else {
    	
    }
})
function turn_right () {
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 255)
    motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 255)
    motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 255)
}
let b4 = 0
let b3 = 0
let b2 = 0
let b1 = 0
let mode = 0
bluetooth.startLEDService()
let offset = 5
mode = 0
let s1 = 90
let s2 = 90
let s3 = 30
let s4 = 90
let s5 = 10
motor.servo(motor.Servos.S1, s1)
motor.servo(motor.Servos.S2, s2)
motor.servo(motor.Servos.S3, s3)
motor.servo(motor.Servos.S4, s4)
motor.servo(motor.Servos.S5, s5)
basic.forever(function () {
    if (mode == 2) {
        if (s1 < 180 && b3 == 1) {
            s1 += 2
            motor.servo(motor.Servos.S1, s1)
        }
        if (s1 > 0 && b4 == 1) {
            s1 += -2
            motor.servo(motor.Servos.S1, s1)
        }
        if (s2 > 0 && b1 == 1) {
            s2 += -2
            motor.servo(motor.Servos.S2, s2)
        }
        if (s2 < 180 && b2 == 1) {
            s2 += 2
            motor.servo(motor.Servos.S2, s2)
        }
    }
    if (mode == 3) {
        if (s3 < 180 && b1 == 1) {
            s3 += 2
            motor.servo(motor.Servos.S3, s3)
        }
        if (s3 > 0 && b2 == 1) {
            s3 += -2
            motor.servo(motor.Servos.S3, s3)
        }
        if (s4 > 0 && b3 == 1) {
            s4 += -2
            motor.servo(motor.Servos.S4, s4)
        }
        if (s4 < 180 && b4 == 1) {
            s4 += 2
            motor.servo(motor.Servos.S4, s4)
        }
    }
    if (mode == 4) {
        if (s5 < 180 && b1 == 1) {
            s5 += 2
            motor.servo(motor.Servos.S5, s5)
        }
        if (s5 > 0 && b2 == 1) {
            s5 += -2
            motor.servo(motor.Servos.S5, s5)
        }
    }
})
