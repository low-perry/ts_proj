// eslint-disable-next-line @typescript-eslint/no-namespace, @typescript-eslint/no-unused-vars
declare namespace Express {
    export interface Request {
      user: {
        _id: string
        name: string
        email: string
        isAdmin: boolean
        token: string
      }
    }
  }