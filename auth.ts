import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
    providers:[
        GithubProvider({
            clientId: process.env.CLIENT_ID as string,
            clientSecret: process.env.CLIENT_SECRET as string
        })
    ]
}