
const LESSON_API_URL =
    'http://localhost:8080/api/course/CID/module/MID/lesson';

let _singleton = Symbol();
export default class LessonService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    findAllLessonsForModule(courseId,moduleId) {
        return fetch(
            LESSON_API_URL
                .replace('CID', courseId).replace('MID', moduleId))
            .then(function (response) {
                return response.json();
            })
    }

    createLesson(courseId, moduleId, lesson) {

        //console.log("TEST : ",LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId));
        // /api/course/{courseId}/module/{moduleId}/lesson
        return fetch(LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId),
            {
                body: JSON.stringify(lesson),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    deleteLesson(courseId,moduleId,lessonId) {
        return fetch(LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId)+ '/' + lessonId,
            {
                method: 'DELETE'
            }).then(function (response) {
            return response;
        })

    }


    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton]
    }
}