import { font } from '@/config/font';

for (const [id, fontConfig] of Object.entries(font))
  describe(`Font config ${id}`, () => {
    it('should have font weight', () => {
      expect([100, 200, 300, 400, 500, 600, 700, 800, 900]).toContain(
        fontConfig.weight,
      );
    });

    it('should have font family', () => {
      expect(typeof fontConfig.family).toStrictEqual('string');
    });

    it('should have font variable', () => {
      expect(typeof fontConfig.variable).toStrictEqual('string');
    });
  });
