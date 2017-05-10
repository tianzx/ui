## develop flow 
- First step :
  - cd src/views/business/ ,touch your own logic model,
just for view 

- Second step :
  - edit src/routes.js 
    - import xx from 'src/views/business/xx'
    - < Route path="xx" component={xx} />

- Third step :
  - touch && edit src/server/controller/xx.js
  - [option] add post headers:{Content-Type}(edit src/actions/api/api)
  - ~~add server router : edit server.js~~

- Fourth step :
  - mkdir -p src/views/Business/** && touch your logic views
  
- Fifth step: 
  - touch && edit src/actions/business/xx.js
  - touch && edit src/reducers/business/xx.js
  - cd .. && edit ../index.js to add reduce status
  



- pay attention
  - when you want to your code can run on multiple platform,you should notice 
  on path ,please use path.join()
