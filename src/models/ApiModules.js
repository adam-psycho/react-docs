import InitializeTheSdk from '../components/Sections/SymblSDK/InitializeTheSdk.js';
import ConnectToEndpoints from '../components/Sections/SymblSDK/ConnectToEndpoints.js';
import SymblSDKOverview from '../components/Sections/SymblSDK/SymblSDKOverview.js';
import SymblSDKGuides from '../components/Sections/SymblSDK/SymblSDKGuides.js';
import SymblSDKSnippets from '../components/Sections/SymblSDK/SymblSDKSnippets.js';
import SymblSDKTutorials from '../components/Sections/SymblSDK/SymblSDKTutorials.js';


// Modules:
//  id: string
//  parent: Module or null
//  name: string
//  beta: boolean
//  modules: Modules (modules can be submodules)
//  sections: list of ModuleSections


// ModuleSections
//  id: string
//  name: string
//  href: string

let ApiModules = {
        modules: [
            {
                id: 'symbl-sdk',
                icon: 'codepen',
                parent: null,
                name: 'Symbl SDK (Node.js)',
                beta: false,
                sections: [
                    {
                        id: 'overview',
                        name: 'Overview',
                        component: SymblSDKOverview,
                    },
                    {
                        id: 'guides',
                        name: 'Guides',
                        component: SymblSDKGuides,
                    },
                    {
                        id: 'code-snippets',
                        name: 'Code Snippets',
                        component: SymblSDKSnippets,
                    },
                    {
                        id: 'tutorials',
                        name: 'Tutorials',
                        component: SymblSDKTutorials,
                    },
                    {
                        id: 'initialize-the-sdk',
                        name: 'Initialize the SDK',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'connect-to-endpoints',
                        name: 'Connect to Endpoints',
                        component: ConnectToEndpoints,
                    }
                ]
            }, {
                id: 'telephony',
                icon: 'phone',
                parent: null,
                name: 'Real Time Telephony API',
                beta: false,
                sections: [
                    {
                        id: 'overview',
                        name: 'Overview',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'guides',
                        name: 'Guides',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'code-snippets',
                        name: 'Code Snippets',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'tutorials',
                        name: 'Tutorials',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'telephony',
                        name: 'Telephony',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'langage-timezone',
                        name: 'Specifying Langage and Timezone',
                        component: InitializeTheSdk,
                    }
                ]
            }, {
                id: 'web-socket',
                icon: 'plug',
                parent: null,
                name: 'Websocket',
                beta: false,
                sections: [
                    {
                        id: 'overview',
                        name: 'Overview',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'guides',
                        name: 'Guides',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'code-snippets',
                        name: 'Code Snippets',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'tutorials',
                        name: 'Tutorials',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'message-formats',
                        name: 'Message Formats',
                        component: InitializeTheSdk
                    },
                    {
                        id: 'configuration',
                        name: 'Configuration',
                        component: InitializeTheSdk
                    }
                ]
            }, {
                id: 'async',
                icon: 'refresh',
                parent: null,
                name: 'Async API',
                beta: false,
                sections: [
                    {
                        id: 'overview',
                        name: 'Overview',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'guides',
                        name: 'Guides',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'code-snippets',
                        name: 'Code Snippets',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'tutorials',
                        name: 'Tutorials',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'text-api',
                        name: 'Text API',
                        component: InitializeTheSdk
                    },
                    {
                        id: 'audio-api',
                        name: 'Audio API',
                        component: InitializeTheSdk
                    }
                ]
            }, {
                id: 'conversation',
                icon: 'comments',
                parent: null,
                name: 'Conversation API',
                beta: false,
                sections: [
                    {
                        id: 'overview',
                        name: 'Overview',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'guides',
                        name: 'Guides',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'code-snippets',
                        name: 'Code Snippets',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'tutorials',
                        name: 'Tutorials',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'get-conversion',
                        name: 'GET conversation',
                        component: InitializeTheSdk
                    },
                    {
                        id: 'delete-conversation',
                        name: 'DELETE conversation',
                        component: InitializeTheSdk
                    }
                ]
            }, {
                id: 'experience',
                icon: 'suitcase',
                parent: null,
                name: 'Experience API',
                beta: false,
                sections: [
                    {
                        id: 'overview',
                        name: 'Overview',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'guides',
                        name: 'Guides',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'code-snippets',
                        name: 'Code Snippets',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'tutorials',
                        name: 'Tutorials',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'create-experience',
                        name: 'Create Experience',
                        component: InitializeTheSdk
                    },
                    {
                        id: 'video-summary-ui',
                        name: 'Video Summary UI',
                        component: InitializeTheSdk
                    }
                ]
            }, {
                id: 'item-1',
                icon: 'folder-open',
                parent: null,
                name: 'Item #1',
                beta: false,
                sections: [
                    {
                        id: 'overview',
                        name: 'Overview',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'guides',
                        name: 'Guides',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'code-snippets',
                        name: 'Code Snippets',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'tutorials',
                        name: 'Tutorials',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'create-experience',
                        name: 'Create Experience',
                        component: InitializeTheSdk
                    },
                    {
                        id: 'video-summary-ui',
                        name: 'Video Summary UI',
                        component: InitializeTheSdk
                    }
                ]
            }, {
                id: 'item-2',
                icon: 'folder-open',
                parent: null,
                name: 'Item #2',
                beta: false,
                sections: [
                    {
                        id: 'overview',
                        name: 'Overview',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'guides',
                        name: 'Guides',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'code-snippets',
                        name: 'Code Snippets',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'tutorials',
                        name: 'Tutorials',
                        component: InitializeTheSdk,
                    },
                    {
                        id: 'create-experience',
                        name: 'Create Experience',
                        component: InitializeTheSdk
                    },
                    {
                        id: 'video-summary-ui',
                        name: 'Video Summary UI',
                        component: InitializeTheSdk
                    }
                ]
            }
        ]


    }


export default m