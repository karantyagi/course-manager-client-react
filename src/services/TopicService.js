
const TOPIC_API_URL =
    'http://localhost:8080/api/course/CID/module/MID/lesson/LID/topic';

// const TOPIC_API_URL =
//     'https://kt-course-manager-server.herokuapp.com/api/course/CID/module/MID/lesson/LID/topic';

let _singleton = Symbol();
export default class TopicService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    findAllTopicsForLesson(courseId,moduleId,lessonId) {
        return fetch(
            TOPIC_API_URL
                .replace('CID', courseId).replace('MID', moduleId).replace('LID', lessonId))
            .then(function (response) {
                return response.json();
            })
    }

    createTopic(courseId, moduleId, lessonId, topic) {

        //console.log("TEST : ",LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId));
        // /api/course/{courseId}/module/{moduleId}/lesson
        return fetch(TOPIC_API_URL.replace('CID', courseId).replace('MID', moduleId).replace('LID',lessonId),
            {
                body: JSON.stringify(topic),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }



    deleteTopic(courseId,moduleId,lessonId,topicId) {
        return fetch(TOPIC_API_URL.replace('CID', courseId).replace('MID', moduleId).replace('LID',lessonId)+ '/' + topicId,
            {
                method: 'DELETE'
            }).then(function (response) {
            return response;
        })

    }


    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new TopicService(_singleton);
        return this[_singleton]
    }
}