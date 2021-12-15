import { rest } from 'msw';

const url = 'https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json';

export const handlers = [
  rest.put('http://localhost:3000/counter/increment', async(req, res, ctx) => {
    const { value } = req.body;
    return res(
      ctx.json({
        value: value + 2,
      })
    )
  }),
  rest.get(url, async( req, res, ctx) => {
    const id = req.url.searchParams.get('id')

    const originalResponse = await ctx.fetch(req);
    const originalResponseData = await originalResponse.json();

    return res(
      ctx.json({
        "data": {
          "people" :
          [
            {
              "name" : id,
              "age" : 1234
            },
            ...originalResponseData.data.people,
          ]
        }
      })
    )
  }),
  rest.get('/error', async(req, res, ctx) => {
    return res(
      ctx.status(403),
      ctx.json({
        errorMessage: 'Not Found'
      })
    )
  }),
]