import type { SomeCompanionConfigField } from '@companion-module/base'

export interface ModuleConfig {
	host: string
	port: number
	unitId: number
	pollInterval: number
	connectTimeout: number
	defaultPulseMs: number
}

export function GetConfigFields(): SomeCompanionConfigField[] {
	return [
		{
			type: 'textinput',
			id: 'host',
			label: 'Relay IP / hostname',
			width: 8,
			default: '',
			useVariables: true,
		},
		{
			type: 'number',
			id: 'port',
			label: 'Modbus TCP port',
			width: 4,
			min: 1,
			max: 65535,
			default: 502,
		},
		{
			type: 'number',
			id: 'unitId',
			label: 'Modbus unit id',
			width: 4,
			min: 1,
			max: 247,
			default: 1,
		},
		{
			type: 'number',
			id: 'pollInterval',
			label: 'Poll interval (ms)',
			width: 4,
			min: 250,
			max: 10000,
			default: 1000,
		},
		{
			type: 'number',
			id: 'connectTimeout',
			label: 'Socket timeout (ms)',
			width: 4,
			min: 250,
			max: 10000,
			default: 2000,
		},
		{
			type: 'number',
			id: 'defaultPulseMs',
			label: 'Default pulse length (ms)',
			width: 4,
			min: 50,
			max: 60000,
			default: 500,
		},
	]
}
