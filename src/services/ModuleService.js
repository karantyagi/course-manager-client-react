
// const MODULE_API_URL =
//     'http://localhost:8080/api/course/CID/module';

const MODULE_API_URL =
    'https://kt-course-manager-server.herokuapp.com/api/course/CID/module';

let _singleton = Symbol();
export default class ModuleService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    findAllModulesForCourse(courseId) {
        return fetch(
            MODULE_API_URL
                .replace('CID', courseId))
            .then(function (response) {
                return response.json();
            })
    }

    createModule(courseId, module) {
        return fetch(MODULE_API_URL.replace('CID', courseId),
            {
                body: JSON.stringify(module),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    deleteModule(courseId,moduleId) {
        return fetch(MODULE_API_URL.replace('CID', courseId)+ '/' + moduleId,
            {
                method: 'DELETE'
            }).then(function (response) {
            return response;
        })

    }


    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton]
    }
}