# Base React components library  
  I always liked the idea of building code as lego-block, re-usable in various context, allowing us to create fantastic projects with minimum effort.  
    
This repository is a base component library that everyone could use in order to start his journey in developing his own component library.  
   
 ## Usage  
 Install project depencencies
	
	npm install
    
   In order to build your library you should use the 'build' script, configured in package.json

	npm run build

If you want to start Styleguidist docs, you should use the following command

    npm run styleguidist
    
In order to use this component library in your project, you have to publish it to a npm registry or create a tarball which will contains the module bundled.

## Use the component library with npm pack
Build the library:

    npm run build

Create the tarball:
        
    npm pack
    
Copy the generated zip file in your project root and install it:

    npm install [path to the zip]
    
Enjoy it :) 