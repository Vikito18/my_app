import { pbkdf2Sync } from "crypto"

const hashPassword = (password) => {
  const hash = pbkdf2Sync(
    password,
    process.env.PASSWORD_SALT,
    100000,
    512,
    "sha3-512",
  ).toString("hex")

  return hash
}

export default hashPassword
