class LocalStorage {
    constructor() {
        this.key = 'entries';
    }

    isLocalStorageSupported() {
        try {
            localStorage.setItem('test', 'test');
            localStorage.removeItem('test');
            return true;
        } catch (error) {
            return false;
        }
    }

    pushToLocalStorage(object) {
        if (!this.isLocalStorageSupported()) {
            throw new Error('Error saving in LocalStorage.js');
        } else {
            localStorage.setItem(this.key, JSON.stringify(object));
        }
    }

    pullFromLocalStorage() {
        if (localStorage.getItem(this.key)) {
            return JSON.parse(localStorage.getItem(this.key));
        }
        return [];
    }
}

export default LocalStorage;