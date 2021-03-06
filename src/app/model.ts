const model = {
    user: 'Dmitriy',
    items: [
        { action: 'Buy flowers', done: false },
        { action: 'Get Shoes', done: false },
        { action: 'Collect Tickets', done: true },
        { action: 'Call Joe', done: false }
    ]
};

export class Model {
    user;
    items;
    constructor() {
        this.user = 'Dmitriy';
        this.items = [
            new TodoItem('Buy flowers', false),
            new TodoItem('Get Shoes', false),
            new TodoItem('Collect Tickets', false),
            new TodoItem('Call Joe', false)
        ]
    }
}

export class TodoItem {
    action;
    done;
    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}