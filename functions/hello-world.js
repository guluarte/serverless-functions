exports.handler = async () => {
  console.log(process.env.TEST_VALUE)
  return {
    statusCode: 200,
    body: 'Hello egghead'
  }
}
