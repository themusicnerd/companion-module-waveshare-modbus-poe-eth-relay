## Waveshare Modbus POE ETH Relay

This module controls the Waveshare Modbus POE ETH Relay over Modbus TCP.

### Configuration

- Set the relay IP or hostname.
- Leave the TCP port at `502` unless you changed it on the device.
- Leave the Modbus unit id at `1` unless the relay was readdressed.
- Select the correct relay count for your hardware.
- Enable digital input polling for the `(C)` variant and leave the input count at `8`.
- Polling drives Companion feedbacks and variables, so shorter poll intervals give faster feedback updates.
- The default pulse length is used by pulse actions unless you override the duration in the action itself.

### Actions

- Set relay state: on, off, or toggle a single relay.
- Set all relays: on, off, or toggle all eight relays.
- Pulse relay: turn one relay on for a timed pulse and then turn it off again.
- Poll now: force an immediate state refresh.

### Feedbacks

- Connected to relay
- Relay is on
- Digital input is active

These feedbacks are backed by live Modbus polling rather than only local button state, so button colours follow the real relay outputs.

### Variables

- `$(instance:connected)`
- `$(instance:connection_status)`
- `$(instance:relay_bitmap)`
- `$(instance:relays_on_count)`
- `$(instance:last_error)`
- `$(instance:last_poll)`
- `$(instance:relay_1)` through `$(instance:relay_N)` for the configured relay count
- `$(instance:input_1)` through `$(instance:input_8)` when digital input polling is enabled
- `$(instance:input_bitmap)`
- `$(instance:inputs_active_count)`
- `$(instance:last_input_poll)`

### Protocol notes

- Relay state polling uses Modbus function `0x01` to read the coil states.
- Relay writes use function `0x05`.
- Toggle writes use Waveshare's documented `0x5500` value.

### Notes

- This module was built and tested against the Waveshare Modbus POE ETH Relay with real hardware.
- The module supports both the 8-channel and 30-channel variants when they follow the same Modbus TCP coil layout.
- The `(C)` variant exposes digital inputs over Modbus, so those inputs can be used in Companion Triggers via `On variable change`.
- If feedbacks are slower than you want, reduce the poll interval. If you want less network traffic, increase it.
