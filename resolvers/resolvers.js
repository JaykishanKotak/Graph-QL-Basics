import {
    nanoid
} from 'nanoid'

//Dummy Classs
class Course {
    constructor(id, {
        courseName,
        category,
        price,
        language,
        email,
        stack,
        teachingAssists
    })
    //Setup the values
    {
        this.id = id
        this.courseName = courseName
        this.category = category
        this.price = price
        this.language = language
        this.email = email
        this.stack = stack
        this.teachingAssists = teachingAssists
    }
}
const courseholder = {}

const resolvers = {
    getCourse: ({
        id
    }) => {
        return new Course(id, courseholder[id])
    },
    // Insert the data
    createCourse: ({
        input
    }) => {
        let id = nanoid()
        courseholder[id] = input
        return new Course(id, input)
    }
}

export default resolvers;