import type { ModuleInstance } from './main.js'

export function UpdateVariableDefinitions(self: ModuleInstance): void {
	const variables = [
		{ variableId: 'connected', name: 'Connected flag (true/false)' },
		{ variableId: 'connection_status', name: 'Connection status text' },
		{ variableId: 'relay_bitmap', name: 'Relay states as 8-bit bitmap' },
		{ variableId: 'relays_on_count', name: 'Number of relays currently on' },
		{ variableId: 'last_error', name: 'Last connection or protocol error' },
		{ variableId: 'last_poll', name: 'Last successful poll timestamp' },
	]

	for (let channel = 1; channel <= self.getRelayCount(); channel++) {
		variables.push({
			variableId: `relay_${channel}`,
			name: `Relay ${channel} state text`,
		})
	}

	self.setVariableDefinitions(variables)
}
