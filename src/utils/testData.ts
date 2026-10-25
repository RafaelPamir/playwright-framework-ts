// Public demo credentials for https://www.saucedemo.com, overridable through .env.
const password = process.env.USER_PASSWORD ?? 'secret_sauce';

export const users = {
  standard: { username: process.env.STANDARD_USER ?? 'standard_user', password },
  lockedOut: { username: process.env.LOCKED_OUT_USER ?? 'locked_out_user', password },
};
