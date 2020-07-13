import { GatsbyNode, PluginOptions } from 'gatsby';

export interface Options extends PluginOptions {
  key: string;
}

export const sourceNodes: GatsbyNode['sourceNodes'] = async (
  {
    actions: { createNode },
    store,
    createNodeId,
    createContentDigest,
    reporter,
  },
  options: Options
): Promise<void> => {};
