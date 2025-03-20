module.exports = {
    presets: [
        [
            '@babel/preset-env', 
            { 
                targets: { node: 'current' },
                // 启用对 ES Modules 的支持
                modules: 'auto' 
            } 
        ]
    ],
    plugins: [
        // 转换 ES Modules 为 CommonJS 模块
        '@babel/plugin-transform-modules-commonjs' 
    ]
};