class Department {
    constructor () {}

    viewAll() {
        fetch('/api/departments')
    }
}

module.exports = Department;