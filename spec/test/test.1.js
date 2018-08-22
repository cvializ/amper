const fs = require('fs');

describe('test suite 2', () => {
  beforeEach(async (browser, env) => {
    env.a = 1;
  });

  afterEach(async (browser, env) => {
    // expect(env.a).to.equal(2);
  });

  for (let i = 0; i < 20; i++) {
    const j = i;
    it(`should run ${j}`, async (browser, env) => {
      expect(env.a).to.equal(1);
      env.a = 2;
      await browser.get('http://www.google.com/ncr');
      fs.writeFileSync(`test-2-${j}-${Date.now()}.png`, await browser.takeScreenshot(), 'base64');
    });
  }

  it('should throw error', async (browser, env) => {
    // throw new Error(1);
  })
}).timeout(10000);
