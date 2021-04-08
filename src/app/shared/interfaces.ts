export interface User {
  email: string
  password: string
  returnSecureToken?: boolean
}

export interface FbAuthResponse {
  idToken: string
  expiresIn: string
}

export interface Post {
  id?: string | any
  title: string
  text: string
  author: string | undefined
  date: Date | string
}

export interface FbCreateResponse {
  name: string
}
