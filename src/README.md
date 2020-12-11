ApiModules
	modules: list of type modules


Modules:
	id: string
	parent: Module or null
	name: string
	beta: boolean
	modules: Modules
	sections: list of Module Sections

ModuleSections
	id: string
	name: string
	href: string


DocPage
	Input: ModuleSection
	Internal:
		Create Content
	Output: HTML

MainPage
	Input: Module
	Internal
		CardList
			icon: string
			module: Module
			subtitle: string
			sections: list of ModuleSections
	Output: HTML


Folder Structure
	Components
		APIModule
			
			SubModule
				Section
			Section
		Header


