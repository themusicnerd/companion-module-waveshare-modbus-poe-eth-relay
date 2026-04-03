import type { ModuleInstance } from './main.js'

export function UpdateVariableDefinitions(self: ModuleInstance): void {
	self.setVariableDefinitions([
		{ variableId: 'connected', name: 'Connected flag (true/false)' },
		{ variableId: 'connection_status', name: 'Connection status text' },
		{ variableId: 'relay_bitmap', name: 'Relay states as 8-bit bitmap' },
		{ variableId: 'relays_on_count', name: 'Number of relays currently on' },
		{ variableId: 'last_error', name: 'Last connection or protocol error' },
		{ variableId: 'last_poll', name: 'Last successful poll timestamp' },
		{ variableId: 'relay_1', name: 'Relay 1 state text' },
		{ variableId: 'relay_2', name: 'Relay 2 state text' },
		{ variableId: 'relay_3', name: 'Relay 3 state text' },
		{ variableId: 'relay_4', name: 'Relay 4 state text' },
		{ variableId: 'relay_5', name: 'Relay 5 state text' },
		{ variableId: 'relay_6', name: 'Relay 6 state text' },
		{ variableId: 'relay_7', name: 'Relay 7 state text' },
		{ variableId: 'relay_8', name: 'Relay 8 state text' },
	])
}
