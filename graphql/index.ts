export const getUserQuery = `
    query getUser($email: String!) {
        user(email: $email) {
            id
            email
            name    
            avatarUrl
            description
            githubUrl
            linkedInUrl
        }
    }
    `;

export const createUserMutation = `
    mutation CreateUser($input: UserCreateInput!) {
        userCreate(input: $input) {
            user {
                id
                email
                name    
                avatarUrl
                description
                linkedInUrl
                githubUrl
            }
        }
    }
    `;
