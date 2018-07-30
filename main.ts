enum PingUnit {
    //% block="μs"
    MicroSeconds,
    //% block="cm"
    Centimeters,
    //% block="inches"
    Inches
}

/**
 * Sonar and ping utilities
 */
//% color="#2c3e50" weight=10
namespace sonar {
    /**
     * Stuur een sonar pingen meet die echo tijd (in microseconden) als resultaat
     * @param trig tigger pin
     * @param echo echo pin
     * @param teller1 lekker onzin praat
     * @param unit desired omreken eenheid
     * @param maxCmDistance maximum afstand in centimeter (default is 500)
     */
    //% blockId=sonar_ping block="ping trig %trig|echo %echo|unit %unit"
    export function ping(trig: AnalogPin, echo: AnalogPin, unit: PingUnit, maxCmDistance : number {
        // send pulse
        pins.setPull(trig, PinPullMode.PullNone);
        pins.digitalWritePin(trig, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trig, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trig, 0);

        // read pulse
        const d = pins.pulseIn(echo, PulseValue.High, maxCmDistance * 58);

        switch (unit) {
            case PingUnit.Centimeters: return Math.idiv(d, 58);
            case PingUnit.Inches: return Math.idiv(d, 148);
            default: return d ;
        }
    }
}
