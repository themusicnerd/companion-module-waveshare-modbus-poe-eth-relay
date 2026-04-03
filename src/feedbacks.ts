import { combineRgb, type CompanionFeedbackDefinitions } from '@companion-module/base'
import type { ModuleInstance } from './main.js'

export function UpdateFeedbacks(self: ModuleInstance): void {
	const relayChoices = Array.from({ length: self.getRelayCount() }, (_, index) => ({
		id: index + 1,
		label: `Relay ${index + 1}`,
	}))

	const feedbacks: CompanionFeedbackDefinitions = {
		connected: {
			name: 'Connected to relay',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(0, 128, 0),
				color: combineRgb(255, 255, 255),
			},
			options: [],
			callback: () => self.isConnected,
		},
		relay_state: {
			name: 'Relay is on',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(0, 160, 80),
				color: combineRgb(255, 255, 255),
			},
			options: [
				{
					id: 'channel',
					type: 'dropdown',
					label: 'Relay',
					default: 1,
					choices: relayChoices,
				},
			],
			callback: (feedback) => self.getRelayState(Number(feedback.options.channel)),
		},
	}

	self.setFeedbackDefinitions(feedbacks)
}
