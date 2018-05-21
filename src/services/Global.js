var cid = 0;

    let _singleton = Symbol();
    export default class Global {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }


    getCid(){
        return cid;
    }

    setCid(courseID){
        cid = courseID;
    }

}