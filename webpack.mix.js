let mix = require('laravel-mix');

mix.webpackConfig({
    target: 'electron-main'
});

mix.copy('src/license.html', 'license');
mix.copy('public/insight-logo.png', 'license');
mix.js('src/license.js', 'license');
mix.postCss("src/license.css", "license", [
    require("tailwindcss"),
]);
