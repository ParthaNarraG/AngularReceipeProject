These were the useful angular commands that will help you in this project

//Install Angular CLI
To Install Angular
npm install -g @angular/cli

//Create a Project
To Create an Angular Project
ng new projectName

//Create a New Component
To Create a New Component
ng g c 

//Install Bootstrap in your application
To install bootstrap in your application
npm install –save bootstrap@4.5.0
in styles.css
add   @import "node_modules/bootstrap/scss/bootstrap.scss";

//Installing services,guards,directives,pipes
To Create above files

* ng g s serviceName
* ng g guard guardName
* ng g d directiveName
* ng g p pipeName

//Skip spec.ts file 
To let Angular not to create spec.ts file
ng g c | d | p | s | guard  --skipTests=true
	
