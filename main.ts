import { InnerRenderFunction, RenderContext, start } from 'fresh/server.ts';
import manifest from './fresh.gen.ts';

import { config, overrides, setup, sheets } from 'style';

const sheet = sheets.virtualSheet();
sheet.reset();
setup({ ...config, sheet });

function render(ctx: RenderContext, render: InnerRenderFunction) {
  const snapshot = ctx.state.get('twind') as unknown[] | null;
  sheet.reset(snapshot || undefined);
  render();
  ctx.styles.splice(0, ctx.styles.length, ...sheet.target);
  const newSnapshot = sheet.reset();
  ctx.state.set('twind', newSnapshot);
  ctx.styles.push(overrides);
}

await start(manifest, { render });