module.exports = api => {
    api.cache(true);

    const presets = ['next/babel', '@zeit/next-typescript/babel', '@babel/preset-typescript'];
    const plugins = [
        [
            'module-resolver',
            {
                root: ['./'],
                alias: {
                    '@pages': './pages',
                },
            },
        ],
        'babel-plugin-styled-components',
    ];

    return {
        presets,
        plugins,
    };
};
