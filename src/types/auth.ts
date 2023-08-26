export type SignupType = EmailAndPassword & MoreSignupInfo;

export type EmailAndPassword = {
  "email_address": string,
  "password": string,
}

export type MoreSignupInfo = {
  "first_name": string,
  "last_name": string,
  "date_of_birth"?: Date
  phone_number?: string,
  nickname?: string,
}

export type LoginType = {
  "email_address": string,
  "password": string
}

export type User = {
  "token"?: string,
  "id": string,
  "email_address": string,
  "first_name": string,
  "last_name": string,
  "username": string,
  "total_balance": number,
  "total_returns": number | null,
}
