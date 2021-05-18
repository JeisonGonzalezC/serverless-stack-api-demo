export const hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Vamos Serverless v2.0! ${(await message({ time: 1, copy: 'Tu función fue ejecutada exitosamente!'}))}`,
    }),
  };
};

const message = ({ time, ...rest }) => new Promise((resolve, reject) =>
  setTimeout(() => {
    resolve(`${rest.copy} (con demora)`);
  }, time * 1000)
);