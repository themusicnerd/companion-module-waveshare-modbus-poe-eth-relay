## Waveshare Modbus POE ETH Relay

This module controls the 8-channel Waveshare Modbus POE ETH Relay over Modbus TCP.

### Configuration

- Set the relay IP or hostname.
- Leave the TCP port at `502` unless you changed it on the device.
- Leave the Modbus unit id at `1` unless the relay was readdressed.
- Polling drives Companion feedbacks and variables, so shorter poll intervals give faster feedback updates.

### Actions

- Set relay state: on, off, or toggle a single relay.
- Set all relays: on, off, or toggle all eight relays.
- Pulse relay: turn one relay on for a timed pulse and then turn it off again.
- Poll now: force an immediate state refresh.

### Feedbacks

- Connected to relay
- Relay is on

These feedbacks are backed by live Modbus polling rather than only local button state.

### Variables

- `$(instance:connected)`
- `$(instance:connection_status)`
- `$(instance:relay_bitmap)`
- `$(instance:relays_on_count)`
- `$(instance:last_error)`
- `$(instance:last_poll)`
- `$(instance:relay_1)` through `$(instance:relay_8)`

### Protocol notes

- Relay state polling uses Modbus function `0x01` to read the coil states.
- Relay writes use function `0x05`.
- Toggle writes use Waveshare's documented `0x5500` value.
