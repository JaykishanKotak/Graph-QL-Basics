import {
    buildSchema
} from 'graphql'

const schema = buildSchema(`
    type Course {
        id: ID
        courseName: String
        category: String
        price: Int
        language: String
        email: String
        stack: Stack
        teachingAssists: [TeachingAssist]
        //Custom Type
    }

    type TeachingAssist {
        firstName: String
        lastName: String
        experience: Int
    }

    //Data type of Choices 
    enum Stack {
        WEB
        MOBILE
        DESKTOP
        OTHER
    }

    //Accpet ID and return Data
    type Query {
        getCourse(id: ID): Course
    }

    // Return Of Query, input set return od data from schema
    input CourseInput{
        id: ID
        courseName: String!
        category: String
        price: Int!
        language: String
        email: String
        stack: Stack
        teachingAssists: [TeachingAssistInput]!
    }

    input TeachingAssistInput{
        firstName: String
        lastName: String
        experience: Int
    }

    type Mutation {
        createCourse(input: CourseInput): Course
    }
`)

export default schema;