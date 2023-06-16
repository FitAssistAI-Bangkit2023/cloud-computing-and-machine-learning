# Readme
---

## Regiter

- URL

  - `/user/register`

- Method

  - `POST`

- Request Body

  - `username` as string, required.
  - `email` as string, required.
  - `password` as string, required.

- Response Body
  - [Sample 1](https://github.com/nabawiAwi/FitAsistAi-ApiRequirements/blob/master/response_samples/register.json)


## Login

- URL

  - `/user/login`

- Method

  - `POST`

- Request Body
  
  - `email` as string, required.
  - 'password' as string, required.
  
- Response Body
  - [Sample 1](https://github.com/nabawiAwi/FitAsistAi-ApiRequirements/blob/master/response_samples/login.json)

## Information

- URL

  - `/app/information`

- Method

  - `POST`
 
- Request Body
  
  - `age` as number.
  - `weight` as number.
  - `height` as number.
  - `gender` as string.

- Headers

  - Authorization: `Bearer <idToken>`, required

- Response Body
  - [Sample 1](https://github.com/nabawiAwi/FitAsistAi-ApiRequirements/blob/master/response_samples/information.json)

## Profile 

- URL

  - `/app/profile`

- Method

  - `GET`

- Headers

  - Authorization: `Bearer <idToken>`, required

- Response Body
  - [Sample 1](https://github.com/nabawiAwi/FitAsistAi-ApiRequirements/blob/master/response_samples/profile.json)


## Result  

- URL

  - `/app/result`

- Method

  - `POST`

- Request Body

  - `type` as string
  - `times` as number
  - `reps` as number
  - `menit` as number

- Headers

  - Authorization: `Bearer <idToken>`, required

- Response Body
  - [Sample 1](https://github.com/nabawiAwi/FitAsistAi-ApiRequirements/blob/master/response_samples/result.json)


## History

- URL

  - `/app/history`

- Method

  - `GET`

- Headers

  - Authorization: `Bearer <idToken>`, required

- Response Body
  - [Sample 1](https://github.com/nabawiAwi/FitAsistAi-ApiRequirements/blob/master/response_samples/history.json)

