class Validators {
    static validate_task_attributes(taskInfo){
        let status = true;
        for(let key in taskInfo){
            if(taskInfo[key].length == 0){
                status = false;
                break;
            }
        }
        if(status == true && 
            typeof taskInfo['completed'] == 'boolean')
            {
                return {
                    'status':true,
                    'message':'validated successfully'
                };
            }
            return {
                'status':false,
                'message':'invalid task information'
            };
    }
    static validate_tasks(taskInfo){
        if(taskInfo.hasOwnProperty('title') &&
           taskInfo.hasOwnProperty('description') &&
           taskInfo.hasOwnProperty('completed')){
        if(
        taskInfo['title'].length != 0 &&
        taskInfo['description'].length !=0 && 
        typeof taskInfo['completed'] == 'boolean'){
            return {
                'status':true,
                'message':'validated successfully'
            };
        }
    }
        return {
            'status':false,
            'message':'invalid task information'
        };
    }
    static get_task_id(taskInfo){
        let maxId = 0;
        taskInfo.forEach( task => {
            if(task.id > maxId){
                maxId = task.id;
            }
        });
        return maxId+1;
    }
    static is_valid_task_id(taskInfo,taskId){
        for(let i=0; i<taskInfo.length; i++){
            if(taskInfo[i].id == taskId){
                return {
                    'status':true,
                    'message':'Valid task id',
                    'task':taskInfo[i],
                    'index':i
                };
            }
        }
        return {
            'status':false,
            'message':'Invalid task id',
            'task':null,
            'index':null
        };
    }
}

module.exports = Validators;