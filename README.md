# React Project

The core of this application is the file in `models/ApiModules.js`. This file contains a JSON object with the documentation structure. The home page, the sidebar and the actual documentation components is all loaded through this object. This makes it easy to add and modify documentation sections. 

The routing structure for the documentation pages is `/docpage/:module/:section` with the `module` parameter being an ID of a module and the `section` parameter being the ID of the section. Using this I'm able to find the component from JSON object and load it dynamically in the DocPage.js component file.

The responsive design for the side navigation bar on the Doc Pages uses React states to keep track of the state of the menu.


Here is the schema for the JSON object:

    {
      modules: [
          id: string,
          icon: string,
          parent: null or ID of parent,
          name: string,
          beta: boolean,
          sections: [
              {
                  id: string,
                  name: string,
                  component: A component which contains documentation text for this section.
              }
          ],
          modules: [] // List of Submodules
      ]
    }

