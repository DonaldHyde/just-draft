(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){e.exports=a(317)},120:function(e,t,a){},304:function(e,t,a){},305:function(e,t,a){},306:function(e,t,a){},307:function(e,t,a){},308:function(e,t,a){},309:function(e,t,a){},314:function(e,t,a){},315:function(e,t,a){},317:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(112),o=a.n(s),i=(a(120),a(4)),c=a.n(i),l=a(13),u=a(10),h=a(5),p=a(6),d=a(8),m=a(7),f=a(9),g=a(30),b=a(12),w=a(16),v=a.n(w),j=(a(304),a(22)),E=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).handleLogoutClick=function(){var e=Object(l.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.props.sb.auth.logOut();case 3:e.sent,console.log(a.props),a.props.sb.setAuthStatus(!1),a.props.sb.setUser(null),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),n=null,n=e.t0.message?e.t0:{message:e.t0},console.log("error",n);case 14:case"end":return e.stop()}},e,null,[[0,9]])}));return function(t){return e.apply(this,arguments)}}(),a.getLogout=function(){if(a.props.sb.state.auth.isAuthenticated)return r.a.createElement("a",{href:"",onClick:a.handleLogoutClick},"Log Out")},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"getUser",value:function(){if(this.props.sb.state.auth.isAuthenticated)return r.a.createElement("span",null,this.props.sb.state.auth.user.username)}},{key:"render",value:function(){return r.a.createElement("header",{className:"app-header app-header-"+this.props.viewName},r.a.createElement("div",{className:"app-title"},"Just Draft"),this.getLogout())}}]),t}(r.a.Component),O=(a(305),{username:"password",password:"username"}),y=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",errors:{cognito:null,blankfield:!0}},a.handleInputChange=function(e){var t,n=!0;e.target.value&&a.state[O[e.target.id]]&&(n=!1),a.setState((t={},Object(j.a)(t,e.target.id,e.target.value),Object(j.a)(t,"errors",Object(u.a)({},a.state.errors,{blankfield:n})),t))},a.handleSubmit=function(){var e=Object(l.a)(c.a.mark(function e(t){var n,r,s,o,i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.username,s=n.password,e.prev=2,e.next=5,a.props.sb.auth.logIn(r,s);case 5:o=e.sent,a.props.sb.app.setAuthStatus(!0),a.props.sb.app.setUser(o),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(2),i=null,i=e.t0.message?e.t0:{message:e.t0},a.setState({errors:Object(u.a)({},a.state.errors,{cognito:i})}),console.log("error",a.state);case 16:case"end":return e.stop()}},e,null,[[2,10]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return this.props.sb.state.auth.isAuthenticated?(this.props.history.push("/projects"),null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"login-view-container"},r.a.createElement(E,Object.assign({},this.props,{viewName:"LoginView"})),r.a.createElement("div",{className:"LoginView"},r.a.createElement("form",{action:""},r.a.createElement("input",{id:"username",type:"text",onChange:this.handleInputChange,placeholder:"Username"}),r.a.createElement("input",{id:"password",type:"password",onChange:this.handleInputChange,placeholder:"Password"}),r.a.createElement("input",{type:"submit",disabled:this.state.errors.blankfield?"disabled":"",onClick:this.handleSubmit,value:"Login"})),r.a.createElement("a",{href:"/forgotpassword"},"Forgot Password?"),r.a.createElement("br",null),r.a.createElement("br",null),"Need an account?",r.a.createElement("br",null),r.a.createElement("a",{href:"/register"},"Click here")," to register.")))}}]),t}(r.a.Component),k=(a(306),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",errors:{cognito:null,blankfield:!1,passwordMatch:!1}},a.handleInputChange=function(e){a.setState(Object(j.a)({},e.target.id,e.target.value))},a.registerClicked=Object(l.a)(c.a.mark(function e(){var t,n,r;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state.username,e.prev=1,e.next=4,w.Auth.forgotPassword(t);case 4:n=e.sent,console.log(n),a.props.history.push("/verifyforgottenpassword"),e.next=15;break;case 9:e.prev=9,e.t0=e.catch(1),r=null,r=e.t0.message?e.t0:{message:e.t0},a.setState({errors:Object(u.a)({},a.state.errors,{cognito:r})}),console.log(a.state);case 15:case"end":return e.stop()}},e,null,[[1,9]])})),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement("div",{className:"ForgotPassword"},r.a.createElement("h2",null,"Forgot Password"),r.a.createElement("input",{type:"text",id:"username",onChange:this.handleInputChange,placeholder:"Enter Username"}),r.a.createElement("button",{onClick:this.registerClicked},"Submit"),"Or, ",r.a.createElement("a",{href:"/login"},"click here")," to log in."))}}]),t}(r.a.Component)),x=(a(307),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",code:"",password:"",confirmPassword:"",errors:{cognito:null,blankfield:!1,passwordMatch:!1}},a.handleInputChange=function(e){a.setState(Object(j.a)({},e.target.id,e.target.value))},a.registerClicked=Object(l.a)(c.a.mark(function e(){var t,n,r,s,o,i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.state,n=t.username,r=t.code,s=t.password,e.prev=1,e.next=4,w.Auth.forgotPasswordSubmit(n,r,s);case 4:o=e.sent,console.log(o),a.props.history.push("/login"),e.next=15;break;case 9:e.prev=9,e.t0=e.catch(1),i=null,i=e.t0.message?e.t0:{message:e.t0},a.setState({errors:Object(u.a)({},a.state.errors,{cognito:i})}),console.log(a.state);case 15:case"end":return e.stop()}},e,null,[[1,9]])})),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement("div",{className:"VerifyForgottenPassword"},r.a.createElement("h2",null,"Create New Password"),r.a.createElement("input",{type:"text",id:"code",onChange:this.handleInputChange,placeholder:"Enter Code"}),r.a.createElement("input",{type:"text",id:"username",onChange:this.handleInputChange,placeholder:"Enter Username"}),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleInputChange,placeholder:"New Password"}),r.a.createElement("input",{type:"password",id:"confirmPassword",onChange:this.handleInputChange,placeholder:"Confirm New Password"}),r.a.createElement("button",{onClick:this.registerClicked},"Submit")))}}]),t}(r.a.Component)),C=(a(308),a(2),{username:["email","password","confirmPassword"],email:["username","password","confirmPassword"],password:["username","email","confirmPassword"],confirmPassword:["username","email","password"]}),A=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",email:"",password:"",confirmPassword:"",errors:{cognito:null,blankfield:!0,passwordMatch:!0,validEmail:!0}},a.handleInputChange=function(e){var t,n=!0;if(e.target.value)for(var r=0,s=C[e.target.id].length;r<s;r++){if(!a.state[C[e.target.id][r]]){n=!0;break}n=!1}a.setState((t={},Object(j.a)(t,e.target.id,e.target.value),Object(j.a)(t,"errors",Object(u.a)({},a.state.errors,{blankfield:n})),t))},a.handleSubmit=Object(l.a)(c.a.mark(function e(){var t,n,r,s,o,i;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.isFormValid()){e.next=16;break}return t=a.state,n=t.username,r=t.email,s=t.password,e.prev=2,e.next=5,w.Auth.signUp({username:n,password:s,attributes:{email:r}});case 5:o=e.sent,console.log(o),a.props.history.push("/register/success"),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(2),i=null,i=e.t0.message?e.t0:{message:e.t0},a.setState({errors:Object(u.a)({},a.state.errors,{cognito:i})}),console.log(a.state);case 16:case"end":return e.stop()}},e,null,[[2,10]])})),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"isMatchedPassword",value:function(){var e=!1;return this.state.password===this.state.confirmPassword&&(e=!0),this.setState(Object(u.a)({},this.state,{errors:Object(u.a)({},this.state.errors,{passwordMatch:e})})),e}},{key:"isValidEmail",value:function(){var e=!1;return/\S+@\S+\.\S+/.test(this.state.email)&&(e=!0),this.setState(Object(u.a)({},this.state,{errors:Object(u.a)({},this.state.errors,{validEmail:e})})),e}},{key:"isFormValid",value:function(){var e=!1,t=!1;return this.state.password===this.state.confirmPassword&&(e=!0),/\S+@\S+\.\S+/.test(this.state.email)&&(t=!0),this.setState(Object(u.a)({},this.state,{errors:Object(u.a)({},this.state.errors,{passwordMatch:e,validEmail:t})})),e&&t}},{key:"render",value:function(){return this.props.sb.state.auth.isAuthenticated&&this.props.history.push("/projects"),r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement("div",{className:"RegisterView"},r.a.createElement("h2",null,"Register"),r.a.createElement("input",{type:"text",id:"username",onChange:this.handleInputChange,placeholder:"Username"}),r.a.createElement("input",{type:"text",className:this.state.errors.validEmail?"":"invalid",id:"email",onChange:this.handleInputChange,placeholder:"Email"}),r.a.createElement("input",{type:"password",className:this.state.errors.passwordMatch?"":"invalid",id:"password",onChange:this.handleInputChange,placeholder:"Password"}),r.a.createElement("input",{type:"password",className:this.state.errors.passwordMatch?"":"invalid",id:"confirmPassword",onChange:this.handleInputChange,placeholder:"Confirm Password"}),this.state.errors.validEmail?"":r.a.createElement("p",{className:"error"},"Invalid Email Address"),this.state.errors.passwordMatch?"":r.a.createElement("p",{className:"error"},"Passwords do not match"),r.a.createElement("button",{disabled:this.state.errors.blankfield?"disabled":"",onClick:this.handleSubmit},"Register"),"Already a user? ",r.a.createElement("a",{href:"/login"},"Click here")," to log in."))}}]),t}(r.a.Component),S=function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement("div",{className:"VerifyRegistrationView"},r.a.createElement("p",null,"Please check your email and click on the verification link we've sent to you."),r.a.createElement("p",null,"Then, ",r.a.createElement("a",{href:"/login"},"click here")," to log in.")))}}]),t}(r.a.Component),I=(a(309),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isFetching:!0,projects:[]},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.props.sb.ajax.getProjects();case 3:t=e.sent,console.log(t),this.setState({isFetching:!1,projects:t}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error: ",e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.props.sb.state.auth.isAuthenticated||this.props.history.push("/login"),r.a.createElement(r.a.Fragment,null,r.a.createElement(E,Object.assign({},this.props,{viewName:"ProjectsView"})),r.a.createElement("div",{className:"ProjectsView"},r.a.createElement("h2",null,"Your Projects"),!this.state.isFetching&&r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,this.state.projects.map(function(e,t){return r.a.createElement("li",{key:e.id},e.name,r.a.createElement(g.b,{to:"/projects/"+e.id},"View"))})),r.a.createElement("button",null,"New Project"))))}}]),t}(r.a.Component)),P=(a(314),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isFetching:!0,projectId:"",projectFiles:[]},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.props.match.params.id,e.next=4,this.props.sb.ajax.getProjectFiles(t);case 4:a=e.sent,console.log(a),this.setState({isFetching:!1,projectId:t,projectFiles:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("Error: ",e.t0);case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.props.sb.state.auth.isAuthenticated||this.props.history.push("/login"),r.a.createElement(r.a.Fragment,null,r.a.createElement(E,this.props),r.a.createElement("div",{className:"ProjectView"},r.a.createElement("h2",null,"My First Novel"),!this.state.isFetching&&r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,this.state.projectFiles.map(function(t,a){return r.a.createElement("li",{key:t.id},t.name,r.a.createElement(g.b,{to:"/projects/"+e.state.projectId+"/edit/"+t.id},"Edit"))})),r.a.createElement("button",null,"New File"))))}}]),t}(r.a.Component)),F=(a(315),function(e){function t(){return Object(h.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"writable-area"},this.props.textContent)}}]),t}(r.a.Component)),N=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isFetching:!0,content:"",fileName:""},a.handleKeystroke=function(e){var t=e.key;if(1!==t.length||e.altKey||e.ctrlKey||e.metaKey)switch(t){case"Backspace":e.preventDefault(),a.deleteCharacter();break;case"Enter":e.preventDefault()}else/[a-zA-z1-9.,\/#!$%^&*;:{}=\-_`~()@\W]/.test(t)&&a.addCharacter(t)},a.addCharacter=function(e){var t=a.state.content;a.setState({content:t+e})},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t,a,n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.props.match.params.id,t=this.props.match.params.fileId,e.next=5,this.props.sb.ajax.getFileData(t);case 5:return a=e.sent,e.next=8,this.props.sb.ajax.getFileContent(a[0].asset_url);case 8:n=e.sent,this.setState({isFetching:!1,content:n.content,fileName:a[0].name}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("Error: ",e.t0);case 15:case"end":return e.stop()}},e,this,[[0,12]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillMount",value:function(){document.addEventListener("keydown",this.handleKeystroke)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeystroke)}},{key:"deleteCharacter",value:function(){var e=this.state.content;this.setState({content:e.substring(0,e.length-1)})}},{key:"render",value:function(){return this.props.sb.state.auth.isAuthenticated||this.props.history.push("/login"),r.a.createElement(r.a.Fragment,null,r.a.createElement(E,this.props),r.a.createElement("div",{className:"EditorView"},!this.state.isFetching&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,this.state.fileName),r.a.createElement(F,{textContent:this.state.content}))))}}]),t}(r.a.Component),T=function(){function e(t){Object(h.a)(this,e),this.config={},t&&(this.config=t)}return Object(p.a)(e,[{key:"logIn",value:function(e,t){return w.Auth.signIn(e,t)}},{key:"logOut",value:function(){return w.Auth.signOut()}},{key:"getCurrentSession",value:function(){return w.Auth.currentSession()}},{key:"getAuthenticatedUser",value:function(){return w.Auth.currentAuthenticatedUser()}},{key:"isLoggedIn",value:function(){return this.isLoggedIn}}]),e}();T.loggedIn=!1;var M={get:{projects:[{name:"My First Novel",id:"12345",created_at:"Mon Aug 1 2019 21:57:47 GMT-0400 (Eastern Daylight Time)"},{name:"NaNoWriMo",id:"67890",created_at:"Mon Aug 12 2019 21:57:47 GMT-0400 (Eastern Daylight Time)"}],projectFiles:[{name:"Chapter One",projectId:"12345",id:"abcde",created_at:"Mon Aug 12 2019 21:57:47 GMT-0400 (Eastern Daylight Time)",word_count:1200,asset_url:"aws/folder/file1.txt"},{name:"Chapter Two",projectId:"12345",id:"fghij",created_at:"Mon Aug 12 2019 21:57:47 GMT-0400 (Eastern Daylight Time)",word_count:1030,asset_url:"aws/folder/file2.txt"},{name:"Chapter Three",projectId:"12345",id:"klmno",created_at:"Mon Aug 12 2019 21:57:47 GMT-0400 (Eastern Daylight Time)",word_count:1200,asset_url:"aws/folder/file3.txt"},{name:"Chapter Four",projectId:"12345",id:"pqrst",created_at:"Mon Aug 12 2019 21:57:47 GMT-0400 (Eastern Daylight Time)",word_count:1030,asset_url:"aws/folder/file4.txt"},{name:"Day One",projectId:"67890",id:"easy123",created_at:"Mon Aug 12 2019 21:57:47 GMT-0400 (Eastern Daylight Time)",word_count:1200,asset_url:"aws/folder/file5.txt"},{name:"Day Two",projectId:"67890",id:"hard456",created_at:"Mon Aug 12 2019 21:57:47 GMT-0400 (Eastern Daylight Time)",word_count:1030,asset_url:"aws/folder/file6.txt"}],files:{"aws/folder/file1.txt":{content:"Once upon a time in a large forbidden forest."},"aws/folder/file2.txt":{content:"The brave knight set out on his quest to rescue the fair princess."},"aws/folder/file3.txt":{content:"The battle was fierce, and the knight did not come out unwounded, but slay the great beast, he did."},"aws/folder/file4.txt":{content:"So the knight and the princess were wed, and the kingdom prospered, and the couple lived contentedly thereafter."},"aws/folder/file5.txt":{content:"OMG I'm writing so much today--gotta get my word counts in!"},"aws/folder/file6.txt":{content:"Day two is far harder than day one. I'm already tired and want to quit. Oh, bother."}}}},_={getProjects:function(){return new Promise(function(e,t){setTimeout(function(){e(M.get.projects)},300)})},getProjectFiles:function(e){return new Promise(function(t,a){setTimeout(function(){var a=M.get.projectFiles.filter(function(t,a){return t.projectId===e});t(a)},300)})},getFileData:function(e){return new Promise(function(t,a){setTimeout(function(){var a=M.get.projectFiles.filter(function(t,a){return t.id===e});t(a)},300)})},getFileContent:function(e){return new Promise(function(t,a){setTimeout(function(){t(M.get.files[e])},300)})}},D=new T({}),L=function(e){function t(){var e;return Object(h.a)(this,t),(e=Object(d.a)(this,Object(m.a)(t).call(this))).state={auth:{isAuthenticated:!1,isAuthenticating:!0,user:null,sessionToken:null}},e.configureSandbox=function(){return{app:{setAuthState:function(t){e.setState(Object(u.a)({},e.state,{auth:t}))},setAuthStatus:function(t){e.sandbox.app.setAuthState(Object(u.a)({},e.state.auth,{isAuthenticated:t}))},setSessionToken:function(t){e.sandbox.app.setAuthState(Object(u.a)({},e.state.auth,{sessionToken:t}))},setUser:function(t){e.sandbox.app.setAuthState(Object(u.a)({},e.state.auth,{user:t}))}},state:e.state,auth:D,ajax:_}},e.sandbox=e.configureSandbox(),e}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark(function e(){var t,a=this;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.Auth.currentSession();case 3:return e.sent,this.sandbox.app.setAuthStatus(!0),e.next=7,w.Auth.currentAuthenticatedUser();case 7:return t=e.sent,e.next=10,t.getSession(function(e,t){t.isValid()?a.sandbox.app.setSessionToken(t.getIdToken().getJwtToken()):console.log("no session")});case 10:this.sandbox.app.setUser(t),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0),this.sandbox.app.setAuthState({isAuthenticated:!1,user:null,sessionToken:null});case 17:this.sandbox.app.setAuthState(Object(u.a)({},this.state.auth,{isAuthenticating:!1}));case 18:case"end":return e.stop()}},e,this,[[0,13]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.sandbox.state=this.state,!this.state.auth.isAuthenticating&&r.a.createElement(g.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(y,Object.assign({},t,{sb:e.sandbox}))}}),r.a.createElement(b.a,{exact:!0,path:"/login",render:function(t){return r.a.createElement(y,Object.assign({},t,{sb:e.sandbox}))}}),r.a.createElement(b.a,{exact:!0,path:"/forgotpassword",render:function(t){return r.a.createElement(k,Object.assign({},t,{sb:e.sandbox}))}}),r.a.createElement(b.a,{exact:!0,path:"/verifyforgottenpassword",render:function(t){return r.a.createElement(x,Object.assign({},t,{sb:e.sandbox}))}}),r.a.createElement(b.a,{exact:!0,path:"/register",render:function(t){return r.a.createElement(A,Object.assign({},t,{sb:e.sandbox}))}}),r.a.createElement(b.a,{exact:!0,path:"/register/success",render:function(t){return r.a.createElement(S,Object.assign({},t,{sb:e.sandbox}))}}),r.a.createElement(b.a,{exact:!0,path:"/projects",render:function(t){return r.a.createElement(I,Object.assign({},t,{sb:e.sandbox}))}}),r.a.createElement(b.a,{exact:!0,path:"/projects/:id",render:function(t){return r.a.createElement(P,Object.assign({},t,{sb:e.sandbox}))}}),r.a.createElement(b.a,{exact:!0,path:"/projects/:id/edit/:fileId",render:function(t){return r.a.createElement(N,Object.assign({},t,{sb:e.sandbox}))}}))))}}]),t}(r.a.Component),U=a(46);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));v.a.configure({Auth:{mandatorySignId:!0,region:U.cognito.REGION,userPoolId:U.cognito.USER_POOL_ID,userPoolWebClientId:U.cognito.APP_CLIENT_ID}}),o.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},46:function(e){e.exports={cognito:{REGION:"us-east-1",USER_POOL_ID:"us-east-1_cArWJaWgd",APP_CLIENT_ID:"12tk99b5eso9q748bt1ufga54b"}}},53:function(e,t){}},[[115,1,2]]]);
//# sourceMappingURL=main.81a31da8.chunk.js.map