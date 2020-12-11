// Modules:
//  id: string
//  parent: Module or null
//  name: string
//  beta: boolean
//  modules: Modules (modules can be submodules)
//  sections: list of ModuleSections


// ModuleSections
// 	id: string
// 	name: string
// 	href: string

let m ={
		modules: [
			{
				id: 'symbl-sdk',
				parent: null,
				name: 'Symbl SDK (Node.js)',
				beta: false,
				sections: [
					{
						id: 'initialize-the-sdk',
						name: 'Initialize the SDK',
						href: '#',
					},
					{
						id: 'connect-to-endpoints',
						name: 'Connect to Endpoints',
						href: '#',
					}
				]
			}, {
				id: 'telephony',
				parent: null,
				name: 'Real Time Telephony API',
				beta: false,
				sections: [
					{
						id: 'telephony',
						name: 'Telephony',
						href: '#',
					},
					{
						id: 'langage-timezone',
						name: 'Specifying Langage and Timezone',
						href: '#'
					}
				]
			}, {
				id: 'web-socket',
				parent: null,
				name: 'Websocket',
				beta: false,
				sections: [
					{
						id: 'message-formats',
						name: 'Message Formats',
						href: '#'
					},
					{
						id: 'configuration',
						name: 'configuration',
						href: '#'
					}
				]
			}, {
				id: 'async',
				parent: null,
				name: 'Async API',
				beta: false,
				sections: [
					{
						id: 'text-api',
						name: 'Text API',
						href: '#'
					},
					{
						id: 'audio-api',
						name: 'Audio API',
						href: '#'
					}
				]
			}, {
				id: 'conversation',
				parent: null,
				name: 'Conversation API',
				beta: false,
				sections: [
					{
						id: 'get-conversion',
						name: 'GET conversation',
						href: '#'
					},
					{
						id: 'delete-conversation',
						name: 'DELETE conversation',
						href: '#'
					}
				]
			}, {
				id: 'experience',
				parent: null,
				name: 'Experience API',
				beta: false,
				sections: [
					{
						id: 'create-experience',
						name: 'Create Experience',
					},
					{
						id: 'video-summary-ui',
						name: 'Video Summary UI',
						href: '#'
					}
				]
			}
		]


	}


export default m