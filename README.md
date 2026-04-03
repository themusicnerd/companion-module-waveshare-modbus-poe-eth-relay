# companion-module-waveshare-modbus-poe-eth-relay

Bitfocus Companion module for the Waveshare Modbus POE ETH Relay.

This module provides direct Modbus TCP control of the 8-channel Waveshare relay, including live state polling for reliable feedbacks and variables.

## Features

- Single-relay `on`, `off`, and `toggle` actions
- All-relays `on`, `off`, and `toggle` actions
- Timed pulse action for momentary relay triggers
- Live relay-state polling over Modbus TCP
- Boolean feedbacks for connection status and relay on/off state
- Variables for individual relay states, bitmap, relay count, last poll, and last error
- Ready-to-use presets for relay toggles, all on, all off, and manual poll

## Module Usage

User-facing setup notes are in [companion/HELP.md](./companion/HELP.md).

Default device settings:

- Modbus TCP port: `502`
- Modbus unit id: `1`
- Relay count: `8`

## Development

```bash
yarn install
yarn build
```

Use `yarn dev` for watch mode while editing the module.
