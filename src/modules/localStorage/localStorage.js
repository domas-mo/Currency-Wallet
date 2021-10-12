class LocalStorage {
    constructor() {
        this.key = 'entries';
    }

    test() {
        try {
            localStorage.setItem('test', 'test');
            localStorage.removeItem('test');
            return true;
        } catch (error) {
            return false;
        }
    }

    pushItem(object) {
        if (!this.test()) {
            throw new Error('Error saving in LocalStorage.js');
        } else {
            localStorage.setItem(this.key, JSON.stringify(object));
        }
    }

    pullItem() {
        if (localStorage.getItem(this.key)) {
            return JSON.parse(localStorage.getItem(this.key));
        }
        return [];
    }
}

export default LocalStorage;