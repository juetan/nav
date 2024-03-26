
/**
 * 用户登陆
 */
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { username, password } = body;

  if (!username || !password) {
    throw createError({
      statusCode: 400,
      message: '账号或密码为空',
    });
  }

  const user = await db.user.findUnique({ where: { username } });
  if (!user) {
    throw createError({
      statusCode: 401,
      message: '账号不存在',
    });
  }

  if (password !== user.password) {
    throw createError({
      statusCode: 401,
      message: '密码错误',
    });
  }

  const config = useRuntimeConfig();
  const serializedUser = JSON.stringify({ uid: user.id });
  const session = sign(serializedUser, config.cookieSecret);

  setCookie(event, config.cookieName, session, {
    httpOnly: true,
    path: '/',
    sameSite: 'strict',
    expires: new Date(Date.now() + config.cookieExpires),
  });

  const { password: _, ...userWithoutPassword } = user;

  return userWithoutPassword;
});
