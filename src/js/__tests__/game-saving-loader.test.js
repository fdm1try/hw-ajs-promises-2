import GameSavingLoader from '../game-saving-loader';

test('The load() function should return the object that the read() function returns in reader.js, as a JSON string', async () => {
  const data = await GameSavingLoader.load();
  expect(data).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}');
});
