var credentials = require('./testSeed/loginUser');

async function loginUser(email, password) {
  await page.click('input[name=loginEmail]');
  await page.type('input[name=loginEmail]', `${email}`);
  await page.click('input[name=loginPassword]');
  await page.type('input[name=loginPassword]', `${password}`);
  await page.click('#login-button');
}

beforeAll(async () => {
  browser.on('disconnected', () => {
    browser.close();
  });
});
beforeEach(async () => {
  await jestPuppeteer.resetPage();
  return page.goto('http://localhost:3000/');
});

describe('Recipe calculator login Error tests', () => {
  it('it shows missing field message on email missing', async () => {
    await page.click('input[name=loginEmail]');
    await page.type(
      'input[name=loginEmail]',
      `${credentials.missingFieldCredentials.email}`
    );

    await page.click('#login-button');

    await page.waitForSelector('#required-field-message');
    const errorMessage = await page.$eval('#required-field-message', el =>
      el ? true : false
    );
    expect(errorMessage).toBe(true);
  }, 10000);

  it('it shows error message to customer on invalid login', async () => {
    await loginUser(
      credentials.incorrectCredentials.email,
      credentials.incorrectCredentials.password
    );
    await page.waitForSelector('#error-message');
    const errorMessage = await page.$eval('#error-message', el =>
      el ? true : false
    );
    expect(errorMessage).toBe(true);
  }, 10000);

  it('it logs in user and redirects to ownerdashboard', async () => {
    //expect(await page.$eval('#login-button', btn => btn.disabled)).toBe(false);
    await loginUser(
      credentials.correctCredentials.email,
      credentials.correctCredentials.password
    );

    await page.waitForSelector('#ownerdashboard');

    const url = await page.mainFrame().url();
    expect(url).toContain('ownerDashboard');
    const heading = await page.$eval('#dashboard', el => (el ? true : false));
    expect(heading).toBe(true);
  }, 10000);
});
