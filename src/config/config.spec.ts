import { config } from '@/config/config';

describe('Config', () => {
  it('has a title', () => expect(typeof config.title).toStrictEqual('string'));
  it('has a description', () =>
    expect(typeof config.description).toStrictEqual('string'));
  it('has an update date', () =>
    expect(typeof config.lastUpdated).toStrictEqual('string'));
  it('has a site image', () =>
    expect(typeof config.siteImg).toStrictEqual('string'));
  it('has an email', () => {
    expect(typeof config.email).toStrictEqual('string');
    expect(config.email).toMatch(/([\w\d\.\-])+\@(\w+)\.(\w+)/);
  });
  it('has an email link', () => {
    expect(typeof config.emailLink).toStrictEqual('string');
    expect(config.emailLink).toStrictEqual(`mailto:${config.email}`);
  });
  it('has a version', () => {
    expect(typeof config.version).toStrictEqual('string');
    expect(config.version).toMatch(/\d+\.\d+\.\d+/);
  });
  it('has a repo link', () => {
    expect(typeof config.repo).toStrictEqual('string');
    expect(new URL(config.repo));
  });
  it('has valid pages', () => {
    expect(config.pages).toBeInstanceOf(Object);

    for (const [key, path] of Object.entries(config.pages)) {
      expect(typeof key).toStrictEqual('string');
      expect(key).toMatch(/^[\w\d]+$/);
      expect(key).toStrictEqual(key.trim());

      expect(typeof path).toStrictEqual('string');
      if (path !== '/') expect(path.endsWith('/')).toBeFalsy();
      expect(path.endsWith(' ')).toBeFalsy();

      expect(path).toBeValidPath();
    }
  });

  it('has socials', () => {
    for (const social of Object.values(config.social))
      expect(social).toMatchObject({ value: /.*/, link: /.*/ });
  });
});
