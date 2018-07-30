basic.forever(() => {
    let p = KLOOTVIOOL_XY2.ping(DigitalPin.P1, DigitalPin.P2, PingUnit.Inches);
    led.plotBarGraph(p, 0);
})
