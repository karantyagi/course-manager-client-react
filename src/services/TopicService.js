
const TOPIC_API_URL =
    'http://localhost:8080/api/course/CID/module/MID/lesson/LID/topic';

let _singleton = Symbol();
export default class TopicService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    findAllTopicsForLesson(courseId,moduleId,lessonId) {
        console.log("cool:",TOPIC_API_URL
            .replace('CID', courseId).replace('MID', moduleId).replace('LID',lessonId));
        return fetch(
            TOPIC_API_URL
                .replace('CID', courseId).replace('MID', moduleId).replace('LID', lessonId))
            .then(function (response) {
                return response.json();
            })
    }

    // createLesson(courseId, moduleId, lesson) {
    //
    //     //console.log("TEST : ",LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId));
    //     // /api/course/{courseId}/module/{moduleId}/lesson
    //     return fetch(LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId),
    //         {
    //             body: JSON.stringify(lesson),
    //             headers: { 'Content-Type': 'application/json' },
    //             method: 'POST'
    //         }).then(function (response)
    //     { return response.json(); })
    // }
    //
    // deleteLesson(courseId,moduleId,lessonId) {
    //     return fetch(LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId)+ '/' + lessonId,
    //         {
    //             method: 'DELETE'
    //         }).then(function (response) {
    //         return response;
    //     })
    //
    // }


    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new TopicService(_singleton);
        return this[_singleton]
    }
}