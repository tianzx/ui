## develop flow 
- First step :
  - cd src/views/business/ ,touch your own logic model,
just for view 

- Second step :
  - edit src/routes.js 
    - import xx from 'src/views/business/xx'
    - < Route path="xx" component={xx} />

- Third step :
  - touch && cd src/server/controller/xx.js
  - [option] add post headers:{Content-Type}(edit src/actions/api/api)
  - add server router : edit server.js
  
