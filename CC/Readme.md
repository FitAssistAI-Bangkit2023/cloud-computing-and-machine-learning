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


## Login

- URL

  - `/user/login`

- Method

  - `POST`

- Request Body
  
  - `email` as string, required.
  - 'password' as string, required.


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


## Profile 

- URL

  - `/app/profile`

- Method

  - `GET`

- Headers

  - Authorization: `Bearer <idToken>`, required


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


## History

- URL

  - `/app/history`

- Method

  - `GET`

- Headers

  - Authorization: `Bearer <idToken>`, required
