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
    console.log(htmlPluginData.headTags);
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

      console.log("came here");

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

  //   apply(compiler) {
  //     compiler.hooks.emit.tapAsync(
  //       "CustomWebpackPlugin",
  //       (compilation, callback) => {
  //   let string = compilation.assets["index.html"];

  //   const re = /\<link.*rel="stylesheet".*(\/\>|\>)/g;
  //   console.log(typeof string);
  //   // const links = string.match(re);

  //         // console.log(links);
  //         //Register asynchronous hook in callback mode
  //         const copyrightText = "copyright belongs to jackysummer";
  //         //Compilation stores all the contents of this package
  //         //All the files to be generated are on its assets property
  //         compilation.assets["copyright.txt"] = {
  //           //Add copyright.txt
  //           source: function () {
  //             return copyrightText;
  //           },
  //           size: function () {
  //             //File size
  //             return copyrightText.length;
  //           },
  //         };
  //         callback(); // must be called
  //       }
  //     );

  // const { outputPath, fileName = "manifesto.json" } = this.options;
  // // console.log(compiler);
  // compiler.hooks.done.tap("Custom Manifest", (stats) => {
  //   const assetsManifest = [];
  //   const { assets } = stats.compilation;

  //   if (Boolean(assets["index.html"])) return;

  //   let file = fs.readFile("index.html");
  //   //   try {
  //   //     let filePath = outputPath + "/" + fileName;
  //   //   } catch (error) {
  //   //     console.log(error)
  //   //   }
  // });
  //   }
}

module.exports = CustomWebpackPlugin;
