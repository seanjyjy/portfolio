class CustomWebpackPlugin {
  constructor(options) {
    this.validateOptions(options);

    this.extractHtmlWebpackPluginModule = (compiler) => {
      const htmlWebpackPlugin = (compiler.options.plugins || []).find(
        (plugin) => {
          return plugin.constructor.name === "HtmlWebpackPlugin";
        }
      );
      if (!htmlWebpackPlugin) {
        return null;
      }
      const HtmlWebpackPlugin = htmlWebpackPlugin.constructor;
      if (!HtmlWebpackPlugin || !("getHooks" in HtmlWebpackPlugin)) {
        return null;
      }
      return HtmlWebpackPlugin;
    };

    this.options = options;
  }

  validateOptions(options) {
    if (!options || !options.outputPath) {
      throw new Error(console.log("Error: Please specify an outputPath."));
    }
  }

  reorderLinks(compilation, htmlPluginData) {
    var publicPath = htmlPluginData.publicPath;
    const assets = new Set(Object.keys(compilation.assets));
    compilation.chunks.forEach((chunk) => {
      chunk.files.forEach((file) => assets.add(file));
    });

    const endCssRe = /\.css$/m;
    const cssLinks = htmlPluginData.headTags.filter(
      (tag) => tag.tagName === "link" && tag.attributes.href.match(endCssRe)
    );
    var filtered = htmlPluginData.headTags.filter(
      (tag) => tag.tagName !== "link"
    );

    const mainCss = /^main/m;
    cssLinks.sort((linkA, linkB) => {
      var scoreA = linkA.attributes.href.match(mainCss) ? 0 : 1;
      var scoreB = linkB.attributes.href.match(mainCss) ? 0 : 1;
      return scoreA - scoreB;
    });

    htmlPluginData.headTags = filtered.concat(cssLinks);

    return htmlPluginData;
  }

  apply(compiler) {
    compiler.hooks.compilation.tap("CustomWebpack", (compilation) => {
      const HtmlWebpackPlugin = this.extractHtmlWebpackPluginModule(compiler);
      if (!HtmlWebpackPlugin) {
        throw new Error(
          "CustomWebpack needs to be used with html-webpack-plugin 4 or 5"
        );
      }
      const hooks = HtmlWebpackPlugin.getHooks(compilation);

      hooks.alterAssetTagGroups.tapAsync(
        "CustomWebpack",
        (htmlPluginData, callback) => {
          try {
            callback(null, this.reorderLinks(compilation, htmlPluginData));
          } catch (error) {
            callback(error);
          }
        }
      );
    });
  }
}

module.exports = CustomWebpackPlugin;
