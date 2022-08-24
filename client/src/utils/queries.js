import { gql } from '@apollo/client';

<<<<<<< HEAD
export const QUERY_WORKOUTS = gql`
    query workouts($username: String) {
        workouts(username: $username) {
            _id
            workoutName
            description
            caloriesBurned
            exercises 
        }
    }
`
export const QUERY_WORKOUT = gql`
    query workout($id: ID!) {
        workout(_id: $id) {
            _id
            workoutName
            description
            caloriesBurned
            exercises 
        }
    }
`

export const QUERY_EATS = gql`
    query eats($username: String) {
        eats(username: $username) {
            _id
            date
            timeSlept
        }
    }
`

export const QUERY_EAT = gql`
    query eat($id: ID!) {
        eat(_id: $id) {
            _id
            date
            caloriesEaten
        }
    }
`

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      Dob
      FavWorkout
      sleeps {
        _id
        timeSlept
        sleepRating
        username
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
{
  me {
    _id
    username
    email
    Dob
    FavWorkout
    sleeps {
      _id
      timeSlept
      sleepRating
      username
      createdAt
    }
  }
}

`;

export const QUERY_ME_BASIC = gql`
{
    me {
      _id
      username
      email
      Dob
      FavWorkout
    }
  }
`;

export const QUERY_SLEEP = gql`
query sleep($id: ID!) {
  sleep(_id: $id) {
        _id
        timeSlept
        sleepRating
        username
        createdAt
  }
}
`;

export const QUERY_SLEEPS = gql`
query sleeps($username: String) {
    sleeps(username: $username){
      _id
        timeSlept
        sleepRating
        username
        createdAt 
    }
}
`;
