import { SERVER_DATA } from '../mocks/dummyData'

// TODO: Return consistent mock server responses
// TODO: Implement the API in Lambda/API Gateway

let ajax = {
    getProjects: () => {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(SERVER_DATA.get.projects);
            }, 300);
        });
    },

    getProjectFiles: (projectId) => {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                const projectFiles = SERVER_DATA.get.projectFiles.filter((item, index) => {
                    return item.projectId === projectId
                })
                resolve(projectFiles);
            }, 300);
        });
    },

    getFileData: (fileId) => {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                const projectFile = SERVER_DATA.get.projectFiles.filter((item, index) => {
                    return item.id === fileId
                })
                resolve(projectFile);
            }, 300);
        });
    },

    getFileContent: (fileName) => {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(SERVER_DATA.get.files[fileName]);
            }, 300);
        });
    }
}

export { ajax }